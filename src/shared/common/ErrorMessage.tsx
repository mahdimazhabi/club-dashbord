import { cn } from "@/lib/utils";
interface ErrorMessageProps {
  message?: string;
  className?: string;
}

const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <span
      className={cn(
        "text-[10px] font-bold",
        className
      )}
      style={{ color: "var(--color-error)" }}
    >
      {message}
    </span>
  );
};

export default ErrorMessage;
