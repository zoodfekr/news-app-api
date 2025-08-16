import { selectors_model } from "../models/selectors_model.js";
import { ai_chat } from "../utils/ai_chat.js";

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
    const selectorData = {
      ...req.body,
      createdAt: new Date(),
    };
    console.log("original:-----", req.body.css_selector.summary);

    const response_ai = await ai_chat(
      `You are a CSS selector simplifier.  
Your task is to transform complex CSS selectors into simpler and delete content number.
give me only simplified selector
${req.body.css_selector.summary}`
    );

    console.log("ai:-----", response_ai);

    // const newSelector = new selectors_model(selectorData);
    // await newSelector.save();
    // res.status(201).json(newSelector);
    res.status(201).json({ msg: "ok" });
  } catch (error) {
    res.status(500).json({ message: "Error creating selector" });
  }
};
