import { ArrowLeft } from "lucide-react";
import { ProgressBar } from "@/shared/components/progress-bar";
import { Card, CardContent } from "@/components/ui/card";
const CurrentMission = () => {
  const DataList = [
    {
      point: "100",
      title: "ورود روزانه",
      progress: { current: 1, total: 7 },
    },
    {
      point: "500",
      title: "یکبار خرید در ماه گذشته",
      progress: { current: 3, total: 5 },
    },
    {
      point: "100",
      title: "رگه وفاداری هفتگی",
      progress: { current: 2, total: 4 },
    },
    {
      point: "500",
      title: "دوستان را معرفی کنید",
      progress: { current: 1, total: 3 },
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-xs text-secondary-50 font-semibold">
          ماموریت های فعلی (6)
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-primary-50 font-semibold">تاریخچه</span>
          <ArrowLeft size={15} className="text-primary-40" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4">
        {DataList.map((item, index) => (
          <div key={index}>
            <Card>
              <CardContent className="flex flex-col p-4 border-b">
                <span className=" font-semibold  text-xs bg-secondary-20 text-amber-400 w-min px-3 py-1 rounded-2xl">
                  {item.point}امتیاز
                </span>
                <p className="text-xs mt-3 font-semibold">{item.title}</p>
                <ProgressBar
                  current={item.progress.current}
                  total={item.progress.total}
                />
              </CardContent>
              <span className="text-[8px] mt-3 px-4">
                تکمیل شده قبل از ۲۳/۱۲/۲۳
              </span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentMission;
