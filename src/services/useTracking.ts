import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { TrackingResponse } from "@/interface/tracking";
import { parseAsString, useQueryStates } from "nuqs";

const useTracking = () => {
  const [query] = useQueryStates({
    search: parseAsString.withDefault(""),
  });

  const TrackingListsQuery = useQuery({
    queryKey: ["TrackingLists", query.search],
    queryFn: async () => {
      const endpoint = `order_history?search=${query.search}`;

      const response = await fetcher<TrackingResponse>({
        method: "get",
        endpoint,
        contentType: "json",
      });

      if (response.status === 200) {
        return response.data;
      }

      throw new Error("Failed to fetch tracking list");
    },
  });

  return { TrackingListsQuery };
};

export default useTracking;
