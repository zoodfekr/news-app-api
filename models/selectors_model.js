import mongoose from "mongoose";

const selectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  title_selector: { type: String, required: true },
  summary_selector: { type: String, required: false, default: "" },
  link_selector: { type: String, required: true },
  lang: { type: String, required: false, default: "" },
  country: { type: String, required: false, default: "" },
  image: { type: String, required: false, default: "" },

  css_selector: {
    title: { type: String, required: true },
    summary: { type: String, required: false, default: "" },
    date: { type: String, required: false, default: "" },
    category: { type: String, required: false, default: "" },
    content: { type: String, required: true },
    image: { type: String, required: false, default: "" },
  },

  date: { type: Date, required: false, default: Date.now },
});

export const selectors_model = mongoose.model("test", selectorSchema);
