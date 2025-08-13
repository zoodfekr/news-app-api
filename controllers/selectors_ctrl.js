import { selectors_model } from "../models/selectors_model.js";

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
    const newSelector = new selectors_model(selectorData);
    await newSelector.save();
    res.status(201).json(newSelector);
  } catch (error) {
    res.status(500).json({ message: "Error creating selector" });
  }
};
