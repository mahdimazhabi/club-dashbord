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
        "text-satisfaction-50 text-[10px] text-red-500 ",
        className
      )}
    >
      {message}
    </span>
  );
};

export default ErrorMessage;
