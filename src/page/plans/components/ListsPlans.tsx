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
      <div className="flex justify-center mt-5">
        <div className="bg-[#FFF]  rounded-r-lg ">
          <div className="p-2  relative z-20">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="134"
          viewBox="0 0 45 134"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gold-gradient"
              x1="0"
              y1="0"
              x2="45"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFBA53" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M41.6981 130.46L45 133V1L41.8731 3.34514C40.1562 4.63283 37.809 4.68121 36.0405 3.46535L31 0H11.3628C10.1281 0 8.90051 0.187342 7.72199 0.555629C3.92088 1.74348 1.14131 5.01084 0.578113 8.95321L0.130657 12.0854C0.0436619 12.6944 0 13.3087 0 13.9239V85V124.61C0 125.851 0.307848 127.072 0.89594 128.164C2.52202 131.184 5.58425 133.189 9 133.5H32L35.4199 130.606C37.2172 129.085 39.832 129.025 41.6981 130.46Z"
            fill="url(#gold-gradient)"
          />

          <text
            x="40"
            y="70"
            fontSize="15px"
            fontWeight="700"
            letterSpacing="-0.45px"
            fill="#A86D2E"
            transform="rotate(-90, 12, 60)"
          >
            سطح طلایی
          </text>
        </svg>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-[#FFF]  rounded-r-lg ">
          <div className="p-2  relative z-20">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="134"
          viewBox="0 0 45 134"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gold-gradient"
              x1="0"
              y1="0"
              x2="45"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFBA53" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M41.6981 130.46L45 133V1L41.8731 3.34514C40.1562 4.63283 37.809 4.68121 36.0405 3.46535L31 0H11.3628C10.1281 0 8.90051 0.187342 7.72199 0.555629C3.92088 1.74348 1.14131 5.01084 0.578113 8.95321L0.130657 12.0854C0.0436619 12.6944 0 13.3087 0 13.9239V85V124.61C0 125.851 0.307848 127.072 0.89594 128.164C2.52202 131.184 5.58425 133.189 9 133.5H32L35.4199 130.606C37.2172 129.085 39.832 129.025 41.6981 130.46Z"
            fill="url(#gold-gradient)"
          />

          <text
            x="40"
            y="70"
            fontSize="15px"
            fontWeight="700"
            letterSpacing="-0.45px"
            fill="#A86D2E"
            transform="rotate(-90, 12, 60)"
          >
            سطح طلایی
          </text>
        </svg>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-[#FFF]  rounded-r-lg ">
          <div className="p-2  relative z-20">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="134"
          viewBox="0 0 45 134"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gold-gradient"
              x1="0"
              y1="0"
              x2="45"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFBA53" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M41.6981 130.46L45 133V1L41.8731 3.34514C40.1562 4.63283 37.809 4.68121 36.0405 3.46535L31 0H11.3628C10.1281 0 8.90051 0.187342 7.72199 0.555629C3.92088 1.74348 1.14131 5.01084 0.578113 8.95321L0.130657 12.0854C0.0436619 12.6944 0 13.3087 0 13.9239V85V124.61C0 125.851 0.307848 127.072 0.89594 128.164C2.52202 131.184 5.58425 133.189 9 133.5H32L35.4199 130.606C37.2172 129.085 39.832 129.025 41.6981 130.46Z"
            fill="url(#gold-gradient)"
          />

          <text
            x="40"
            y="70"
            fontSize="15px"
            fontWeight="700"
            letterSpacing="-0.45px"
            fill="#A86D2E"
            transform="rotate(-90, 12, 60)"
          >
            سطح طلایی
          </text>
        </svg>
      </div>
    </section>
  );
};

export default ListsPlans;
