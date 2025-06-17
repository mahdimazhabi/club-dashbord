import { NotiIcon } from "@/assets";
import { ChevronRightIcon } from "@/assets";
import { TierIcon, PointsIcon, VoucherIcon } from "@/assets";
import { useGetDataUserCustommers } from "../api/useGetDataUserCustommers";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
// import { useUserlevels } from "../interface/uesUserlevels";

const Header = () => {
  const { data, isLoading } = useGetDataUserCustommers();
  // const { data: level } = useUserlevels();

  const DataList = [
    { id: 1, title: data?.wallet.total_points, icon: <VoucherIcon /> },
    { id: 2, title: data?.wallet.total_points, icon: <PointsIcon /> },
    { id: 1, title: data?.customer_level_id, icon: <TierIcon /> },
  ];

  return (
    <header className="w-full">
      <div className="bg-spidar1 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-4 px-6 py-3">
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
                    <span className="text-white/80 text-sm">Welcome back!</span>
                  </div>
                </div>
              )}
            </div>
            <NotiIcon className="text-white h-6 w-6 hover:opacity-80 transition-opacity cursor-pointer" />
          </div>
        </div>
        <div className="bg-spidar2 rounded-t-3xl px-6 py-4 shadow-inner">
          <ul className="flex justify-between text-white text-sm">
            {DataList.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="text-white/90">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
                <ChevronRightIcon className="rotate-180 h-4 w-4 text-white/70" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
