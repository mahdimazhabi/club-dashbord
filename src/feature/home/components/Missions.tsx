import { MissionIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import "@/shared/StyleEmbla/embla.css";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import useFirstPage from "@/services/useFirstPage";
import { ApiConfig } from "@/config/ApiConfig";
import NoMission from "@/assets/img/NoMission.png";
import MissionCardSkeleton from "@/skeleton/MissionCardSkeleton";

const Missions = () => {
  const [emblaRef] = useEmblaCarousel({ direction: "rtl" });
  const navigate = useNavigate();
  const { firstPageData } = useFirstPage();
  const { File_url } = ApiConfig();
  const missions = firstPageData?.data?.missions;

  return (
    <section>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          <MissionIcon className="w-6 h-6" />
          <span className="text-spidar2 text-xl font-bold capitalize">
            ماموریت ها
          </span>
        </div>

        <Button
          variant="link"
          onClick={() => navigate("/mission")}
          className="text-xs font-bold underline capitalize text-spidar2 px-0"
        >
          لیست ماموریت ها
        </Button>
      </div>
      <p className="text-zinc-500 text-xs font-normal capitalize">
        ماموریت انجام بده،امتیاز و جایزه بگیر!
      </p>

      <div className="embla select-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {!missions
              ? Array.from({ length: 4 }).map((_, index) => (
                  <MissionCardSkeleton key={index} />
                ))
              : missions.map((item) => (
                  <div className="embla__slide flex-[0_0_auto]!" key={item.id}>
                    <div className="w-58 bg-background rounded-[10px] mt-4 border border-neutral-200 px-3 py-2 shadow-sm">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            item.image_url
                              ? `${File_url}/${item.image_url}`
                              : NoMission
                          }
                          className="size-16 rounded-md object-cover shrink-0"
                          alt={item.title}
                        />

                        <div className="min-w-0">
                          <p className="text-button text-xs font-semibold capitalize line-clamp-2">
                            {item.title}
                          </p>
                          <span className="text-neutral-400 text-[10px] line-clamp-1">
                            {item.description}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-[#DEDEDE] mt-3 pt-2">
                        <div className="flex items-center justify-between px-2">
                          <div className="flex items-center bg-spidar1 py-1 px-1.5 rounded-full gap-1">
                            <span className="text-[10px] font-bold text-white">
                              {item?.label ? item.label : "ماموریت پله کانی"}
                            </span>
                          </div>

                          <Button
                            variant="link"
                            className="text-[10px] font-bold underline px-0 text-spidar2"
                          >
                            مشاهده جزئیات
                          </Button>
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
