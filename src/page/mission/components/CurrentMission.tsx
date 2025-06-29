import { ArrowLeft } from "lucide-react";
import { ProgressBar } from "@/shared/components/progress-bar";
import { Card, CardContent } from "@/components/ui/card";
import { useMission } from "@/shared/api/useMission";
import { persianDate } from "@/lib/date";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const CurrentMission = () => {
  const { data, isLoading } = useMission();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-between mb-8">
          <Skeleton className="h-6 w-40 rounded-lg" />
          <Skeleton className="h-6 w-32 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-6">
                <Skeleton className="h-6 w-3/4 mb-4 rounded-lg" />
                <Skeleton className="h-5 w-1/4 mb-4 rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">
              ماموریت های فعلی
            </h2>
            <span className="text-base text-gray-500 mt-2">
              هیچ ماموریت فعالی وجود ندارد
            </span>
          </div>
        </div>
      </div>
    );
  }

  const formatCondition = (condition: any) => {
    if (typeof condition === "string") return condition;
    if (typeof condition === "object" && condition !== null) {
      if (condition.count_purchase) {
        return `${condition.count_purchase} خرید`;
      }
      return Object.values(condition).join(" ");
    }
    return "";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800">ماموریت های فعلی</h2>
          <span className="text-base text-gray-500 mt-2">
            {data.length} ماموریت فعال
          </span>
        </div>
        <motion.div 
          whileHover={{ x: -5 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-base text-primary-50 font-medium group-hover:text-primary-40 transition-colors">
            مشاهده تاریخچه
          </span>
          <ArrowLeft
            size={18}
            className="text-primary-40 group-hover:translate-x-1 transition-transform"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.map((mission) => (
          <motion.div
            key={mission.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 space-y-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
                    {mission.title}
                  </h3>
                  <span className="text-sm font-semibold bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full shadow-sm">
                    {mission.points} امتیاز
                  </span>
                </div>

                {mission.condition && (
                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium whitespace-nowrap">شرایط:</span>
                    <span className="line-clamp-1">
                      {formatCondition(mission.condition)}
                    </span>
                  </div>
                )}

                <ProgressBar
                  current={mission.coins || 0}
                  total={mission.points || 100}
                  className="mt-2 h-3 rounded-full"
                />

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {persianDate(mission.created_at)}
                  </span>
                  {mission.is_repeatable && (
                    <span className="text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full font-medium">
                      قابل تکرار
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CurrentMission;
