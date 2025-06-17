import { PointsIcon } from "@/assets";
import { TierIcon } from "@/assets";
import { useGetDataUserCustommers } from "../api/useGetDataUserCustommers";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
const HeaderProfile = () => {
  const { data, isLoading } = useGetDataUserCustommers();
  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="flex items-center justify-between py-6 px-3">
          <div className="flex justify-between items-center gap-4  py-3">
            <div className="flex items-center space-x-4">
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <Skeleton className="h-14 w-14 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14 border-2 border-white/20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-white/10">
                      <User className="h-7 w-7 text-white" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">
                      {data?.name}
                    </span>
                    <span className="text-white/80 text-sm">{data?.phone}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-around mt-4">
        <div className="flex items-center gap-2 ">
          <PointsIcon className="w-12 h-12" />
          <div>
            <span className="block text-xs text-yellow-500 font-bold">
              {data?.wallet?.total_points?.toLocaleString()}
            </span>
            <span className="text-xs text-black font-semibold">امتیاز</span>
          </div>
        </div>

        <hr className="h-10 flex w-[2px]  rounded-2xl  bg-neutral-20 border-none" />
        <div className="flex items-center gap-2">
          <TierIcon className="w-10 h-10" />
          <div>
            <span className="block text-xs text-yellow-500 font-bold">
              {data?.customer_level_id}
            </span>
            <span className="text-xs text-black font-semibold">عضویت</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
