import { ProfileIcon, HomeIcon, RewardIcon, ChallengeIcon } from "@/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const DataList = [
    { icon: <HomeIcon />, path: "/" },
    { icon: <RewardIcon />, path: "/reward" },
    { icon: <ChallengeIcon />, path: "/mission" },
    { icon: <ProfileIcon />, path: "/profile" },
  ];
  return (
    <nav>
      <div className="fixed bottom-0 bg-white w-full">
        <ul className="flex justify-between w-full py-1 px-5  border-t-2 ">
          {DataList.map((item, index) => (
            <Link to={item.path} key={index}>
              <li className="flex flex-col items-center gap-1 text-xs font-semibold my-1">
                {item.icon}
                {/* {item.title} */}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
