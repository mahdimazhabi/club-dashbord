import { CouponIcon } from "@/assets";
import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButton";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Image from "@/assets/img/BanerPlans.jpg";
const Coupons = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl" });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const DataBaner = [
    {
      id: 1,
      image: Image,
      alt: "Game Banner Jackbot",
      descreption: "ویژه اولین در خواست شما!",
      title: "تخفیف 2۰ درصدی بیمه سرقت و خرابی موبایل",
    },
    {
      id: 2,
      image: Image,
      alt: "تخفیف 2۰ درصدی بیمه سرقت و خرابی موبایل",
      title: "گردونه شانس",
      descreption: "ویژه اولین در خواست شما!",
    },
    {
      id: 3,
      image: Image,
      alt: "تخفیف 2۰ درصدی بیمه سرقت و خرابی موبایل",
      title: "گردونه شانس",
      descreption: "ویژه اولین در خواست شما!",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CouponIcon className="w-6 h-6" />
          <span className="text-center justify-start text-spidar2 text-xl font-bold  capitalize">
            کوپن و تخفیف ها
          </span>
        </div>
        <div>
          <Button
            variant={"link"}
            className="text-xs font-bold underline capitalize text-spidar2 px-0"
          >
            لیست کوپن ها
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-zinc-500  font-normal text-xs capitalize">
          با کوپن و تخفیف ها ، سبد خریدتو پر کن !!
        </p>
      </div>
      <div className="embla  select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container gap-2.5">
            {DataBaner.map((item) => (
              <div
                key={item.id}
                className="
                  relative flex w-72 shrink-0 flex-col rounded-2xl bg-background
                  border border-neutral-200 px-3 py-3 shadow-sm
                "
              >
                <div className="flex items-start justify-between ">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="size-16 rounded-md object-cover"
                  />
                  <div className="flex-1 pt-1">
                    <div className="mx-auto w-37 min-h-10 rounded-sm  text-sm font-bold  text-button">
                      {item.title}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <Button
                    variant={"link"}
                    className="px-0 font-bold text-spidar2 text-xs"
                  >
                    مشاهده جزئیات
                  </Button>
                </div>
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
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
