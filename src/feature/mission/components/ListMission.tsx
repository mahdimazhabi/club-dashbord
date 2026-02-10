import useMission from "@/services/useMission";
import NoMission from "@/assets/img/NoMission.png";
import { parseAsInteger, useQueryStates } from "nuqs";

import PaginationControl from "@/components/PaginationControl";
import { Button } from "@/components/ui/button";
import { MissionIcon } from "@/assets";
import { useNavigate } from "react-router-dom";

const ListMission = () => {
  const { listMission } = useMission();
  const navigate = useNavigate();
  const [query, setQuery] = useQueryStates({
    perpage: parseAsInteger.withDefault(15),
    page: parseAsInteger.withDefault(1),
  });
  const missions = listMission.data;
  const totalPages = missions?.last_page ?? 1;

  return (
    <section>
      <div className="mt-6 mb-4">
        {" "}
        <div className="flex items-center gap-3">
          <MissionIcon className="w-6 h-6" />
          <span className="text-center justify-start text-spidar2 text-xl font-bold  capitalize">
            ماموریت ها
          </span>
        </div>
        <div className="">
          <p className="text-zinc-500  font-normal capitalize">
            ماموریت انجام بده،امتیاز و جایزه بگیر!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 space-y-3.5">
        {missions?.data?.map((item) => (
          <div
            key={item.id}
            className="flex bg-neutral-200 rounded-[5px] py-2.5 px-2.5 "
          >
            <div className="flex flex-1 gap-1.5  items-start border border-l-secondary-text border-dashed ">
              <img
                src={item?.image_url || NoMission}
                alt="mission-logo"
                className="size-22.5 rounded-[5px] object-cover"
              />

              <div className="flex flex-col justify-between gap-y-1.5">
                <span className="text-secondary-text font-semibold text-xs">
                  {item?.title}
                </span>

                {item?.description && (
                  <span className="text-[10px] text-neutral-600 line-clamp-2 leading-3.5">
                    {item.description}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <span>{item.label}</span>
              <Button
                variant={"link"}
                className="text-[10px] text-main-alt font-bold no-underline hover:no-underline  cursor-pointer"
                onClick={() => {
                  navigate(`/mission/detail/${item.id}`);
                }}
              >
                مشاهده جزییات
              </Button>
            </div>
          </div>
        ))}
      </div>

      <PaginationControl
        currentPage={query.page}
        totalPages={totalPages}
        onPageChange={(page) => setQuery({ page })}
      />
    </section>
  );
};

export default ListMission;
