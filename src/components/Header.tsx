import ProfileProgress from "./ProfileProgress";
import { CrownIcon } from "@/assets";
import { Notifaction } from "./Notifaction";
import { Link } from "react-router-dom";
import useSetting from "@/services/useSetting";
import { ApiConfig } from "@/config/ApiConfig";

const Header = () => {
  const { setting } = useSetting();
  const { File_url } = ApiConfig();

  return (
    <div
      className="flex shrink-0 justify-between items-center p-2.5 backdrop-blur-2xl bg-white rounded-xl border border-main/20 
            shadow-[0px_5px_14.3px_0px_rgba(10,201,116,0.10)] 
             stroke-[1px] stroke-[rgba(10,201,116,0.2)]"
    >
      <div className="w-24">
        <img
          className="w-full h-full object-contain"
          src={`${File_url}/${setting.data?.options.logo}`}
          alt="Logo"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative border  bg-[rgba(255,255,255,0.5)] shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] rounded-full w-fit">
          <Notifaction />
        </div>

        <div className="p-2 border  bg-[rgba(255,255,255,0.5)] shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] rounded-full">
          <CrownIcon className="w-5 h-5" />
        </div>
        <Link to={"/profile"}>
          <ProfileProgress className="w-7 h-7" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
