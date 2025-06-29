import { PointsIcon, TierIcon } from "@/assets";
import { useGetDataUserCustommers } from "../api/useGetDataUserCustommers";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HeaderProfile = () => {
  const { data, isLoading } = useGetDataUserCustommers();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-b-3xl pb-5 shadow">
      {/* Top Section */}
      <div className="flex items-center justify-between px-5 pt-6">
        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="flex items-center gap-3">
              <Skeleton className="h-14 w-14 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          ) : (
            <>
              <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                <AvatarImage
                  // src={data?.avatar ?? "https://github.com/shadcn.png"}
                  alt={data?.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-white/20">
                  <User className="h-7 w-7 text-white" />
                </AvatarFallback>
              </Avatar>
              <div className="text-white">
                <p className="font-semibold text-base">{data?.name}</p>
                <p className="text-sm text-white/90">{data?.phone}</p>
              </div>
            </>
          )}
        </div>
        {location.pathname === "/profile/information" && (
          <ArrowLeft className="text-white" onClick={() => navigate(-1)} />
        )}
      </div>

      {/* Points & Membership */}
      <div className="mt-6 flex items-center justify-around">
        <div className="flex items-center gap-2">
          <PointsIcon className="w-10 h-10" />
          <div className="text-center">
            <p className="text-yellow-200 font-bold text-xs">
              {data?.wallet?.total_points?.toLocaleString() || "۰"}
            </p>
            <p className="text-white text-xs font-semibold">امتیاز</p>
          </div>
        </div>

        <div className="w-[1px] h-10 bg-white/40 rounded-xl" />

        <div className="flex items-center gap-2">
          <TierIcon className="w-10 h-10" />
          <div className="text-center">
            <p className="text-yellow-200 font-bold text-xs">
              {data?.customer_level_id || "۰"}
            </p>
            <p className="text-white text-xs font-semibold">عضویت</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
