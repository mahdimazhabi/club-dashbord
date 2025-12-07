import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // QueryKey,
} from "@tanstack/react-query";
import api from "@/config/htpp/axios";
import { ApiConfig } from "@/config/ApiConfig";
import { useInvalidateQuery } from "@/config/htpp/useInvalidateQuerie";

interface UseFetchOptions {
  url: string;
  params?: { page?: number; limit?: number; search?: string };
  enabled?: boolean;
  retry?: number;
  invalidate_name?: string;
  queryKey?: string;
}

// interface UseMutateOptions {
//   url: string;
//   method?: "post" | "put" | "patch" | "delete";
//   autoInvalidate?: boolean;
//   invalidateKey?: QueryKey;
// }

export const useFetch = () => {
  const { headers } = ApiConfig();
  const { invalidate } = useInvalidateQuery();

  const useGet = <T = unknown>({
    url,
    params,
    retry,
    invalidate_name,
    queryKey,
    enabled = true,
  }: UseFetchOptions) => {
    return useQuery<T>({
      queryKey: [queryKey, params],
      queryFn: async () => {
        const res = await api.get(url, { headers: headers });
        if (res && invalidate_name) {
          invalidate(invalidate_name);
        }
        return res.data;
      },
      enabled,
      retry: retry,
    });
  };

  // const useMutate = <T = unknown, V = unknown>({
  //   url,
  //   method = "post",
  //   autoInvalidate = true,
  //   invalidateKey = [url],
  // }: UseMutateOptions) => {
  //   return useMutation<T, Error, V>({
  //     mutationFn: async (data: V) => {
  //       const res = await api[method](url, data);
  //       return res.data;
  //     },
  //     onSuccess: () => {
  //       if (autoInvalidate && invalidateKey) {
  //         queryClient.invalidateQueries({ queryKey: invalidateKey });
  //       }
  //     },
  //   });
  // };

  return { useGet };
};
