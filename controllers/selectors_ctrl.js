import { selectors_model } from "../models/selectors_model.js";
import { ai_chat } from "../utils/ai_chat.js";
import { sourceValidationSchema } from "../validation/selector_chema.js";

// دریافت تمام سلکتورها
export const getAllSelectors = async (req, res) => {
  try {
    const selectors = await selectors_model.find();
    res.status(200).json(selectors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching selectors" });
  }
};

// ذخیره سلکتورها
export const createSelector = async (req, res) => {
  try {
    await sourceValidationSchema.validate(req.body, { abortEarly: false });

    // ai section
//     const prompt = `You are given a JSON object. Your task is to clean the values of all CSS selector fields. 
// Specifically, if a selector value ends with ":nth-of-type(x)" (for any number x), remove that part from the string. 
// Do not change anything else in the JSON. 
// Return the cleaned JSON in the exact same structure and format, without adding explanations or extra fields.`;

const prompt = 'مقادیر :nth-of-type(x) را از این دیتا پاک کنی و بعد ان را برگشت بدی وظیفه تو این است که '

    const response_ai = await ai_chat(`${prompt} : ${JSON.stringify(req.body)}`);

    console.log("ai respone ---- >", response_ai);
    // end ai sectin

    const exist_selector = await selectors_model.findOne({
      name: req.body.name,
    });

    if (exist_selector)
      return res.status(400).json({ message: "سکلتور موجود است" });

    const selectorData = { ...req.body, createdAt: new Date() };

    const newSelector = new selectors_model(selectorData);

    await newSelector.save();

    res.status(201).json({ msg: "ذخیره شد" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = error.inner.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).json({ message: "Validation error", errors });
    }
    res.status(500).json({ message: "Error creating selector" });
  }
};
