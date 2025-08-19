import * as Yup from "yup";

export const sourceValidationSchema = Yup.object().shape({
  name: Yup.string().required("فیلد name الزامی است"),
  url: Yup.string().url("فرمت url معتبر نیست").required("فیلد url الزامی است"),
  container_selector: Yup.string().required(
    "فیلد container_selector الزامی است"
  ),

  title_selector: Yup.string().required("فیلد title_selector الزامی است"),

  summary_selector: Yup.string().nullable(), // می‌تونه خالی باشه

  link_selector: Yup.string().required("فیلد link_selector الزامی است"),

  lang: Yup.string()
    .oneOf(["en", "fa", "ar", "fr", "de"], "زبان نامعتبر است")
    .required("فیلد lang الزامی است"),

  country: Yup.string().required("فیلد country الزامی است"),

  image: Yup.string().nullable(),

  css_selector: Yup.object().shape({
    title: Yup.string().required("css_selector.title الزامی است"),
    summary: Yup.string().nullable(),
    date: Yup.string().required("css_selector.date الزامی است"),
    category: Yup.string().required("css_selector.category الزامی است"),
    content: Yup.string().required("css_selector.content الزامی است"),
    image: Yup.string().required("css_selector.image الزامی است"),
  }),
});
