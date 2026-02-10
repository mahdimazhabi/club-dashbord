import { CoinIcon, MissionIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import imageMissions from "@/assets/img/Rectangle 177.png";
import "@/shared/StyleEmbla/embla.css";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
const Missions = () => {
  const [emblaRef] = useEmblaCarousel({ direction: "rtl" });
  const navigate = useNavigate();

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
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          <MissionIcon className="w-6 h-6" />
          <span className="text-center justify-start text-spidar2 text-xl font-bold  capitalize">
            ماموریت ها
          </span>
        </div>
        <div>
          <Button
            variant={"link"}
            onClick={() => navigate("/mission")}
            className="text-xs font-bold underline capitalize text-spidar2 px-0 cursor-pointer"
          >
            لیست ماموریت ها
          </Button>
        </div>
      </div>
      <div className="">
        <p className="text-zinc-500 text-xs font-normal capitalize">
          ماموریت انجام بده،امتیاز و جایزه بگیر!
        </p>
      </div>
      <div className="embla  select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-3">
            {ListsMissions.map((item) => (
              <div className="embla__slide flex-[0_0_auto]!" key={item.id}>
                <div className="w-58 bg-background rounded-[10px] mt-4 border border-neutral-200 px-3 py-2 shadow-sm">
                  <div className="flex items-center  gap-3">
                    <img
                      src={item.image}
                      className="size-16 rounded-md object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="  text-button text-xs font-semibold capitalize line-clamp-2">
                        {item.title}
                      </p>
                      <span className="  text-neutral-400 text-[10px] font-normal capitalize line-clamp-1">
                        لورم ایپسوم متن ساختگی..
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-[#DEDEDE] mt-3 pt-2">
                    <div className="flex items-center justify-between px-2">
                      <Button
                        variant={"link"}
                        className="text-[10px] font-bold underline capitalize px-0 text-spidar2"
                      >
                        مشاهده جزئیات
                      </Button>
                      <div className="flex items-center bg-spidar1 py-1 px-1.5 rounded-full gap-1">
                        <CoinIcon />
                        <span className="text-xs font-bold text-[10px] text-white">
                          {item.reward}
                        </span>
                      </div>
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

export default Missions;
