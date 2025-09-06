import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../hooks/useFetch";
import { Root } from "../interface/interface"; // املای درست

export const useCustomersData = () => {
  const { baseUrl, headers } = useFetch();
  const { data: DataCustomers, isLoading: LoadingCustomers } = useQuery<Root>({
    queryKey: ["customers"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/info`, {
        headers,
      });
      return response.data;
    },
  });

  return { DataCustomers, LoadingCustomers };
};
