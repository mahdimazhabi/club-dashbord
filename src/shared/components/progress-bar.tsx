interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({
  current,
  total,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((current / total) * 100, 0), 100);

  return (
    <div className={`flex items-center gap-3 mt-5 ${className}`}>
      <div className="flex-1 h-3 bg-primary-10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-50 rounded-r-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-slate-600 font-medium text-xs">
        {current} از {total}
      </span>
    </div>
  );
}
