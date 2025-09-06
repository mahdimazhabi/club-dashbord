import Profile from "@/assets/img/profile.png";
import { useCustomersData } from "@/shared/api/useCustomersData";
import { Skeleton } from "./ui/skeleton";
const ProfileProgress = () => {
  const { LoadingCustomers } = useCustomersData();

  return (
    <div className=" max-h-10 bg-gradient-to-b from-orange-300 to-yellow-600 p-0.75 rounded-full">
      <div className="w-full p-1 h-full rounded-full bg-white flex items-center justify-center shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] ">
        {LoadingCustomers ? (
          <Skeleton className="w-6 h-6 rounded-full" />
        ) : (
          <img src={Profile} alt="Profile" className="rounded-full w-6 h-6" />
        )}
      </div>
    </div>
  );
};

export default ProfileProgress;
