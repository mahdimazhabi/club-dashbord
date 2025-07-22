import {
  MessageQuestionIcon,
  Ticket2Icon,
  ArchiveBookIcon,
  MessageIcon,
  ReceiptDiscountIcon,
  Profile2UserIcon,
  LogoutIcon,
  ArrowDownIcon,
  InfoEmptyIcons,
} from "@/assets";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const Menu = () => {
  const Section1Items = [
    { titel: "درخواست پشتیبانی", icons: <MessageQuestionIcon /> },
    { titel: "پیگیری خرید", icons: <Ticket2Icon /> },
    { titel: "قوانین مقررات", icons: <ArchiveBookIcon /> },
  ];
  const Section2Items = [
    { titel: "صندوق پیام ها", icons: <MessageIcon /> },
    { titel: "تاریخچه خرید", icons: <ReceiptDiscountIcon /> },
  ];
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <section className="mt-4  space-y-4">
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent>
          <div className="flex justify-center">
            <InfoEmptyIcons className="w-10 h-10" />
          </div>
          <DialogHeader className="text-center">
            <DialogTitle>
              <span className="text-[#04864C] font-bold ">
                خروج از حساب کاربری
              </span>
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
                  onClick={() => setOpen(!isOpen)}
                >
                  انصراف
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div>
        <ul>
          <li className="flex justify-between items-center py-6 border bg-[#FFF] px-4 rounded-[5px] ">
            <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
              <ReceiptDiscountIcon />
              تخفیف های من
            </span>
            <ArrowDownIcon />
          </li>
        </ul>
      </div>
      <div>
        <ul className="rounded-[5px] border border-black/10  bg-white">
          {Section1Items.map((items, index) => (
            <div key={index}>
              <li className="flex justify-between items-center py-6 px-4">
                <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
                  {items.icons}
                  {items.titel}
                </span>
                <ArrowDownIcon />
              </li>

              {index !== Section1Items.length - 1 && (
                <div className="h-px bg-gray-200 mx-10" />
              )}
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ul className="rounded-[5px] border border-black/10  bg-white">
          {Section2Items.map((items, index) => (
            <div key={index}>
              <li className="flex justify-between items-center py-6 px-4">
                <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
                  {items.icons}
                  {items.titel}
                </span>
                <ArrowDownIcon />
              </li>

              {index !== Section2Items.length - 1 && (
                <div className="h-px bg-gray-200 mx-10" />
              )}
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <li className="flex justify-between items-center py-6 border bg-[#FFF] px-4 rounded-[5px] ">
            <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
              <Profile2UserIcon />
              کد معرف شما
            </span>
            <ArrowDownIcon />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li
            className="flex justify-between items-center py-6 border bg-[#FFF] px-4 rounded-[5px] "
            onClick={() => setOpen(!isOpen)}
          >
            <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
              <LogoutIcon />
              خروج از حساب کاربری
            </span>
            <ArrowDownIcon />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
