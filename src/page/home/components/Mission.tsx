import "@/shared/StyleEmbla/embla.css";
import { useMission } from "@/shared/api/useMission";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "@/components/EmblaCarouselSelectedSnapDisplay";
import useEmblaCarousel from "embla-carousel-react";
import { Skeleton } from "@/components/ui/skeleton";
export const Mission = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);
  const { data, isLoading } = useMission();
  const datalengh = data?.length;

  return (
    <div className="mt-5">
      <h1 className="mb-5 text-lg font-bold">اخرین ماموریت ها</h1>
      <div className="embla">
        <div className="embla__controls">
          <div className="embla__buttons flex gap-2">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container">
            {isLoading
              ? Array.from({ length: datalengh ?? 3 }).map((_, index) => (
                  <div className="embla__slide " key={index}>
                    <div className=" ">
                      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    </div>
                  </div>
                ))
              : data?.map((items, index) => (
                  <div className="embla__slide min-w-[10000px]" key={index}>
                    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-xl shadow-md border border-indigo-100 p-4 text-right h-[180px] flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold bg-gradient-to-r from-amber-400 to-amber-300 text-white px-3 py-1.5 rounded-full shadow-sm">
                          {items.points} امتیاز
                        </span>
                        <span className="text-xs font-semibold bg-gradient-to-r from-blue-400 to-blue-300 text-white px-3 py-1.5 rounded-full shadow-sm">
                          {items.coins} سکه
                        </span>
                      </div>
                      <h2 className="text-sm font-bold mb-2 text-gray-800">{items.title}</h2>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow leading-relaxed">{items.description}</p>
                      <div className="flex items-center justify-between text-xs mt-auto pt-2 border-t border-indigo-100">
                        <span className={`px-2 py-1 rounded-full ${items.is_repeatable ? 'bg-gradient-to-r from-green-400 to-green-300 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {items.is_repeatable ? 'قابل تکرار' : 'یکبار مصرف'}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${items.is_active ? 'bg-gradient-to-r from-emerald-400 to-emerald-300 text-white' : 'bg-red-100 text-red-600'}`}>
                          {items.is_active ? 'فعال' : 'غیرفعال'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
