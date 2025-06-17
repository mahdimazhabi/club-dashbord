import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LogOut } from "lucide-react";

const MneuProfile = () => {
  const DataList1 = [
    { title: "اطلاعات کاربری", path: "information" },
    { title: "تاریخچه معاملات", path: "" },
    { title: "کد ارجاع", path: "" },
    { title: "تنظیمات", path: "" },
  ];
  const DataList2 = [{ title: "درباره ما" }, { title: "سوالات متداول" }];
  return (
    <div className="mb-12">
      <div>
        <h1 className="px-3 text-lg font-bold text-gray-coustom mt-5">عمومی</h1>
        <ul className="mt-2">
          {DataList1.map((item, index) => (
            <Link key={index} to={item.path}>
              <li className="flex  justify-between text-xs p-3 border-b">
                {item.title}
                <ChevronLeft size={20} className="text-gray-coustom " />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="px-3 text-lg font-bold text-gray-coustom mt-5">
          پشتیبانی
        </h1>
        <ul className="mt-2">
          {DataList2.map((item, index) => (
            <Link key={index} to={""}>
              <li className="flex  justify-between text-xs p-3 border-b">
                {item.title}
                <ChevronLeft size={20} className="text-gray-coustom " />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center p-2">
        <LogOut size={18} className="text-danger-30 relative top-1" />
        <p className="bg-inherit text-danger-30 text-sm p-3 mt-2">خروج</p>
      </div>
      <Outlet />
    </div>
  );
};

export default MneuProfile;
