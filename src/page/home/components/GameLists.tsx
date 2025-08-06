import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import GameBannerJackbot from "@/assets/img/Rectangle 184.png";
import GanmeBanerWheel from "@/assets/img/Rectangle 184 (1).png";
import { GameIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GameLists = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl" });
  const navigate = useNavigate();
  const DataBaner = [
    {
      id: 1,
      image: GameBannerJackbot,
      alt: "Game Banner Jackbot",
      descreption: "بازی امروزتو از دست نده!",
      title: "جک پات",
    },
    {
      id: 2,
      image: GanmeBanerWheel,
      alt: "Game Banner Wheel",
      title: "گردونه شانس",
      descreption: "هر چرخش، یه شانس!",
    },
    {
      id: 1,
      image: GameBannerJackbot,
      alt: "Game Banner Jackbot",
      title: "جک پات",
      descreption: "بازی امروزتو از دست نده!",
    },
    {
      id: 2,
      image: GanmeBanerWheel,
      alt: "Game Banner Wheel",
      title: "گردونه شانس",
      descreption: "هر چرخش، یه شانس!",
    },
  ];

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GameIcon className="w-6 h-6" />
          <span className="text-center justify-start text-spidar2 text-xl font-bold  capitalize">
            بای سرگرمی
          </span>
        </div>
        <div>
          <Button
            variant={"link"}
            className="text-xs font-bold underline capitalize text-spidar2 px-0"
          >
            لیست بازی ها
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-zinc-500 text-base font-normal capitalize">
          با بازی و چالش‌ها، سریع‌تر امتیاز بگیر!
        </p>
      </div>
      <div className="embla  select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-2.5">
            {DataBaner.map((item) => (
              <div
                className=" flex flex-col  rounded-[10px] shrink-0 border-2.5 border py-[10px] px-[13px] "
                key={item.id}
                onClick={() => navigate("/Gamification")}
              >
                <img src={item.image} alt={item.alt} />
                <h3 className=" text-center font-bold  text-sm text-spidar1 mt-2.5">
                  {item.title}
                </h3>
                <p className="self-stretch text-center text-neutral-400 text-xs font-semibold ">
                  {item.descreption}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameLists;
