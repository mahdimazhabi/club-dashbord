import { format, isToday, isValid, isYesterday } from "date-fns-jalali";

export function persianDate(date?: string | Date | null) {
  if (!date) return "";
  const parsedDate = new Date(date);
  if (!isValid(parsedDate)) return "";
  return format(parsedDate, "yyyy/MM/dd");
}

export function formatDateWithTime(date: string | Date) {
  const parsedDate = new Date(date);
  const time = format(parsedDate, "HH:mm");

  if (isToday(parsedDate)) {
    return `امروز  ${time}`;
  } else if (isYesterday(parsedDate)) {
    return `دیروز  ${time}`;
  } else {
    return `${format(parsedDate, "yyyy/MM/dd")} , ${time}`;
  }
}

export function persianDateRow(date: string | Date) {
  const parsedDate = new Date(date);

  if (isToday(parsedDate)) {
    return `امروز`;
  } else if (isYesterday(parsedDate)) {
    return `دیروز`;
  } else {
    return format(parsedDate, "yyyy/MM/dd");
  }
}

export function timeDate(date: string | Date) {
  return format(new Date(date), "HH:mm");
}

export function getPersianWeekday(date: string | Date): string {
  return format(new Date(date), "EEEE");
}

export function fullPersianDate(date?: string | Date | null) {
  if (!date) return "تاریخ نامشخص";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "تاریخ نامعتبر";
  return format(d, "EEEE d MMMM yyyy");
}
