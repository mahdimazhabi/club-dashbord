import DisImg from "@/assets/img/discountImg.png";
import BanerPlansImg from "@/assets/img/BanerPlans.jpg";
import SliderSearch from "@/shared/components/SliderSearch";
import { CoinIcon } from "@/assets";
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

      <div
        className="w-[380px] h-[150px] relative shadow-lg mt-6 bg-white"
        style={{
          clipPath: `path("M8 14C8 8.47715 12.4772 4 18 4H40L40.1431 4.33731C42.594 10.1145 50.8553 9.89779 53 4H100.5H123.625H146.75H193H368C373.523 4 378 8.47715 378 14V71V87.75V95.5301V103.376V110.175V121.25V128C378 133.523 373.523 138 368 138H193H146.75H100.5H53C50.8757 132.07 42.5684 131.854 40.1395 137.666L40 138H18C12.4772 138 8 133.523 8 128V121.25V110.175V103.376V95.5301V71V14Z")`,
          WebkitClipPath: `path("M8 14C8 8.47715 12.4772 4 18 4H40L40.1431 4.33731C42.594 10.1145 50.8553 9.89779 53 4H100.5H123.625H146.75H193H368C373.523 4 378 8.47715 378 14V71V87.75V95.5301V103.376V110.175V121.25V128C378 133.523 373.523 138 368 138H193H146.75H100.5H53C50.8757 132.07 42.5684 131.854 40.1395 137.666L40 138H18C12.4772 138 8 133.523 8 128V121.25V110.175V103.376V95.5301V71V14Z")`,
          boxShadow:
            "0px 1px 2px rgba(0,0,0,0.25), 0px 4px 8px rgba(0,0,0,0.05)",
          overflow: "visible",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-[15%] pointer-events-none flex items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #FFBA53 0%, rgba(255, 255, 255, 0) 100%)",
            clipPath: "inherit",
            WebkitClipPath: "inherit",
            zIndex: 10,
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              color: "#C47F18",
              fontWeight: "bold",
              fontSize: "14px",
              userSelect: "none",
            }}
          >
            سطح طلایی
          </span>
        </div>

        <div className="p-2 pl-[15%] relative z-20">
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
    </section>
  );
};

export default ListsPlans;
