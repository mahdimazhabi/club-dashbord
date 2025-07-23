import "@/shared/StyleEmbla/embla.css";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import CarImg from "@/assets/img/car.png";
import foodImg from "@/assets/img/food.png";
import disImg from "@/assets/img/SliderImg.png";
import { SearchIcon } from "@/assets";
import MailkImg from "@/assets/img/Mailk.png";

const SliderSearch = () => {
  const [emblaRef] = useEmblaCarousel({ direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const ListsItemsSlider = [
    { title: "همه", img: null },
    { title: "منتخب", img: disImg },
    { title: "غذا", img: foodImg },
    { title: "اسنپ", img: CarImg },
    { title: "سوپر مارکت", img: MailkImg },
    { title: "غذا", img: foodImg },
    { title: "اسنپ", img: CarImg },
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 px-2 overflow-hidden">
        <div className="min-w-[26px] h-[28px] flex items-center justify-center bg-white rounded-[15px] border border-spidar2">
          <SearchIcon className="w-4 h-4 text-[#818181]" />
        </div>

        <div className="embla select-none flex-1">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container gap-3">
              {ListsItemsSlider.map((item, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`min-w-[78px] h-[28px] px-[15px] py-[3px] gap-2.5 shrink-0 rounded-[15px] border text-xs font-semibold flex items-center justify-center cursor-pointer
                    ${
                      isSelected
                        ? "border-spidar1 text-spidar1"
                        : "border-black/25 text-[#818181]"
                    }
                    bg-white
                    `}
                  >
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[17px] h-[17px]"
                      />
                    )}
                    <span className="text-center">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSearch;
