import { Skeleton } from "@/components/ui/skeleton";

const MissionCardSkeleton = () => (
  <div className="embla__slide flex-[0_0_auto]!">
    <div className="w-58 bg-background rounded-[10px] mt-4 border border-neutral-200 px-3 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        <Skeleton className="size-16 rounded-md shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>

      <div className="border-t border-dashed border-[#DEDEDE] mt-3 pt-2">
        <div className="flex items-center justify-between px-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  </div>
);

export default MissionCardSkeleton;
