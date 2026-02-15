import DisImg from "@/assets/img/discountImg.png";
import MailkImg from "@/assets/img/Mailk.png";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";
import SliderSearch from "@/components/SliderSearch";
const DiscountsLists = () => {
  return (
    <section className="space-y-5">
      <div>
        <div className="flex gap-2 ">
          <img src={DisImg} alt="dis" width={20} height={20} />
          <h1 className="text-spidar2 text-[20px] font-bold capitalize">
            تخفیف های من
          </h1>
        </div>
        <p className="text-[#818181] font-normal text-[15px] capitalize">
          با تخفیف‌های اختصاصی، خریدت رو هوشمندانه‌ تر کن.
        </p>
      </div>
      <SliderSearch />
      <div className="bg-[#FFF] py-3 px-4 border border-black/15 rounded-lg shadow ">
        <div className="text-[#737373] font-bold capitalize border-b-2 pb-3 border-[#777] ">
          <h1>۱۰۵ هزار تومان تخفیف سوپرمارکت تحویل فوری</h1>
          <span className="block">( ۳ تخفیف ۳۵ هزار تومانی )</span>
        </div>
        <div className="grid grid-cols-2 items-center mt-4 gap-2 ">
          <div>
            <div className="mt-3.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1  rounded-full border  border-black/15 ">
                <img src={MailkImg} alt="Mailk" width={12} height={14} />
                <span className="text-[#737373] text-xs font-normal capitalize">
                  سوپرمارکت
                </span>
              </div>
            </div>
            <div className="mt-2.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1 bg-[#FAFAFA]  rounded-full border  border-black/15 ">
                <Info className="text-red-500" size={15} />
                <span className="text-red-500 text-xs font-normal capitalize">
                  ۳ بار استفاده
                </span>
              </div>
            </div>
            <div className="mt-2.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1 bg-[#FAFAFA]  rounded-full border  border-black/15 ">
                <Info className="text-[#737373]" size={15} />
                <span className="text-[#737373] text-[11px] font-normal capitalize">
                  قابل استفاده تا ۱۰ روز دیگر
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#FAFAFA] py-3">
            <div className="space-y-2.5 flex flex-col items-center">
              <div className="w-32 h-9 bg-emerald-500/10 rounded-[5px] border border-emerald-500 border-dashed flex items-center justify-center text-center">
                <span className="text-emerald-700 text-xs font-semibold">
                  dlpw928927-djsdo
                </span>
              </div>
              <Button
                variant={"secondary"}
                icon={<CopyIcon />}
                className="w-32 h-9 cursor-pointer text-xs"
              >
                کپی کردن
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF] py-3 px-4 border border-black/15 rounded-lg shadow ">
        <div className="text-[#737373] font-bold capitalize border-b-2 pb-3 border-[#777] ">
          <h1>۱۰۵ هزار تومان تخفیف سوپرمارکت تحویل فوری</h1>
          <span className="block">( ۳ تخفیف ۳۵ هزار تومانی )</span>
        </div>
        <div className="grid grid-cols-2 items-center mt-4 gap-2 ">
          <div>
            <div className="mt-3.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1  rounded-full border  border-black/15 ">
                <img src={MailkImg} alt="Mailk" width={12} height={14} />
                <span className="text-[#737373] text-xs font-normal capitalize">
                  سوپرمارکت
                </span>
              </div>
            </div>
            <div className="mt-2.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1 bg-[#FAFAFA]  rounded-full border  border-black/15 ">
                <Info className="text-red-500" size={15} />
                <span className="text-red-500 text-xs font-normal capitalize">
                  ۳ بار استفاده
                </span>
              </div>
            </div>
            <div className="mt-2.5">
              <div className=" flex items-center gap-1 w-fit px-2 py-1 bg-[#FAFAFA]  rounded-full border  border-black/15 ">
                <Info className="text-[#FF8A04]" size={15} />
                <span className="text-[#FF8A04] text-[11px] font-normal capitalize">
                  قابل استفاده تا فردا
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-[#FAFAFA] py-3">
            <div className="space-y-2.5 flex flex-col items-center">
              <div className="w-32 h-9 bg-emerald-500/10 rounded-[5px] border border-emerald-500 border-dashed flex items-center justify-center text-center">
                <span className="text-emerald-700 text-xs font-semibold">
                  dlpw928927-djsdo
                </span>
              </div>
              <Button
                variant={"secondary"}
                icon={<CopyIcon />}
                className="w-32 h-9 cursor-pointer text-xs"
              >
                کپی کردن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountsLists;
