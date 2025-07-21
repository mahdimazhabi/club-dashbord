import {
  HomeIcon,
  ProfileIcon,
  TicketIcon,
  ReceiptSearchIcon,
  UnionIcon,
  DrawerIcon,
} from "@/assets";
import Back from "@/assets/img/Rectangle 17 (1).png";
import { useLocation } from "react-router-dom";
import * as React from "react";
import TransactionImg from "@/assets/img/transaction.png";
import MissionsImg from "@/assets/img/Mission.png";
import DiscountImg from "@/assets/img/discount.png";
import SupportImg from "@/assets/img/Support.png";
import GuideImg from "@/assets/img/guide.png";
import RulesImg from "@/assets/img/Rules.png";
interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}
import { Drawer, DrawerContent } from "@/components/ui/drawer";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const location = useLocation();

  const leftItems: NavItem[] = [
    { icon: HomeIcon, label: "خانه", url: "/" },
    { icon: ReceiptSearchIcon, label: "پیگیری خرید", url: "/receipt-search" },
  ];
  const rightItems: NavItem[] = [
    { icon: TicketIcon, label: "تخفیف ها", url: "/discounts" },
    { icon: ProfileIcon, label: "پروفایل", url: "/profile" },
  ];

  const ItemsDrawer = [
    { titel: "تراکنش ها", imag: TransactionImg },
    { titel: "ماموریت ها", imag: MissionsImg },
    { titel: "طرح های تخفیفی", imag: DiscountImg },
    { titel: "راهنما", imag: SupportImg },
    { titel: "پشتیبانی", imag: GuideImg },
    { titel: "قوانین و مقررات", imag: RulesImg },
  ];

  const renderNavItem = (item: NavItem, index: number) => (
    <li
      key={index}
      className={`flex flex-col items-center z-10 ${
        location.pathname === item.url
          ? "rounded-[9px] bg-[#F7F7F7] border border-[#F7F7F7] p-3"
          : ""
      }`}
    >
      <item.icon
        className={`w-6 h-6   transition-colors duration-300 ${
          location.pathname === item.url ? "text-spidar1" : "text-gray-500"
        }`}
      />
      <span
        className={`text-center text-neutral-500 text-xs font-semibold capitalize mt-[5px] ${
          location.pathname === item.url ? "text-spidar1" : ""
        }`}
      >
        {item.label}
      </span>
      {location.pathname === item.url && (
        <UnionIcon className="absolute bottom-0 " />
      )}
    </li>
  );

  return (
    <nav className="mt-20">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <div className="grid grid-cols-3 gap-x-4 gap-y-12 my-16 px-4">
            {ItemsDrawer.map((items, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-[#FFF]  shadow-[0px_6px_11.399999618530273px_0px_rgba(91,91,91,0.08)]"
              >
                <img
                  src={items.imag}
                  alt={items.titel}
                  className="w-14 h-14 "
                />
                <span className="text-center text-xs font-bold leading-6 text-spidar1">
                  {items.titel}
                </span>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
      <ul
        className="relative flex items-center justify-between rounded-[15px] p-1.5 shadow-md backdrop-blur-[40px]"
        style={{
          background: `radial-gradient(151.92% 127.02% at 15.32% 21.04%, 
            rgba(197, 197, 197, 0.20) 0%, 
            rgba(197, 197, 197, 0.04) 77.08%, 
            rgba(197, 197, 197, 0.00) 100%)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <img
          src={Back}
          alt="background"
          className="absolute inset-0 w-full h-full opacity-80 -z-10"
        />

        <div className="flex flex-1 justify-evenly items-center z-10">
          {leftItems.map(renderNavItem)}
        </div>

        <div
          className="absolute inset-0 flex  cursor-pointer items-center justify-center z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DrawerIcon width={52} height={52} className="relative bottom-9" />
        </div>

        <div className="flex flex-1 justify-evenly items-center z-10">
          {rightItems.map(renderNavItem)}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
