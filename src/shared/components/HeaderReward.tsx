import { ChevronRightIcon } from "@/assets";
import { VoucherIcon, PointsIcon } from "@/assets";
const HeaderReward = () => {
  const DataList = [
    { id: 1, title: "   5 کوپن موجود است ", icon: <VoucherIcon /> },
  ];
  return (
    <header>
      <div className="bg-gradient-to-br from-primary-50 via-primary-40 to-primary-30  ">
        <div className="flex justify-between items-center gap-2 p-5">
          <div className="flex items-center gap-2  ">
            <PointsIcon className="w-9 h-9" />
            <span className="text-white text-2xl font-bold">1.200 </span>
            <span className="text-white text-xs">امتیاز</span>
          </div>
          <span className="text-white text-xs">جزییات امتیاز</span>
        </div>

        <div>
          <ul className="flex bg-white/15 rounded-t-lg px-4 py-4 justify-between text-white text-sm ">
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

export default HeaderReward;
