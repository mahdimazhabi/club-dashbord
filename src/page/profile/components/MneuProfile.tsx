import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MneuProfile = () => {
  const DataList1 = [
    { title: "اطلاعات کاربری" },
    { title: "تاریخچه معاملات" },
    { title: "کد ارجاع" },
    { title: "تنظیمات" },
  ];
  const DataList2 = [{ title: "درباره ما" }, { title: "سوالات متداول" }];
  return (
    <div>
      <div>
        <h1 className="px-3 text-lg font-bold text-neutral-50 mt-5">عمومی</h1>
        <ul className="mt-2">
          {DataList1.map((item, index) => (
            <Link key={index} to={""}>
              <li className="flex  justify-between text-xs p-3 border-b">
                {item.title}
                <ChevronLeft size={20} className="text-neutral-50 " />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="px-3 text-lg font-bold text-neutral-50 mt-5">
          پشتیبانی
        </h1>
        <ul className="mt-2">
          {DataList2.map((item, index) => (
            <Link key={index} to={""}>
              <li className="flex  justify-between text-xs p-3 border-b">
                {item.title}
                <ChevronLeft size={20} className="text-neutral-50 " />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <p className="bg-inherit text-danger-30 text-xs p-3 mt-2">خروج</p>
    </div>
  );
};

export default MneuProfile;
