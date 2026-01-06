import * as React from "react";
import { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import ErrorMessage from "@/shared/common/ErrorMessage";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative w-full">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            placeholder=" "
            aria-invalid={!!error}
            className={cn(
              "peer block w-full rounded-lg border border-text text-text  bg-white placeholder:text-text pt-4 pb-2 px-3 text-sm  appearance-none focus:border-text focus:outline-none focus:ring-0",
              icon ? "pl-10" : "",
              className
            )}
            {...props}
          />

          {label && (
            <label
              htmlFor={props.id}
              className={cn(
                "absolute right-2 top-2 z-10 origin-top-right bg-white px-2 text-sm font-medium text-text duration-300",
                "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75",
                "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75"
              )}
            >
              {label}
            </label>
          )}
        </div>

        {error && (
          <div className="mt-3">
            <ErrorMessage message={error.message} />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
