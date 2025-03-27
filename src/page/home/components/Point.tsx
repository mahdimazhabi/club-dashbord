import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img from "@/assets/img/Rectangle 870.png";

const Point = () => {
  const DataList = [
    {
      point: "1.000",
      title: "50 هزار تومان تخفیف اسنپ تاکسی",
      subTitle: "ویژه کاربران نقره ای",
      amount: "50 هزار تومان",
      description: "تخفیف اسنپ تاکسی",
    },
    {
      point: "2.500",
      title: "20 درصد تخفیف",
      subTitle: "ویژه کلیه کاربران",
      amount: "20 درصد تخفیف",
      description: "ویژه اولین خرید اینترنتی",
    },
    {
      point: "2.000",
      title: "150/000 تومان تخفیف",
      subTitle: "ویژه کلیه پیتزا",
      amount: "150 هزار تومان",
      description: "تخفیف برای سفارش غذا",
    },
  ];

  return (
    <div className="mt-5">
      <h1 className="mb-5 text-lg font-bold">
        امتیاز های خود را به تخفیف تبدیل کن
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {DataList.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 mb-20 cursor-pointer"
            >
              <div className="p-1">
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={img}
                      alt="background"
                      className="w-full  object-cover"
                    />
                    <div className="p-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-bold">{item.amount}</p>
                        <p className="text-xs text-gray-600">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-amber-500">
                          <span className="text-xs">{item.point} امتیاز</span>
                        </div>
                      </div>
                    </div>
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
};

export default Point;
