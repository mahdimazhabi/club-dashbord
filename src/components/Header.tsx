import ProfileProgress from "./ProfileProgress";
import Logo from "@/assets/logo/logo-wide-sepidar-Holding (1).png";
import { CrownIcon, NotificationIcon } from "@/assets";
const Header = () => {
  return (
    <div className="flex shrink-0 justify-between items-center p-2.5 backdrop-blur-2xl bg-white rounded-xl border border-emerald-500/20 shadow-[0px_5px_14.300000190734863px_0px_rgba(10,201,116,0.10)]  stroke-[1px] stroke-[rgba(10,201,116,0.2)]">
      <img className="w-24 h-7" src={Logo} alt="Logo" />
      <div className="flex items-center gap-4">
        <div className="relative p-2 bg-[rgba(255,255,255,0.5)] shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] rounded-full w-fit">
          <div className="absolute top-[8.5px] right-[11px] w-[5px] h-[5px] bg-red-600 rounded-full"></div>

          <NotificationIcon className="w-5 h-5" />
        </div>

        <div className="p-2  bg-[rgba(255,255,255,0.5)] shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] rounded-full">
          <CrownIcon className="w-5 h-5" />
        </div>
        <ProfileProgress />
      </div>
    </div>
  );
};

export default Header;
