import { cn } from "@/lib/utils";
interface ErrorMessageProps {
  message?: string;
  className?: string;
}

const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="size-1.5 bg-error rounded-full"></div>
      <span className={cn("text-xs font-semibold text-error", className)}>
        {message}
      </span>
    </div>
  );
};

export default ErrorMessage;
