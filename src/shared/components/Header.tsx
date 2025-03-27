import { NotiIcon } from "@/assets";
import { ChevronRightIcon } from "@/assets";
import { TierIcon, PointsIcon, VoucherIcon } from "@/assets";
const Header = () => {
  const DataList = [
    { id: 1, title: "   12 کد  ", icon: <VoucherIcon /> },
    { id: 2, title: "1.200", icon: <PointsIcon /> },
    { id: 1, title: "سکه", icon: <TierIcon /> },
  ];
  return (
    <header>
      <div className="bg-gradient-to-br from-primary-50 via-primary-40 to-primary-30  ">
        <div className="flex items-center gap-2 p-5">
          <NotiIcon className="text-white font-bold" />
          <h1 className="text-white ">سلام دانیال</h1>
        </div>
        <div>
          <ul className="flex bg-white/15 rounded-t-lg px-4 py-5 justify-between text-white text-sm ">
            {DataList.map((item) => (
              <li key={item.id} className="flex items-center gap-2 ">
                {item.icon}
                {item.title}
                <ChevronRightIcon className="rotate-180" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
