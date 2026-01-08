import { useQuery } from "@tanstack/react-query";
import { CustomerResponse } from "../shared/interface/interface";
import { fetcher } from "@/action/fetcher";
export const useCustomersData = () => {
  const { data: DataCustomers, isLoading: LoadingCustomers } = useQuery({
    queryKey: ["CustomersData"],
    queryFn: () =>
      fetcher<CustomerResponse>({
        method: "get",
        endpoint: "/info",
        contentType: "json",
      }),
  });

  return { DataCustomers, LoadingCustomers };
};
