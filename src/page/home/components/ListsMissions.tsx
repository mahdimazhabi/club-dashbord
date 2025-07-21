import { CoinIcon, MissionIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import imageMissions from "@/assets/img/Rectangle 177.png";
import "@/shared/StyleEmbla/embla.css";
import useEmblaCarousel from "embla-carousel-react";
const ListsMissions = () => {
  const [emblaRef] = useEmblaCarousel({ direction: "rtl" });

  const ListsMissions = [
    {
      id: 1,
      title: "ماموریت ۱",
      description: "توضیحات ماموریت ۱",
      image: imageMissions,
      reward: 100,
    },
    {
      id: 2,
      title: "ماموریت ۲",
      description: "توضیحات ماموریت ۲",
      image: imageMissions,
      reward: 200,
    },
    {
      id: 2,
      title: "ماموریت ۲",
      description: "توضیحات ماموریت ۲",
      image: imageMissions,
      reward: 200,
    },
    {
      id: 2,
      title: "ماموریت ۲",
      description: "توضیحات ماموریت ۲",
      image: imageMissions,
      reward: 200,
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MissionIcon className="w-6 h-6" />
          <span className="text-center justify-start text-spidar2 text-xl font-bold  capitalize">
            ماموریت ها
          </span>
        </div>
        <div>
          <Button
            variant={"link"}
            className="text-xs font-bold underline capitalize text-spidar2 px-0"
          >
            لیست ماموریت ها
          </Button>
        </div>
      </div>
      <div className="">
        <p className="text-zinc-500 text-base font-normal capitalize">
          ماموریت انجام بده،امتیاز و جایزه بگیر!
        </p>
      </div>
      <div className="embla  select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-3">
            {ListsMissions.map((_, index) => (
              <div
                className="min-w-[178px] border border-[#EDEDED] bg-[#FFF]  rounded-[10px] mt-4 "
                key={index}
              >
                <div className="flex   items-center justify-between p-2">
                  <img src={imageMissions} />
                  <div>
                    <p className=" w-28  text-right justify-start text-neutral-500 text-xs font-semibold capitalize">
                      با سفارش از فروشگاه ۱۰۰ سکه دریافت کنید .
                    </p>
                    <span className=" text-right justify-start text-neutral-400 text-[10px] font-normal  capitalize">
                      لورم ایپسوم متن ساختگی..
                    </span>
                  </div>
                </div>
                <div className=" border-t border-dashed border-[#DEDEDE]">
                  <div className="flex  items-center justify-between px-2">
                    <Button
                      variant={"link"}
                      className="text-xs font-bold underline capitalize px-0  text-spidar2"
                    >
                      مشاهده جزئیات
                    </Button>
                    <div className="flex items-center bg-spidar1 py-1 px-1.5 rounded-full gap-1">
                      <CoinIcon />
                      <span className="text-xs font-bold text-[10px] text-[#FFFFFF]  ">
                        100
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListsMissions;
