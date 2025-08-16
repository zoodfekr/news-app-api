import translate from "google-translate-api-x";
import { ai_chat } from "../utils/ai_chat.js";

export const getAi = async (req, res) => {
  const { title, summary, link, site } = req.body;

  try {
    const translatedText = await translate(title, { to: "fa" });
    const translatedSummary = await translate(summary, { to: "fa" });

    const promptText = "این متن را به فارسی روان تبدیل کن: ";

    const response_title = await ai_chat(`${promptText} ${title}`);
    const response_summary = await ai_chat(`${promptText} ${summary}`);

    const data_title = await response_title.json();
    const data_summary = await response_summary.json();

    const values = {
      title: translatedText.text,
      summary: translatedSummary.text,
      title_en: title,
      summary_en: summary,
      ai_title: data_title,
      ai_summary: data_summary,
      link: link,
      site: site,
    };

    res.status(200).json(values);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching AI response" });
  }
};
