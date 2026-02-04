import { MoveLeft } from "lucide-react";
interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
}

const PageHeader = ({ title, onBack, className }: PageHeaderProps) => {
  return (
    <div className={`flex justify-between px-4 py-5 bg-main/20  ${className}`}>
      <h1 className="text-main">{title}</h1>

      {onBack && (
        <MoveLeft className="text-main cursor-pointer" onClick={onBack} />
      )}
    </div>
  );
};

export default PageHeader;
