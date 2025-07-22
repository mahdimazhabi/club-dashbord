import { ArrowLeftIcon } from "@/assets";
import { useNavigate } from "react-router-dom";
import { NotificationIcon, CalenderIcon } from "@/assets";

const Inbox = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between px-4 py-5 bg-emerald-500/20  rounded-b-xl ">
        <h1 className="text-[#04864C]">صندوق ورودی</h1>
        <ArrowLeftIcon
          className="text-[#04864C]  cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="px-4 mt-4 ">
        <div className="bg-[#FFF] rounded-[5px] border border-black/15 p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <NotificationIcon className="w-10 h-10 rounded-[13px] text-white bg-[#FF8A04] px-1 py-2" />
              <span className="text-[#FF8A04] font-bold">تبریک !!!</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#787878] ">
              <span>سه شنبه</span>
              <CalenderIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 space-y-1">
            <h1 className="text-[#787878] font-bold text-xs ">
              ۳۰٪ تخفیف سرویس وانت برای ۳ بار جابه جایی
            </h1>
            <p className="text-[#A7A7A7] text-xs font-semibold">
              با تخفیف سرویس وانت میتونی برای ۲ بار اول جابه جایی، تا سقف ۵۵
              هزارتومن و برای بار سوم ....
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4 ">
        <div className="bg-[#FFF] rounded-[5px] border border-black/15 p-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5">
              <NotificationIcon className="w-10 h-10 rounded-[13px] text-white bg-[#818181] px-1 py-2" />
              <span className="text-[#818181] font-bold">تبریک !!!</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#787878] ">
              <span>سه شنبه</span>
              <CalenderIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2.5 space-y-1">
            <h1 className="text-[#787878] font-bold text-xs ">
              ۳۰٪ تخفیف سرویس وانت برای ۳ بار جابه جایی
            </h1>
            <p className="text-[#A7A7A7] text-xs font-semibold">
              با تخفیف سرویس وانت میتونی برای ۲ بار اول جابه جایی، تا سقف ۵۵
              هزارتومن و برای بار سوم ....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
