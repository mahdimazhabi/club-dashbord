import { fetcher } from "@/action/fetcher";
import { MissionResponse, MissionDetailResponse } from "@/interface/mission";
import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryStates } from "nuqs";
import { useParams } from "react-router-dom";

const useMission = () => {
  const { id } = useParams();
  const [query] = useQueryStates({
    page: parseAsInteger.withDefault(1),
  });
  const listMission = useQuery({
    queryKey: ["list-mission"],
    queryFn: async () => {
      const response = await fetcher<MissionResponse>({
        method: "get",
        endpoint: `user/missions?page=1`,
        contentType: "json",
        query: {
          page: query.page,
        },
      });
      if (response) {
        return response.data;
      }
    },
  });

  const detailMission = useQuery({
    queryKey: ["detail-mission", id],
    queryFn: async () => {
      const response = await fetcher<MissionDetailResponse>({
        method: "get",
        endpoint: `user/missions/single/${id}`,
        contentType: "json",
      });
      if (response) {
        return response.data;
      }
    },
    enabled: !!id,
  });

  return { listMission, detailMission };
};

export default useMission;
