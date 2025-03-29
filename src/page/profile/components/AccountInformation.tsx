import { ArrowLeftIcon } from "@/assets";
import Profile from "@/assets/img/avatar.png";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InfoIcon, CopyIcon } from "@/assets";
const AccountInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 space-y-10">
      <div className="space-y-10 ">
        <div className="flex justify-between ">
          <h1 className="font-bold">اطلاعات اکانت کاربری</h1>
          <ArrowLeftIcon onClick={() => navigate(-1)} />
        </div>
        <div>
          <span className="text-sm text-neutral-50 font-semibold">پروفایل</span>
          <div className="flex items-center gap-5  mt-5">
            <img
              src={Profile}
              alt="Profile"
              className="border-2 rounded-full border-primary-50"
            />
            <span className="text-sm text-primary-50 font-medium">
              تغییر عکس پروفایل
            </span>
          </div>
        </div>
        <ul className="text-sm space-y-8">
          <li className="flex items-center justify-between">
            <span className="font-semibold">نام و نام خانوادگی</span>
            <div className="flex items-center text-neutral-50">
              <span>مهسا رحیمی</span>
              <ChevronLeft size={20} />
            </div>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-semibold">نام کاربری</span>
            <div className="flex items-center text-neutral-50">
              <span className="">مهسارحمیمی</span>
              <ChevronLeft size={20} />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <span className="text-sm text-neutral-50 font-semibold">
          اطلاعات شخصی
        </span>
        <ul className="mt-5">
          <li className="flex items-center justify-between py-4 border-b border-neutral-20">
            <span className="text-sm">شناسه کاربری</span>
            <div className="flex items-center text-neutral-50 text-xs gap-2">
              <span>67776</span>
              <CopyIcon />
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-neutral-20">
            <span className="text-sm">تاریخ تولد</span>
            <div className="flex items-center text-neutral-50 text-xs gap-2">
              <span>29مهر 1382 </span>
              <InfoIcon />
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-neutral-20">
            <span className="text-sm">شماره موبایل</span>
            <div className="flex items-center text-neutral-50 text-xs gap-2">
              <span>8703 289 0915 </span>
              <ChevronLeft size={20} />
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-neutral-20">
            <span className="text-sm">ایمیل</span>
            <div className="flex items-center text-neutral-50 text-xs gap-2">
              <span>mahdiamzhabi@gmail.com</span>
              <ChevronLeft size={20} />
            </div>
          </li>
          <li className="flex items-center justify-between py-4 border-b border-neutral-20">
            <span className="text-sm">جنسیت</span>
            <div className="flex items-center text-neutral-50 text-xs gap-2">
              <span>مرد</span>
              <ChevronLeft size={20} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountInformation;
