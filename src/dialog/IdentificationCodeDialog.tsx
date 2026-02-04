import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QrCodeImg from "@/assets/img/QR.png";
import { CopyIcon } from "lucide-react";
import { useCustomersData } from "../services/useCustomersData";
import { useState } from "react";

const IdentificationCodeDialog = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();
  const [copied, setCopied] = useState(false);

  const invitationCode =
    DataCustomers?.data.invitation_code ||
    (LoadingCustomers ? "در حال بارگذاری..." : "بدون کد");

  const handleCopy = () => {
    if (
      invitationCode &&
      invitationCode !== "در حال بارگذاری..." &&
      invitationCode !== "بدون کد"
    ) {
      navigator.clipboard
        .writeText(invitationCode)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error("خطا در کپی:", err));
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>کد معرف</DialogTitle>
        <div className="relative grid grid-cols-2 items-center gap-4 py-9">
          <div className="flex justify-center border-l-2 pl-2">
            <img src={QrCodeImg} alt="QrCode" width={104} height={104} />
          </div>
          <div className="space-y-2.5 flex flex-col items-center">
            <div
              onClick={handleCopy}
              className="w-32 h-9 bg-emerald-500/10 rounded-[5px] border border-emerald-500 flex items-center justify-center text-center cursor-pointer"
            >
              <span className="text-main text-xs font-semibold">
                {invitationCode}
              </span>
            </div>
            <Button
              variant={"secondary"}
              icon={<CopyIcon />}
              className="w-32 h-9 bg-main hover:bg-main/80"
              onClick={handleCopy}
            >
              {copied ? "کپی شد!" : "کپی کد معرف"}
            </Button>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default IdentificationCodeDialog;
