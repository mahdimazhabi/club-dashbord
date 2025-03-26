import { NotiIcon } from "@/assets";
const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-br from-primary-50 via-primary-40 to-primary-30 p-5">
        <div className="flex items-center gap-2">
          <NotiIcon className="text-white font-bold" />
          <h1 className="text-white text-lg">سلام دانیال</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
