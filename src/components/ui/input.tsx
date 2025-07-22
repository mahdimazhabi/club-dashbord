import * as React from "react";
import { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";
import ErrorMessage from "@/shared/common/ErrorMessage";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";
import { Button } from "./button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
  icon?: React.ReactNode; // اضافه کردن پراپس آیکون
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      label,
      value,
      onChange,
      defaultValue,
      icon,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue || value || "0"
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleIncrement = () => {
      const newValue = (parseInt(internalValue as string) || 0) + 1;
      setInternalValue(newValue.toString());
      if (onChange) {
        const event = {
          target: {
            value: newValue.toString(),
            name: props.name,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const handleDecrement = () => {
      const currentValue = parseInt(internalValue as string) || 0;
      if (currentValue > 0) {
        const newValue = currentValue - 1;
        setInternalValue(newValue.toString());
        if (onChange) {
          const event = {
            target: {
              value: newValue.toString(),
              name: props.name,
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) {
        setInternalValue(newValue);
        if (onChange) {
          const event = {
            target: {
              value: newValue,
              name: props.name,
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
      }
    };

    return (
      <div>
        {type === "number" ? (
          <div className="items-center max-w-[14rem]">
            {label && (
              <Label
                htmlFor={props.id}
                className="mb-2 block text-sm font-medium text-spidar1"
              >
                {label}
              </Label>
            )}
            <div className="flex">
              <Button
                type="button"
                onClick={handleDecrement}
                className="flex items-center justify-center h-10 w-10 rounded-l-none bg-sidebar-accent border border-border text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <input
                ref={ref}
                type={type}
                data-slot="input"
                aria-invalid={!!error}
                onChange={handleInputChange}
                className={cn(
                  "text-center file:text-foreground placeholder:text-muted-foreground placeholder:text-xs h-10 placeholder:text-center selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 border bg-sidebar-accent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive min-h-[20px]",
                  className
                )}
                value={internalValue}
                {...props}
              />
              <Button
                type="button"
                onClick={handleIncrement}
                className="flex items-center justify-center h-10 w-10 rounded-r-none bg-sidebar-accent border border-border text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
            <div className="min-h-[20px] mt-1">
              {error && <ErrorMessage message={error.message} />}
            </div>
          </div>
        ) : (
          <div className="">
            {label && (
              <Label
                htmlFor={props.id}
                className="mb-2 block text-sm font-medium text-spidar1"
              >
                {label}
              </Label>
            )}
            <div className="relative">
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
                  "file:text-foreground placeholder:text-muted-foreground placeholder:text-xs selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-sidebar-accent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  icon ? "pl-10" : "", // فضای اضافی برای آیکون
                  className
                )}
                value={value}
                onChange={onChange}
                {...props}
              />
            </div>
            {type !== "search" && (
              <div className=" mt-1">
                {error && <ErrorMessage message={error.message} />}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
