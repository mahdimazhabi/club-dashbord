import { BellRing } from "lucide-react";
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
    <Menubar className="  border-none rounded-full ">
      <MenubarMenu>
        <MenubarTrigger className=" py-2 px-1">
          <NotificationIcon className="w-5 h-5 text-spidar1" />

          <span className="absolute -top-2 -right-1.5 flex items-center justify-center w-4 h-4 text-xs rounded-full bg-red-500 text-white">
            {total}
          </span>
        </MenubarTrigger>

        <MenubarContent
          sideOffset={25}
          align="center"
          className="
  w-60
  before:content-['']
  before:absolute
  before:-top-3.5
  before:left-1/2
  before:-translate-x-1/2
  before:border-8
  before:border-transparent
  
  before:border-b-sidebar
"
        >
          {ListInboxQuery.isLoading ? (
            <div className="px-3 py-4 text-center text-sm text-gray-400">
              در حال دریافت اعلان‌ها...
            </div>
          ) : total > 0 ? (
            <>
              {fiveNot.map((item) => (
                <div key={item.id}>
                  <MenubarItem
                    className="group flex items-start gap-2 px-3 py-2 cursor-pointer "
                    onClick={() => navigate(`/profile/inbox/${item.id}`)}
                  >
                    <BellRing className="mt-1 group-hover:text-red-500 transition-colors" />

                    <div className="flex flex-col gap-1 text-right">
                      <span className="text-xs font-semibold line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 line-clamp-2">
                        {item.body}
                      </span>
                    </div>
                  </MenubarItem>

                  <MenubarSeparator />
                </div>
              ))}

              <MenubarItem
                className="cursor-pointer px-3"
                onClick={() => navigate("/profile/inbox")}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="flex items-center justify-center w-5 h-5 text-xs rounded-full bg-red-500 text-white">
                    {total}
                  </span>

                  <div className="flex items-center gap-1 text-sm font-medium">
                    مشاهده تمام اعلانات
                    <BellRing />
                  </div>
                </div>
              </MenubarItem>
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
