import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { InboxListsResponse } from "@/interface/inbox";
const useInbox = () => {
  const ListInboxQuery = useQuery({
    queryKey: ["listInbox"],
    queryFn: async ({ queryKey }) => {
      const search = queryKey[1];
      const response = await fetcher<InboxListsResponse>({
        method: "get",
        endpoint: "inbox",
        contentType: "json",
        query: {
          search,
        },
      });
      if (response.status === 200) {
        return response.data;
      }
    },
  });
  return { ListInboxQuery };
};

export default useInbox;
