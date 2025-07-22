import {
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoEmptyIcons } from "@/assets";
interface LogoutDialogProps {
  setOpen: (value: boolean) => void;
}
const LogoutDialog = ({ setOpen }: LogoutDialogProps) => {
  return (
    <DialogContent>
      <div className="flex justify-center">
        <InfoEmptyIcons className="w-10 h-10" />
      </div>
      <DialogHeader className="text-center">
        <DialogTitle>
          <span className="text-[#04864C] font-bold ">خروج از حساب کاربری</span>
        </DialogTitle>
        <DialogDescription>
          <span className="text-[#737373] text-[13px] font-semibold ">
            آیا مایلید از حساب خود خارج شوید؟
          </span>
          <div className="mt-4 flex justify-center gap-2">
            <Button className="w-32 h-12 bg-emerald-700 rounded-xl hover:bg-emerald-700/75 ">
              تایید
            </Button>
            <Button
              className="w-32 h-12 bg-white text-emerald-700 border border-emerald-700 rounded-xl hover:bg-emerald-50"
              onClick={() => setOpen(false)}
            >
              انصراف
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default LogoutDialog;
