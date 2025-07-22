import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QrCodeImg from "@/assets/img/QR.png";
import { CopyIcon } from "lucide-react";

const IdentificationCodeDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>کد معرف</DialogTitle>
        <div className="relative grid grid-cols-2 items-center gap-4 py-9">
          <div className="flex justify-center  border-l-2 pl-2">
            <img src={QrCodeImg} alt="QrCode" width={104} height={104} />
          </div>

          <div className="space-y-2.5 flex flex-col items-center">
            <div className="w-32 h-9 bg-emerald-500/10 rounded-[5px] border border-emerald-500 flex items-center justify-center text-center">
              <span className="text-emerald-700 text-xs font-semibold">
                dlpw928927-djsdo
              </span>
            </div>
            <Button
              variant={"secondary"}
              icon={<CopyIcon />}
              className="w-32 h-9 cursor-pointer"
            >
              کد معرف شما
            </Button>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default IdentificationCodeDialog;
