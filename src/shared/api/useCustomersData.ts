import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../hooks/useFetch";
import { CustomerResponse } from "../interface/interface";

export const useCustomersData = () => {
  const { baseUrl, headers } = useFetch();
  const { data: DataCustomers, isLoading: LoadingCustomers } =
    useQuery<CustomerResponse>({
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
