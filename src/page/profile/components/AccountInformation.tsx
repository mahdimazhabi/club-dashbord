import { ChevronLeft } from "lucide-react";
import { useGetDataUserCustommers } from "@/shared/api/useGetDataUserCustommers";
import Navbar from "@/shared/components/Navbar";
import HeaderProfile from "@/shared/components/HeaderProfile";
const AccountInformation = () => {
  const { data: userData } = useGetDataUserCustommers();

  return (
    <div className="max-w-[26rem] mx-auto bg-white min-h-screen">
      {/* Header */}
      <HeaderProfile />
      {/* List Items */}
      <div className="px-4 mt-8">
        <h2 className="text-neutral-700 font-bold mb-3">عمومی</h2>
        <ul className="text-sm divide-y divide-neutral-200">
          {[
            { label: "نام و نام خانوادگی", value: userData?.name },
            {
              label: "کدملی",
              value: userData?.national_code
                ? userData?.national_code
                : "ندارد",
            },
            {
              label: "شماره موبایل",
              value: userData?.phone ? userData?.phone : "ندارد",
            },
            {
              label: "ایمیل",
              value: userData?.email ? userData?.email : "ندارد",
            },
            {
              label: "جنسیت",
              value: userData?.gender ? userData?.gender : "ندارد",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between py-4">
              <span className="text-neutral-800">{item.label}</span>
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                <span>{item.value}</span>
                <ChevronLeft size={18} className="text-black" />
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-neutral-700 font-bold mt-8 mb-3">پشتیبانی</h2>
        <ul className="text-sm divide-y divide-neutral-200">
          <li className="flex items-center justify-between py-4">
            <span className="text-neutral-800">درباره ما</span>
            <ChevronLeft size={18} className="text-black" />
          </li>
          <li className="flex items-center justify-between py-4">
            <span className="text-neutral-800">سوالات متداول</span>
            <ChevronLeft size={18} className="text-black" />
          </li>
        </ul>
      </div>
      <Navbar />
    </div>
  );
};

export default AccountInformation;
