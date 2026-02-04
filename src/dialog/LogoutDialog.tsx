import {
  DialogHeader,
  DialogDescription,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoEmptyIcons } from "@/assets";
import { useLogout } from "../services/useLogout";
import { useState } from "react";
interface LogoutDialogProps {
  setOpen: (value: boolean) => void;
}
const LogoutDialog = ({ setOpen }: LogoutDialogProps) => {
  const { logout } = useLogout();
  const [isLoading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <DialogContent>
      <div className="flex justify-center">
        <InfoEmptyIcons className="w-10 h-10 text-main" />
      </div>
      <DialogHeader className="text-center">
        <span className="text-main font-bold  ">خروج از حساب کاربری</span>
        <DialogDescription>
          <span className="text-[#737373] text-[13px] font-semibold ">
            آیا مایلید از حساب خود خارج شوید؟
          </span>
          <div className="mt-4 flex justify-center gap-2">
            <Button
              className="w-32 h-12 cursor-pointer "
              variant={"secondary"}
              onClick={handleLogout}
              loading={isLoading}
            >
              تایید
            </Button>
            <Button
              className="w-32 h-12 bg-white text-main border border-main  hover:bg-white"
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
