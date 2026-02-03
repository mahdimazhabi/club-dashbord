import { Skeleton } from "@/components/ui/skeleton";

interface TrackingSkeletonProps {
  count_tracking: number;
}

const TrackingSkeleton = ({ count_tracking }: TrackingSkeletonProps) => {
  const items = Array.from({ length: count_tracking });

  return (
    <>
      {items.map((_, index) => (
        <div
          key={index}
          className="border border-black/10 rounded-lg bg-background shadow p-4 space-y-4 animate-pulse"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          {/* Body */}
          <ul className="space-y-2 mt-4">
            <li>
              <Skeleton className="h-3 w-full" />
            </li>
            <li>
              <Skeleton className="h-3 w-full" />
            </li>
            <li>
              <Skeleton className="h-3 w-full" />
            </li>
            <li>
              <Skeleton className="h-3 w-1/2" />
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default TrackingSkeleton;
