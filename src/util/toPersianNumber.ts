export const toPersianNumber = (num?: number | string) => {
  if (num === undefined || num === null) return "۰";
  return num.toString().replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};
