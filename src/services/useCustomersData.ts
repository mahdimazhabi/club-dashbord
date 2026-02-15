import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/action/fetcher";
import { CustomerResponse } from "@/interface/interface";
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
