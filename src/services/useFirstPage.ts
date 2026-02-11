import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { FirstPageResponse } from "@/interface/firstpage";

const useFirstPage = () => {
  const firstPageData = useQuery({
    queryKey: ["first-page"],
    queryFn: async () => {
      const response = await fetcher<FirstPageResponse>({
        method: "get",
        endpoint: "user/first-page",
        contentType: "json",
      });
      if (response) {
        return response.data;
      }
    },
  });
  return { firstPageData };
};

export default useFirstPage;
