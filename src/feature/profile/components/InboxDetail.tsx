import { CalenderIcon, NotificationIcon } from "@/assets";
import PageHeader from "@/components/PageHeader";
import { fullPersianDate } from "@/lib/date";
import { useInboxStore } from "@/store/useInboxStore";
import { useNavigate } from "react-router-dom";

const InboxDetail = () => {
  const { inbox } = useInboxStore();
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader title="جزییات  صندوق پیام" onBack={() => navigate(-1)} />
      <div className="mt-4 px-4">
        <div className="bg-background rounded-sm border border-black/15 p-5  shadow">
          <div className="flex justify-between">
            <div className="relative">
              <NotificationIcon className="w-10 h-10 rounded-[13px] text-white bg-[#FF8A04] px-1 py-2" />
              <div className="absolute top-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>

            <div className="flex items-center gap-1.5 text-[#787878]">
              <span className="text-sm ">
                {fullPersianDate(inbox?.created_at)}
              </span>
              <CalenderIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="mt-4 space-y-1 px-1">
            <h1 className="text-[#787878] font-bold">{inbox?.title}</h1>
            <p className="text-[#A7A7A7] text-xs font-semibold line-clamp-2">
              {inbox?.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxDetail;
