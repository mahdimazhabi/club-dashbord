import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JoinMissions = () => {
  const DataList = [
    {
      point: "100",
      title: "مسابقه روزانه را کامل کنید",
      descreption: "هر روز 5 آزمون مختلف را کامل کنید",
    },
    {
      point: "500",
      title: "تعامل با برنامه",
      descreption: "هر روز 5 آزمون مختلف را کامل کنید",
    },
    {
      point: "100",
      title: "حضور در رویداد ویژه",
      descreption: "در یک رویداد فروشگاه شرکت کنید یا ...",
    },
    {
      point: "500",
      title: "چالش خرید",
      descreption: "طی دو هفته آینده سه خرید انجام دهید",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex items-center gap-4">
        <h1 className="text-secondary-50 font-semibold">
          پیوستن به ماموریت‌ها
        </h1>
        <ArrowLeft size={20} className="text-secondary-50" />
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4">
        {DataList.map((item, index) => (
          <div key={index}>
            <Card>
              <CardContent className="flex flex-col p-4 ">
                <span className="font-semibold text-xs bg-secondary-20 text-amber-400 w-min px-3 py-1 rounded-2xl">
                  {item.point}امتیاز
                </span>
                <p className="text-xs mt-3 font-semibold">{item.title}</p>
                <p className="text-xs mt-3 text-neutral-50">
                  {item.descreption}
                </p>
                <div className="flex justify-end mt-5">
                  <Button variant="secondary" className="h-7 text-xs">
                    پیوستن
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinMissions;
