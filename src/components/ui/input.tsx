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
              "peer block w-full rounded-lg border border-text bg-white placeholder:text-text pt-4 pb-2 px-3 text-sm text-[var(--color-primary-text)] appearance-none focus:border-[var(--color-text)] focus:outline-none focus:ring-0",
              icon ? "pl-10" : "",
              className
            )}
            {...props}
          />

          {/* label شناور */}
          {label && (
            <label
              htmlFor={props.id}
              className={cn(
                "absolute right-3 top-2 z-10 transform -translate-y-4 scale-75 origin-top-left bg-white px-2 text-sm font-medium text-[var(--color-text)] duration-300",
                "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
                "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2 peer-focus:text-[var(--color-text)] peer-focus:translate-x-0"
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
