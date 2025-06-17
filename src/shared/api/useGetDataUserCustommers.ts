import { useQuery } from "@tanstack/react-query";
import { useDataFetching } from "../hook/useDataFetching";
import axios from "axios";
import { Customer } from "../interface/CustomersDataType";

export const useGetDataUserCustommers = () => {
  const { baseUrl, headers } = useDataFetching();
  const { data, isLoading } = useQuery<Customer>({
    queryKey: ["InfoUser"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${baseUrl}/info`, {
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
