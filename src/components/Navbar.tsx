import {
  Profile2Icon,
  StoreIcon,
  ClubIcon,
  SuggestionsIcon,
  DrawerIcon,
} from "@/assets";
import { Link, useLocation } from "react-router-dom";
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
    { icon: StoreIcon, label: "فروشگاه", url: "/" },
    { icon: ClubIcon, label: "باشگاه ", url: "/coupon" },
  ];
  const rightItems: NavItem[] = [
    { icon: SuggestionsIcon, label: "تخفیف ها", url: "/discounts" },
    { icon: Profile2Icon, label: "پروفایل", url: "/profile" },
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
    <Link to={item.url} key={index} className="z-10">
      <li className="flex flex-col items-center p-3">
        <item.icon
          className={`w-5 h-5 transition-colors duration-300 fill- ${
            location.pathname === item.url ? "text-main" : "text-secondary-text"
          }`}
        />
        <span
          className={`text-center  text-xs font-semibold capitalize mt-1.25 ${
            location.pathname === item.url ? "text-main" : "text-secondary-text"
          }`}
        >
          {item.label}
        </span>
      </li>
    </Link>
  );

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 px-2 pb-4">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <div className="grid grid-cols-3 gap-x-4 gap-y-12 my-16 px-4">
            {ItemsDrawer.map((items, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-background shadow border cursor-pointer"
              >
                <img
                  src={items.imag}
                  alt={items.titel}
                  className="w-14 h-14 -translate-y-7"
                />
                <span className="text-center text-xs font-bold leading-6 text-main relative -top-4">
                  {items.titel}
                </span>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <ul className="relative flex items-center justify-between rounded-[15px] p-1.5 shadow-md bg-background">
        <div className="flex flex-1 justify-evenly items-center">
          {leftItems.map(renderNavItem)}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <DrawerIcon
            onClick={() => setIsOpen(!isOpen)}
            className="relative bottom-9 cursor-pointer pointer-events-auto text-main  "
          />
        </div>

        <div className="flex flex-1 justify-evenly items-center">
          {rightItems.map(renderNavItem)}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
