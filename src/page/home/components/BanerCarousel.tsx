import Baner from "@/assets/img/Rectangle 4199 (1).png";
import Bane2 from "@/assets/img/Rectangle 4199 (2).png";

import { DotButton, useDotButton } from "@/components/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";

const BanerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ direction: "rtl" });
  const DataBaner = [
    { id: 1, image: Baner, alt: "Baner 1" },
    { id: 2, image: Bane2, alt: "Baner 2" },
    { id: 3, image: Baner, alt: "Baner 3" },
  ];

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <section className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {DataBaner.map((item) => (
            <div className="embla__slide" key={item.id}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
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
    </section>
  );
};

export default BanerCarousel;
