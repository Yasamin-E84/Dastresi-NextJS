export const faNumber = (value) => new Intl.NumberFormat("fa-IR").format(value);
export const faDigits = (value) =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
