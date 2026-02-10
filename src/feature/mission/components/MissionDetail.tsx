import PageHeader from "@/components/PageHeader";
import useMission from "@/services/useMission";
import { useNavigate } from "react-router-dom";
import { fullPersianDate, persianDate } from "@/lib/date";
import NoMission from "@/assets/img/NoMission.png";

const MissionDetail = () => {
  const { detailMission } = useMission();
  const navigate = useNavigate();

  const mission = detailMission.data;

  return (
    <section className="space-y-4">
      <PageHeader
        title="جزییات ماموریت "
        onBack={() => {
          navigate("/mission");
        }}
      />

      <div className="mt-4 px-4">
        <div className="mx-auto flex max-w-md flex-col gap-4 rounded-2xl bg-white px-3 pb-4 pt-3 shadow-md border border-neutral-200">
          {/* تصویر و برچسب‌ها */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={mission?.image_url || NoMission}
              alt={mission?.title}
              className="h-44 w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

            <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
              {mission?.mission_type_label && (
                <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-main-alt shadow-sm">
                  {mission.mission_type_label}
                </span>
              )}
              {mission?.label && (
                <span className="rounded-full bg-main/90 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                  {mission.label}
                </span>
              )}
            </div>

            <div className="absolute bottom-2 right-3 left-3">
              <h1 className="line-clamp-2 text-sm font-bold text-white drop-shadow">
                {mission?.title}
              </h1>
            </div>
          </div>

          {/* توضیحات اصلی */}
          {mission?.description && (
            <p className="text-[11px] leading-6 text-neutral-700">
              {mission.description}
            </p>
          )}

          {/* تاریخ شروع و پایان */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded-lg bg-neutral-50 px-3 py-2">
              <span className="block text-neutral-500">شروع مأموریت</span>
              <span className="mt-1 block font-semibold text-main-alt">
                {persianDate(mission?.start_at)}
              </span>
            </div>
            <div className="rounded-lg bg-neutral-50 px-3 py-2">
              <span className="block text-neutral-500">پایان مأموریت</span>
              <span className="mt-1 block font-semibold text-main-alt">
                {persianDate(mission?.end_at)}
              </span>
            </div>
          </div>

          {/* وضعیت کلی مأموریت */}
          <div className="rounded-xl bg-neutral-50 px-3 py-2 text-[11px] text-neutral-600">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <span>
                نوع دوره:{" "}
                <span className="font-semibold text-main-alt">
                  {mission?.interval || "-"}
                </span>
              </span>
              <span>
                حداکثر دفعات انجام:{" "}
                <span className="font-semibold text-main-alt">
                  {mission?.max_attempts || "-"}
                </span>
              </span>
              <span>
                وضعیت:{" "}
                <span
                  className={`font-bold ${
                    mission?.is_active ? "text-main" : "text-neutral-400"
                  }`}
                >
                  {mission?.is_active ? "فعال" : "غیرفعال"}
                </span>
              </span>
              <span>
                تکمیل مأموریت:{" "}
                <span
                  className={`font-bold ${
                    mission?.is_completed ? "text-main" : "text-neutral-400"
                  }`}
                >
                  {mission?.is_completed ? "انجام شده" : "انجام نشده"}
                </span>
              </span>
            </div>
          </div>

          {/* تاریخ‌های انجام شده */}
          {mission?.completed_dates && mission.completed_dates.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-semibold text-spidar2">
                تاریخ‌های انجام شده
              </h2>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {mission.completed_dates?.map((date) => (
                  <span
                    key={date}
                    className="rounded-full bg-main/10 px-2 py-0.5 text-main-alt"
                  >
                    {fullPersianDate(date)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* زیرماموریت‌ها */}
          {mission?.child_missions && mission.child_missions.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xs font-semibold text-spidar2">
                زیرماموریت‌ها
              </h2>
              <div className="flex flex-col gap-1.5">
                {mission.child_missions?.map((child) => (
                  <div
                    key={child.id}
                    className="flex items-start justify-between rounded-xl bg-neutral-50 px-3 py-2"
                  >
                    <div className="flex-1 pr-1">
                      <p className="text-[11px] font-semibold text-neutral-800 line-clamp-1">
                        {child.title}
                      </p>
                      {child.description && (
                        <p className="mt-0.5 text-[10px] text-neutral-500 line-clamp-2">
                          {child.description}
                        </p>
                      )}
                    </div>
                    <span
                      className={`whitespace-nowrap text-[10px] font-bold ${
                        child.is_completed ? "text-main" : "text-neutral-400"
                      }`}
                    >
                      {child.is_completed ? "انجام شده" : "در انتظار"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionDetail;
