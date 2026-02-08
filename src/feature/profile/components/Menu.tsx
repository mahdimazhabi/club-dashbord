import {
  MessageQuestionIcon,
  Ticket2Icon,
  ArchiveBookIcon,
  MessageIcon,
  ReceiptDiscountIcon,
  Profile2UserIcon,
  LogoutIcon,
  ArrowDownIcon,
} from "@/assets";
import { Dialog } from "@/components/ui/dialog";
import IdentificationCodeDialog from "@/dialog/IdentificationCodeDialog";
import LogoutDialog from "@/dialog/LogoutDialog";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const Section1Items = [
    {
      key: "support",
      titel: "درخواست پشتیبانی",
      icons: <MessageQuestionIcon />,
      url: "/profile/support",
    },
    {
      key: "tracking",
      titel: "پیگیری خرید",
      icons: <Ticket2Icon />,
      url: "/profile/tracking",
    },
    {
      key: "rules",
      titel: "قوانین مقررات",
      icons: <ArchiveBookIcon />,
      url: "",
    },
  ];

  const Section2Items = [
    { key: "inbox", titel: "صندوق پیام ها", icons: <MessageIcon />, url: "" },
    {
      key: "",
      titel: "تاریخچه خرید",
      icons: <ReceiptDiscountIcon />,
      url: null,
    },
  ];
  const [isOpenLogout, setOpenLogout] = useState<boolean>(false);
  const [isOpenIdentificationCode, setOpenIdentificationCode] =
    useState<boolean>(false);

  return (
    <section className="mt-4  space-y-4">
      <Dialog open={isOpenLogout} onOpenChange={setOpenLogout}>
        <LogoutDialog setOpen={setOpenLogout} />
      </Dialog>
      <Dialog
        open={isOpenIdentificationCode}
        onOpenChange={setOpenIdentificationCode}
      >
        <IdentificationCodeDialog />
      </Dialog>
      <div>
        <ul>
          <li className="flex justify-between items-center py-6 border border-black/10 bg-[#FFF] px-4 rounded-[5px] ">
            <span className="flex items-center gap-6 text-[#787878] text-sm font-s">
              <ReceiptDiscountIcon />
              تخفیف های من
            </span>
            <ArrowDownIcon />
          </li>
        </ul>
      </div>
      <div>
        <ul className="rounded-[5px] border border-black/10 bg-white">
          {Section1Items.map((items, index) => (
            <div key={items.key}>
              <li
                className="flex justify-between items-center py-6 px-4 cursor-pointer"
                onClick={() => {
                  if (items.key === "tracking") {
                    navigate("/profile/tracking");
                  } else if (items.key === "support") {
                    navigate("/profile/support");
                  }
                }}
              >
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
              <li
                className="flex justify-between items-center py-6 px-4 cursor-pointer"
                onClick={() => {
                  if (items.key === "inbox") {
                    navigate("/profile/inbox");
                  }
                }}
              >
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
          <li
            className="flex justify-between items-center cursor-pointer py-6 border border-black/10 bg-background px-4 rounded-[5px] "
            onClick={() => setOpenIdentificationCode(!isOpenIdentificationCode)}
          >
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
            className="flex justify-between items-center py-6 cursor-pointer border border-black/10 bg-background px-4 rounded-[5px] "
            onClick={() => setOpenLogout(!isOpenLogout)}
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
