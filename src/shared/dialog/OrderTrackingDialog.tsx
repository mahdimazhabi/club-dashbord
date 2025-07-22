import {
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OrderTrackingDialog = () => {
  return (
    <DialogContent>
      <DialogHeader className="text-center">
        <DialogTitle>پیگیری سفارش</DialogTitle>
        <div className="py-8">
          <span className="text-[#737373] text-[13px] font-semibold ">
            کد رهگیری رو وارد کن !
          </span>
          <div className="mt-4 flex flex-col justify-center gap-2  ">
            <Input className="w-32 h-9 bg-emerald-500/10 mx-auto rounded-[5px] border border-emerald-500 border-dashed " />
            <Button
              className="w-32 h-9 cursor-pointer mx-auto "
              variant={"secondary"}
            >
              بررسی کد
            </Button>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default OrderTrackingDialog;
