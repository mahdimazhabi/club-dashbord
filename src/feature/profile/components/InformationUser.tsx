import ProfileProgress from "@/components/ProfileProgress";
import { EditPenIcon } from "@/assets";

import { useCustomersData } from "@/shared/api/useCustomersData";
import { Skeleton } from "@/components/ui/skeleton";
import { XpIcon, MedalIcon, CoinIcon2 } from "@/assets";
const InformationUser = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();

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
      <div className="grid  grid-cols-3 gap-4 mt-5">
        <div className=" flex flex-col items-center justify-center  py-4 gap-1.5  rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <CoinIcon2 />
          <span className="bg-gradient-to-r from-orange-300 to-yellow-600 bg-clip-text text-transparent text-center font-bold capitalize text-sm">
            1200
          </span>
        </div>
        <div className="flex flex-col items-center py-4 gap-1.5 justify-between rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <MedalIcon />
          <div>
            <span className="text-center font-bold  capitalize text-sm text-gray-600">
              سطح نقره ای
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center  py-4 gap-1.5  rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <XpIcon />
          <span className="text-spidar1 text-center font-bold capitalize text-sm">
            75 Xp
          </span>
        </div>
      </div>
    </div>
  );
};

export default InformationUser;
