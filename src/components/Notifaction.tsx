import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import useInbox from "@/services/useInbox";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { NotificationIcon } from "@/assets";
export const Notifaction = () => {
  const { ListInboxQuery } = useInbox();
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inboxItems =
    ListInboxQuery.data?.data.filter((item) => {
      if (!item.published_at) return false;
      const publishedDate = new Date(item.published_at);
      publishedDate.setHours(0, 0, 0, 0);
      return publishedDate <= today;
    }) ?? [];

  const total = inboxItems.length;
  const fiveNot = inboxItems.slice(0, 5);

  return (
    <Menubar className=" border-none rounded-full ">
      <MenubarMenu>
        <MenubarTrigger className="px-1">
          <NotificationIcon className="w-5 h-5 text-spidar1" />

          <span className="absolute -top-2 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] rounded-full bg-red-500 text-white">
            {total.toLocaleString("fa-IR")}
          </span>
        </MenubarTrigger>

        <MenubarContent
          sideOffset={20}
          align="center"
          className="relative border border-main w-60"
        >
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2  border-main border-l border-t rounded-r-xs rounded-b-xs rounded-t-sm size-5 rotate-45 z-50 bg-background"></div>
          <div className="flex justify-between items-center px-2.5">
            <Button
              className="text-[10px] px-0 text-red-400 font-bold"
              variant={"link"}
              onClick={() => navigate("/profile/inbox")}
            >
              مشاهده همه
            </Button>
            <span className="text-xs font-semibold text-main">اعلانات</span>
          </div>

          {ListInboxQuery.isLoading ? (
            <div className="px-3 py-4 text-center text-sm text-gray-400">
              در حال دریافت اعلان‌ها...
            </div>
          ) : total > 0 ? (
            <>
              {fiveNot.map((item, index) => (
                <div key={item.id}>
                  <MenubarItem
                    className="group flex items-center gap-3 px-3 py-2 cursor-pointer"
                    onClick={() => navigate(`/profile/inbox/${item.id}`)}
                  >
                    <div className="flex flex-col gap-1 text-right flex-1">
                      <span className="text-xs font-semibold line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 line-clamp-2">
                        {item.body}
                      </span>
                    </div>

                    <NotificationIcon className="max-w-10 h-10! flex-1 rounded-[13px] text-white bg-[#FF8A04] p-2 shrink-0" />
                  </MenubarItem>

                  {index !== fiveNot.length - 1 && <MenubarSeparator />}
                </div>
              ))}
            </>
          ) : (
            <div className="px-3 py-4 text-center text-sm text-spidar font-bold">
              هیچ اعلان جدیدی وجود ندارد
            </div>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
