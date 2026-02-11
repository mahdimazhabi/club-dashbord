import { Skeleton } from "@/components/ui/skeleton";

const MissionDetailSkeleton = () => {
  return (
    <div className="mx-auto max-w-md">
      <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white/90 p-3 pb-5 shadow-[0_18px_45px_rgba(0,0,0,0.05)]">
        <div className="relative overflow-hidden rounded-2xl">
          <Skeleton className="h-44 w-full" />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent" />

          <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>

          <div className="absolute inset-x-3 bottom-3 space-y-2">
            <Skeleton className="h-4 w-3/4 rounded" />
            <Skeleton className="h-3 w-1/3 rounded" />
          </div>
        </div>

        <div className="space-y-2 rounded-2xl bg-neutral-50 px-3 py-2.5">
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-5/6 rounded" />
          <Skeleton className="h-3 w-2/3 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="space-y-2 rounded-2xl bg-neutral-50 px-3 py-2">
            <Skeleton className="h-3 w-16 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
          <div className="space-y-2 rounded-2xl bg-neutral-50 px-3 py-2">
            <Skeleton className="h-3 w-16 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 px-3 py-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <div className="space-y-1">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="h-3 w-20 rounded" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-3 w-24 rounded" />
              <Skeleton className="h-3 w-16 rounded" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-3 w-14 rounded" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-3 w-20 rounded" />
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-24 rounded" />
            <Skeleton className="h-3 w-10 rounded" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-3 w-8 rounded" />
          </div>
          <div className="flex flex-col gap-1.5">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex items-start justify-between rounded-2xl bg-neutral-50 px-3 py-2"
              >
                <div className="flex-1 space-y-2 pr-1">
                  <Skeleton className="h-3 w-3/4 rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-1/2 rounded" />
                </div>
                <Skeleton className="ml-2 h-5 w-16 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionDetailSkeleton;


