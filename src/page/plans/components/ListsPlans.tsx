import DisImg from "@/assets/img/discountImg.png";
import BanerPlansImg from "@/assets/img/BanerPlans.jpg";
import SliderSearch from "@/shared/components/SliderSearch";
import { CoinIcon, VectorIcon } from "@/assets";
import { Button } from "@/components/ui/button";

const ListsPlans = () => {
  return (
    <section>
      <div>
        <div className="flex gap-2 ">
          <img src={DisImg} alt="dis" width={20} height={20} />
          <h1 className="text-spidar2 text-[20px] font-bold capitalize">
            کوپن ها
          </h1>
        </div>
        <p className="text-[#818181] font-normal text-[15px] capitalize">
          با کوپن‌های اختصاصی، خریدت رو هوشمندانه‌تر کن.
        </p>
      </div>
      <SliderSearch />
      <div className="flex  justify-center mt-5">
        <div className="bg-[#FFF]  rounded-r-lg ">
          <div className="p-2  relative z-20 ">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={BanerPlansImg}
                  alt="plans"
                  width={132}
                  height={84}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-[#04864C] font-bold text-sm capitalize">
                  تخفیف ۲۰ درصدی بیمه سرقت
                </h1>
                <p className="text-[#A7A7A7] text-xs font-semibold capitalize">
                  ویژه اولین درخواست شما!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center text-white bg-[#0338A1] rounded-2xl w-16 h-6 text-center justify-center gap-1.5">
                <CoinIcon />
                <span className="text-xs font-bold">100</span>
              </div>
              <Button
                variant={"link"}
                className="text-spidar2 underline cursor-pointer"
              >
                مشاهده جزییات
              </Button>
            </div>
          </div>
        </div>
        <VectorIcon className="text-[#C47F18]" width={45} height={134} />
      </div>
    </section>
  );
};

export default ListsPlans;
