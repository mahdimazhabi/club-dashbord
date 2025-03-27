import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProgressBar } from "@/components/ui/progress-bar";

export function Mission() {
  const DataList = [
    { point: "100", title: "بازدید روزانه از وب سایت", progress: { current: 5, total: 7 } },
    { point: "500", title: "یکبار خرید در ماه گذشته", progress: { current: 3, total: 5 } },
    { point: "100", title: "بازدید روزانه از وب سایت", progress: { current: 2, total: 4 } },
    { point: "500", title: "یکبار خرید در ماه گذشته", progress: { current: 1, total: 3 } },
    { point: "100", title: "بازدید روزانه از وب سایت", progress: { current: 4, total: 6 } },
    { point: "500", title: "یکبار خرید در ماه گذشته", progress: { current: 2, total: 4 } },
  ];
  return (
    <div className="mt-5">
      <h1 className="mb-5 text-lg font-bold">اخرین ماموریت ها</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {DataList.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col p-4">
                    <span className=" font-semibold  text-xs bg-secondary-20 text-amber-400 w-min px-3 py-1 rounded-2xl">
                      امتیاز{item.point}دریافت
                    </span>
                    <p className="text-xs mt-3 font-semibold">{item.title}</p>
                    <ProgressBar current={item.progress.current} total={item.progress.total} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
