import { NotificationIcon, CalenderIcon } from "@/assets";
import { useNavigate } from "react-router-dom";
import useInbox from "@/services/useInbox";
import { fullPersianDate } from "@/lib/date";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import InboxSkeleton from "@/skeleton/InboxSkeleton";
import { useInboxStore } from "@/store/useInboxStore";

const Inbox = () => {
  const navigate = useNavigate();
  const { ListInboxQuery } = useInbox();
  const { setInbox } = useInboxStore();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inboxItems =
    ListInboxQuery.data?.data.filter((item) => {
      if (!item.published_at) return false;
      const publishedDate = new Date(item.published_at);
      publishedDate.setHours(0, 0, 0, 0);
      return publishedDate <= today;
    }) ?? [];

  return (
    <div>
      <PageHeader onBack={() => navigate(-1)} title="صندوق ورودی" />

      {/* Content */}
      <div className="px-4 mt-4">
        {ListInboxQuery.isLoading ? (
          <InboxSkeleton count={5} />
        ) : inboxItems.length === 0 ? (
          <div className="mt-10 text-center text-sm text-description-text">
            پیامی برای نمایش وجود ندارد
          </div>
        ) : (
          inboxItems.map((item) => (
            <div className="mt-4" key={item.id}>
              <div className="bg-background rounded-sm border border-black/15 p-5  shadow">
                <div className="flex justify-between">
                  <div className="relative">
                    <NotificationIcon className="w-10 h-10 rounded-[13px] text-white bg-[#FF8A04] px-1 py-2" />
                    <div className="absolute top-0 w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#787878]">
                    <span className="text-sm font-semibold">
                      {fullPersianDate(item.created_at)}
                    </span>
                    <CalenderIcon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-4 space-y-1 px-1">
                  <h1 className="text-[#787878] font-bold">{item.title}</h1>
                  <p className="text-[#A7A7A7] text-xs font-semibold line-clamp-2">
                    {item.body}
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant={"link"}
                    className="underline text-[10px] cursor-pointer"
                    size={"sm"}
                    onClick={() => {
                      setInbox(item);
                      navigate(`/profile/inbox/${item.id}`);
                    }}
                  >
                    مشاهده جزییات
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Inbox;
