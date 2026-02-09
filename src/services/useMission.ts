import { fetcher } from "@/action/fetcher";
import { MissionResponse } from "@/interface/mission";
import { useQuery } from "@tanstack/react-query";

const useMission = () => {
  const listMission = useQuery({
    queryKey: ["list-mission"],
    queryFn: async () => {
      const response = await fetcher<MissionResponse>({
        method: "get",
        endpoint: `user/missions?page=1`,
        contentType: "json",
      });
      if (response) {
        return response.data;
      }
    },
  });
  return { listMission };
};

export default useMission;
