import { Skeleton } from "@/components/ui/skeleton";

const CouponCardSkeleton = () => {
  return (
    <div
      className="
        relative flex w-72 shrink-0 flex-col rounded-2xl bg-background
        border border-neutral-200 px-3 py-3 shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <Skeleton className="size-16 rounded-md" />
        <div className="flex-1 pt-1 space-y-2">
          <Skeleton className="h-4 w-28 mx-auto" />
          <Skeleton className="h-4 w-20 mx-auto" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
};

export default CouponCardSkeleton;
