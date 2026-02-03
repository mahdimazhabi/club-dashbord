import { ArrowLeftIcon } from "@/assets";

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
}

const PageHeader = ({ title, onBack, className }: PageHeaderProps) => {
  return (
    <div
      className={`flex justify-between px-4 py-5 bg-emerald-500/20  ${className}`}
    >
      <h1 className="text-[#04864C]">{title}</h1>

      {onBack && (
        <ArrowLeftIcon
          className="text-[#04864C] cursor-pointer"
          onClick={onBack}
        />
      )}
    </div>
  );
};

export default PageHeader;
