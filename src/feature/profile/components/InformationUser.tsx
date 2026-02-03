import ProfileProgress from "@/components/ProfileProgress";
import { EditPenIcon, XpIcon, MedalIcon, CoinIcon2 } from "@/assets";
import { useCustomersData } from "@/services/useCustomersData";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { JSX, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditDataUserForm from "@/dialog/EditDataUserForm";

/* ================== balance config ================== */
const balanceConfig: Record<
  string,
  {
    icon: JSX.Element;
    gradient: string;
  }
> = {
  credit: {
    icon: <CoinIcon2 />,
    gradient: "from-orange-300 to-yellow-600",
  },
  coin: {
    icon: <MedalIcon />,
    gradient: "from-yellow-400 to-amber-500",
  },
  point: {
    icon: <XpIcon />,
    gradient: "from-blue-400 to-purple-500",
  },
};

const InformationUser = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();
  const [isOpenEdit, setOpenEdit] = useState(false);

  return (
    <div className="p-6 rounded-[10px] backdrop-blur-2xl border bg-gray-200 border-[#C5C5C5]">
      {/* ================== Header ================== */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <ProfileProgress />

          <div className="flex flex-col gap-2">
            <div className="text-base font-bold flex items-center">
              {LoadingCustomers ? (
                <Skeleton className="h-4 w-32" />
              ) : (
                <span className="text-spidar2 ml-3">
                  {DataCustomers?.data.first_name}{" "}
                  {DataCustomers?.data.last_name}
                </span>
              )}
            </div>

            <div className="text-xs font-semibold text-[#737373] flex items-center">
              <span>شماره تلفن :</span>
              {LoadingCustomers ? (
                <Skeleton className="h-3 w-24 ml-3" />
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
          icon={<EditPenIcon />}
          variant="outline"
          size="icon"
          className="border-none"
          onClick={() => setOpenEdit(true)}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {LoadingCustomers
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-24 rounded-[10px]" />
            ))
          : DataCustomers?.data.wallet?.all_balances
              .filter((item) => item.currency !== "chance") // 👈 حذف شانس
              .map((item, index) => {
                const config = balanceConfig[item.currency];
                if (!config) return null; // ایمنی بیشتر

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center py-4 gap-2 rounded-[10px] bg-white shadow-[0px_6px_12px_rgba(0,0,0,0.05)]"
                  >
                    {config.icon}

                    <span
                      className={`bg-linear-to-r ${config.gradient} bg-clip-text text-transparent text-center font-bold text-sm`}
                    >
                      {item.available.toLocaleString()} {item.currency_label}
                    </span>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default InformationUser;
