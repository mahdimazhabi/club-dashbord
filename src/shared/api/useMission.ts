import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDataFetching } from "../hook/useDataFetching";
import { DataMission } from "../interface/MissionType";
export const useMission = () => {
  const { baseUrl, headers } = useDataFetching();

  const { data, isLoading } = useQuery<DataMission[]>({
    queryKey: ["ListsMission"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${baseUrl}/missionslist`, {
          headers: headers,
        });
        if (response) {
          console.log(response);

          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { data, isLoading };
};
