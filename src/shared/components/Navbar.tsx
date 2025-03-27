import { ProfileIcon, HomeIcon, RewardIcon, ChallengeIcon } from "@/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const DataList = [
    { title: "خونه ", icon: <HomeIcon />, path: "/" },
    { title: " هدیه", icon: <RewardIcon />, path: "/reward" },
    { title: "ماموریت ", icon: <ChallengeIcon />, path: "/mission" },
    { title: "پروفایل ", icon: <ProfileIcon />, path: "/profile" },
  ];
  return (
    <nav>
      <div className="fixed bottom-0 bg-white w-full">
        <ul className="flex justify-between w-full px-4 py-2 border-t-2 ">
          {DataList.map((item, index) => (
            <Link to={item.path} key={index}>
              <li className="flex flex-col items-center gap-1 text-xs font-semibold">
                {item.icon}
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
