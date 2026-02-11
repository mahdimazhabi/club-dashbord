import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import useMission from "@/services/useMission";
import { useNavigate } from "react-router-dom";
import { fullPersianDate, persianDate } from "@/lib/date";
import NoMission from "@/assets/img/NoMission.png";
import MissionDetailSkeleton from "@/skeleton/MissionDetailSkeleton";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const MissionDetail = () => {
  const { detailMission } = useMission();
  const navigate = useNavigate();
  const mission = detailMission.data;
  const isLoading = detailMission.isLoading;
  const hasError = detailMission.isError;
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section className="min-h-screen bg-linear-to-b from-background to-color-background-alt">
      <PageHeader
        title="جزئیات مأموریت"
        onBack={() => {
          navigate("/mission");
        }}
      />

      <div className="mt-4 px-4 pb-6">
        <div className="mx-auto max-w-md">
          {isLoading && <MissionDetailSkeleton />}

          {!isLoading && !hasError && mission && (
            <div className="flex flex-col gap-4 rounded border border-neutral-200 bg-white/90 p-3 pb-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm">
              {(() => {
                const maxAttempts = Number(mission.max_attempts) || 0;
                const completedCount = mission.completed_dates?.length ?? 0;
                const baseProgress =
                  maxAttempts > 0
                    ? Math.min(100, (completedCount / maxAttempts) * 100)
                    : mission.is_completed
                      ? 100
                      : 0;
                const progress = Number.isFinite(baseProgress)
                  ? Math.max(0, baseProgress)
                  : 0;

                return (
                  <div className="mb-1 rounded-2xl bg-neutral-50/70 px-3 py-2">
                    <div className="mb-1 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-secondary-text">
                        پیشرفت انجام مأموریت
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {progress.toFixed(0)}%
                      </span>
                    </div>
                    <Progress
                      value={progress}
                      className="h-2.5 bg-main/10 **:data-[slot=progress-indicator]:bg-main"
                    />
                    {maxAttempts > 0 && (
                      <p className="mt-1 text-[9px] text-neutral-500">
                        {completedCount} از {maxAttempts} مرتبه انجام شده است
                      </p>
                    )}
                  </div>
                );
              })()}

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={mission.image_url || NoMission}
                  alt={mission.title}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
                  {mission?.mission_type_label && (
                    <Badge
                      variant="surface"
                      className=" text-[10px] font-semibold"
                    >
                      {mission.mission_type_label}
                    </Badge>
                  )}
                </div>

                <div className="absolute inset-x-3 bottom-3">
                  <h1 className="line-clamp-2 text-sm font-bold text-white drop-shadow-sm">
                    {mission.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-2xl bg-linear-to-br from-main/5 to-main/0 px-3 py-2">
                  <span className="block text-[10px] text-neutral-500">
                    شروع مأموریت
                  </span>
                  <span className="mt-1 block font-semibold text-main-alt">
                    {persianDate(mission.start_at)}
                  </span>
                </div>
                <div className="rounded-2xl bg-linear-to-bl from-spidar2/5 to-spidar2/0 px-3 py-2">
                  <span className="block text-[10px] text-neutral-500">
                    پایان مأموریت
                  </span>
                  <span className="mt-1 block font-semibold text-main-alt">
                    {persianDate(mission.end_at)}
                  </span>
                </div>
              </div>

              {/* وضعیت کلی مأموریت */}
              <div className="rounded border border-dashed border-neutral-300 bg-neutral-200 px-3 py-3 text-[11px] text-neutral-700">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-secondary-text font-semibold">
                      نوع دوره
                    </span>
                    <span className="font-semibold text-main-alt">
                      {mission.interval || "-"}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-secondary-text font-semibold">
                      حداکثر دفعات انجام
                    </span>
                    <span className="font-semibold text-main-alt">
                      {mission.max_attempts || "-"}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-secondary-text font-semibold">
                      وضعیت
                    </span>
                    <Badge
                      variant={mission.is_active ? "successStrong" : "muted"}
                      className="inline-flex items-center gap-1 text-[10px] font-bold"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${mission.is_active ? "bg-green-600" : "bg-neutral-400"
                          }`}
                      />
                      {mission.is_active ? "فعال" : "غیرفعال"}
                    </Badge>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-secondary-text font-semibold">
                      وضعیت تکمیل
                    </span>
                    <Badge
                      variant={mission.is_completed ? "success" : "muted"}
                      className="inline-flex items-center gap-1 text-[10px] font-bold"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${mission.is_completed ? "bg-main" : "bg-neutral-400"
                          }`}
                      />
                      {mission.is_completed ? "انجام شده" : "در انتظار انجام"}
                    </Badge>
                  </div>
                </div>
              </div>

              {mission.completed_dates &&
                mission.completed_dates.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xs font-semibold text-spidar2">
                        تاریخ‌های انجام شده
                      </h2>
                      <span className="text-[10px] text-neutral-500">
                        {mission.completed_dates.length} مرتبه
                      </span>
                    </div>
                    <div className="flex max-h-24 flex-wrap gap-1.5 overflow-y-auto text-[10px]">
                      {mission.completed_dates.map((date) => (
                        <span
                          key={date}
                          className="rounded-full bg-main/8 px-2 py-0.5 text-main-alt ring-1 ring-main/10"
                        >
                          {fullPersianDate(date)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {mission.child_missions && mission.child_missions.length > 0 && (
                <div className="space-y-2 ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-semibold text-main">
                      زیرماموریت‌ها
                    </h2>
                    <span className="text-[10px] text-neutral-500">
                      {mission.child_missions.length} مورد
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {mission.child_missions.map((child) => (
                      <div
                        key={child.id}
                        className="flex items-start justify-between rounded bg-neutral-200  p-2"
                      >
                        <div className="flex-1 pr-1">
                          <p className="line-clamp-1 text-[11px] font-semibold text-neutral-800">
                            {child.title}
                          </p>
                          {child.description && (
                            <p className="mt-0.5 line-clamp-2 text-[10px] text-neutral-500">
                              {child.description}
                            </p>
                          )}
                          <p className="mt-1 text-[9px] text-neutral-400">
                            از {persianDate(child.start_at)} تا{" "}
                            {persianDate(child.end_at)}
                          </p>
                        </div>
                        <Badge
                          variant={
                            child.is_completed ? "success" : "dangerSoft"
                          }
                          className="ml-2 whitespace-nowrap px-2 py-0.5 text-[10px] font-bold"
                        >
                          {child.is_completed ? "انجام شده" : "انجام نشده"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2 rounded border border-dashed border-neutral-200 bg-neutral-200 px-3 py-3 text-[11px] leading-6 text-neutral-700 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold text-main">
                    توضیحات مأموریت
                  </span>
                  {mission.description.length > 120 && (
                    <button
                      type="button"
                      className="text-[10px] font-semibold text-main"
                      onClick={() => setShowFullDescription((prev) => !prev)}
                    >
                      {showFullDescription ? "بستن" : "جزئیات بیشتر"}
                    </button>
                  )}
                </div>
                <p
                  className={
                    showFullDescription
                      ? "text-justify transition-all"
                      : "line-clamp-3 text-justify transition-all"
                  }
                >
                  {mission.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionDetail;
