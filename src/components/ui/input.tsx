import * as React from "react";
import { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import ErrorMessage from "@/shared/common/ErrorMessage";
import { Label } from "@/components/ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, value, onChange, icon, ...props }, ref) => {
    return (
      <div className="">
        <div className="relative  z-10">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            data-slot="input"
            aria-invalid={!!error}
            className={cn(
              " peer file:text-foreground placeholder:text-muted-foreground placeholder:text-xs selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-sidebar-accent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              icon ? "pl-10" : "",
              className
            )}
            value={value}
            onChange={onChange}
            {...props}
          />
          {label && (
            <Label
              htmlFor={props.id}
              className="mb-2 block text-sm font-medium text-spidar1  absolute  duration-300 transform -translate-6  scale-75 top-3 -z-10 order-[0] peer-focus:start-0 peer-focus:text-spidar2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-6  "
            >
              {label}
            </Label>
          )}
        </div>
        <div className=" mt-1">
          {error && <ErrorMessage message={error.message} />}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
