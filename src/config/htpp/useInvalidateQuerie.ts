import { useQueryClient } from "@tanstack/react-query";

export const useInvalidateQuery = () => {
  const queryClient = useQueryClient();

  const invalidate = (queryKey: string) => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  };

  return { invalidate };
};
