import ProfileProgress from "@/components/ProfileProgress";
import { EditPenIcon } from "@/assets";
import { useCustomersData } from "@/services/useCustomersData";
import { Skeleton } from "@/components/ui/skeleton";
import { XpIcon, MedalIcon, CoinIcon2 } from "@/assets";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditDataUserForm from "@/dialog/EditDataUserForm";

const InformationUser = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();
  const [isOpenEdit, setOpenEdit] = useState(false);

  return (
    <div className="p-6  rounded-[10px] backdrop-blur-2xl border bg-gray-200 border-[#C5C5C5]">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <ProfileProgress />
          <div className="flex flex-col gap-2">
            <div className="text-base font-bold flex items-center">
              {LoadingCustomers ? (
                <Skeleton className="h-3 w-25 inline-block " />
              ) : (
                <span className="text-spidar2 font-capitalize ml-3">
                  {DataCustomers?.data.first_name}{" "}
                  {DataCustomers?.data.last_name}
                </span>
              )}
            </div>

            <div className="text-xs font-semibold text-[#737373] flex items-center">
              <span>شماره تلفن :</span>
              {LoadingCustomers ? (
                <Skeleton className="h-3 w-20 ml-4 inline-block" />
              ) : (
                <span className="ml-2">{DataCustomers?.data.phone}</span>
              )}
            </div>
          </div>
        </div>
        <Dialog open={isOpenEdit} onOpenChange={setOpenEdit}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ویرایش اطلاعات شخصی</DialogTitle>
            </DialogHeader>
            <EditDataUserForm setOpen={setOpenEdit} />
          </DialogContent>
        </Dialog>
        <Button
          icon={<EditPenIcon className=" cursor-pointer " />}
          variant="outline"
          size={"icon"}
          className="cursor-pointer  "
          onClick={() => setOpenEdit(true)}
        />
      </div>
      <div className="grid  grid-cols-3 gap-4 mt-5">
        <div className=" flex flex-col items-center justify-center  py-4 gap-1.5  rounded-[10px] box-shadow: 0px 6px 12.199999809265137px rgba(0, 0, 0, 0.05) bg-[#FFF]">
          <CoinIcon2 />
          <span className="bg-linear-to-r from-orange-300 to-yellow-600 bg-clip-text text-transparent text-center font-bold capitalize text-sm">
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
