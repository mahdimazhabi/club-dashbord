import { Skeleton } from "@/components/ui/skeleton";

interface InboxSkeletonProps {
  count?: number;
}

const InboxSkeleton = ({ count = 5 }: InboxSkeletonProps) => {
  const items = Array.from({ length: count });

  return (
    <div className=" space-y-4">
      {items.map((_, index) => (
        <div
          key={index}
          className="bg-background rounded-sm border border-black/15 p-5 animate-pulse"
        >
          <div className="flex justify-between">
            {/* Icon */}
            <div className="relative">
              <Skeleton className="w-10 h-10 rounded-[13px]" />
              <Skeleton className="absolute top-0 w-2 h-2 rounded-full bg-red-500" />
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-3 w-16 rounded" />
              <Skeleton className="w-5 h-5 rounded" />
            </div>
          </div>

          {/* Title & Body */}
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-3/4 rounded" />
            <Skeleton className="h-3 w-full rounded" />
            <Skeleton className="h-3 w-5/6 rounded" />
          </div>

          {/* Button */}
          <div className="flex justify-end mt-3">
            <Skeleton className="h-4 w-16 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InboxSkeleton;
