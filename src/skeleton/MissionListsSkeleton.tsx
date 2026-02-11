import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  count_mission: number;
}

const MissionListsSkeleton = ({ count_mission }: Props) => {
  const list_mission_array = Array.from({ length: count_mission });

  return (
    <>
      {list_mission_array.map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-neutral-200 p-2.5 rounded-[5px]"
        >
          <div className="flex items-stretch gap-4">
            {" "}
            <Skeleton className="w-20 h-20 rounded-md" />
            <div className="flex-1 flex flex-col  gap-2 border border-l-secondary-text border-dashed  p-2">
              <Skeleton className="h-4 w-3/5 rounded-[5px]" />
              <Skeleton className="h-3 w-full rounded-[5px]" />
            </div>
            <div className="flex flex-col   gap-2">
              <Skeleton className="h-3 w-10 rounded-[5px]" />
              <Skeleton className="h-3 w-20 rounded-[5px]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MissionListsSkeleton;
