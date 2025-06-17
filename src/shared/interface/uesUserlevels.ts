import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDataFetching } from "../hook/useDataFetching";

export const useUserlevels = () => {
  const { baseUrl, headers } = useDataFetching();
  const { data, isLoading } = useQuery({
    queryKey: ["LevelLists"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${baseUrl}/customer-levels/list`, {
          headers: headers,
        });
        if (response) {
          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return { data, isLoading };
};
