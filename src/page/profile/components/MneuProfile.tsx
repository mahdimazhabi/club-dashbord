import { ChevronLeft, LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const MenuProfile = () => {
  const DataList1 = [
    { title: "اطلاعات کاربری", path: "information" },
    { title: "لیست سفارشات ", path: "transactions" },
    { title: "کد ارجاع", path: "referral" },
    { title: "تنظیمات", path: "settings" },
  ];

  const DataList2 = [
    { title: "درباره ما", path: "about" },
    { title: "سوالات متداول", path: "faq" },
  ];

  return (
    <div className="mb-12">
      <div>
        <h1 className="px-3 text-lg font-bold text-gray-coustom mt-5">عمومی</h1>
        <ul className="mt-2">
          {DataList1.map((item, index) => (
            <li key={index} className="border-b">
              <Link
                to={item.path}
                className="flex justify-between text-xs p-3 w-full"
              >
                {item.title}
                <ChevronLeft size={20} className="text-gray-coustom" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="px-3 text-lg font-bold text-gray-coustom mt-5">
          پشتیبانی
        </h1>
        <ul className="mt-2">
          {DataList2.map((item, index) => (
            <li key={index} className="border-b">
              <Link
                to={item.path}
                className="flex justify-between text-xs p-3 w-full"
              >
                {item.title}
                <ChevronLeft size={20} className="text-gray-coustom" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center p-2 cursor-pointer hover:bg-danger-10 rounded">
        <LogOut size={18} className="text-danger-30 relative top-1" />
        <p className="text-danger-30 text-sm p-3 mt-2">خروج</p>
      </div>

      <Outlet />
    </div>
  );
};

export default MenuProfile;
