import ProfileProgress from "@/components/ProfileProgress";
import { EditPenIcon } from "@/assets";
import silverImg from "@/assets/img/silver.png";
import CionImg from "@/assets/img/cionimg.png";
import { useCustomersData } from "@/shared/api/useCustomersData";
import { Skeleton } from "@/components/ui/skeleton";
const InformationUser = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();
  console.log(DataCustomers);

  return (
    <div
      className="p-6  rounded-[10px] backdrop-blur-[40px] border border-[#C5C5C5]"
      style={{
        background: `radial-gradient(151.92% 127.02% at 15.32% 21.04%, 
            rgba(197, 197, 197, 0.20) 0%, 
            rgba(197, 197, 197, 0.04) 77.08%, 
            rgba(197, 197, 197, 0.00) 100%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <ProfileProgress />
          <div className="flex flex-col gap-2">
            <div className="text-base font-bold flex items-center">
              {LoadingCustomers ? (
                <Skeleton className="h-3 w-[100px] inline-block " />
              ) : (
                <span className="text-spidar2 font-capitalize ml-3">
                  {DataCustomers?.name}
                </span>
              )}
              <span className="text-[#737373] mr-1">75</span>
              <span className="text-spidar1">Xp</span>
            </div>

            <div className="text-xs font-semibold text-[#737373] flex items-center">
              <span>شماره تماس :</span>
              {LoadingCustomers ? (
                <Skeleton className="h-3 w-[80px] ml-4 inline-block" />
              ) : (
                <span className="ml-2">{DataCustomers?.phone}</span>
              )}
            </div>
          </div>
        </div>
        <EditPenIcon className=" cursor-pointer" />
      </div>
      <div className="grid  grid-cols-2 gap-7 mt-5">
        <div className="flex items-center py-4 gap-1.5 justify-between rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <img src={silverImg} alt="Silver Medal" width={36.242} height={46} />
          <div>
            <span className="text-center font-bold text-xs capitalize text-gray-600">
              سطح نقره ای
            </span>
            <span className="text-[10px] font-semibold text-[#818181] block">
              شما کاربر خوش حساب هستید
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 py-4 px-2.5 rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <img
            src={CionImg}
            alt="Coin"
            width={38}
            height={38}
            className="shrink-0"
          />
          <div className="space-y-3">
            <span className="bg-gradient-to-r block text-xs font-bold  capitalize from-[#FFBA53] to-[#C47F18] bg-clip-text text-transparent">
              تعداد سکه ها
            </span>

            <span className="text-spidar2 text-base font-bold capitalize">
              1200
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationUser;
