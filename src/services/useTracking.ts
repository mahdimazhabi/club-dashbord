import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { TrackingResponse } from "@/interface/tracking";
const useTracking = () => {
  const TrackingListsQuery = useQuery({
    queryKey: ["TrackingLists"],
    queryFn: async () => {
      const response = await fetcher<TrackingResponse>({
        method: "get",
        endpoint: "order_history",
        contentType: "json",
      });
      if (response.status === 200) {
        return response.data;
      }
    },
  });
  return { TrackingListsQuery };
};

export default useTracking;
