import { CustomerResponse } from "../interface/interface";
import { useFetch } from "@/hooks/useFetch";

export const useCustomersData = () => {
  const { useGet } = useFetch();
  const { data: DataCustomers, isLoading: LoadingCustomers } =
    useGet<CustomerResponse>({
      url: "/info",
      queryKey: "customers",
      retry: 1,
    });

  return { DataCustomers, LoadingCustomers };
};
