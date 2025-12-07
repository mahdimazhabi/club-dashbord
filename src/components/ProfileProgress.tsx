import Profile from "@/assets/img/profile.png";
import { useCustomersData } from "@/shared/api/useCustomersData";
import { Skeleton } from "./ui/skeleton";
import { ApiConfig } from "@/config/ApiConfig";
const ProfileProgress = () => {
  const { DataCustomers, LoadingCustomers } = useCustomersData();
  const { File_url } = ApiConfig();
  return (
    <div className="relative max-h-20 bg-gradient-to-b from-orange-300 to-yellow-600 p-0.75 rounded-full">
      <div className="absolute -inset-2 rounded-full border-4 border-transparent">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="60"
            transform="rotate(-90 50 50)"
          />
          <defs>
            <linearGradient
              id="progress-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full p-1 h-full rounded-full bg-white flex items-center justify-center shadow-[0px_4px_15px_0px_rgba(46,46,46,0.15)] relative z-10">
        {LoadingCustomers ? (
          <Skeleton className="w-16 h-16 rounded-full" />
        ) : (
          <img
            src={
              DataCustomers?.profile?.avatar
                ? `${File_url}/${DataCustomers.profile.avatar}`
                : Profile
            }
            alt="Profile"
            className="rounded-full w-16 h-16"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileProgress;
