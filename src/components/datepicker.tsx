import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/green.css";
import { FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface DatePickerProps {
  placeholder?: string;
  value?: Date | DateObject | string;
  onChange?: (date: DateObject | null) => void;
  error?: FieldError;
}

export function Datepicker({
  placeholder,
  value,
  onChange,
  error,
}: DatePickerProps) {
  return (
    <div className="w-full flex-1">
      <div className="[&_.rmdp-container]:w-full! [&_.rmdp-container]:block!">
        <DatePicker
          value={value}
          onChange={onChange}
          calendar={persian}
          locale={persian_fa}
          className="bg-white w-full"
          inputClass={`
                        "peer block w-full rounded-lg border border-text text-text  bg-white placeholder:text-text pt-4 pb-2 px-3 text-sm  appearance-none focus:border-text focus:outline-none focus:ring-0",
                   
                      )`}
          inputMode=""
          placeholder={placeholder}
        />
      </div>
      {error ? (
        <div className="min-h-5 mt-1">
          <ErrorMessage message={error.message} />
        </div>
      ) : null}
    </div>
  );
}

export default Datepicker;
