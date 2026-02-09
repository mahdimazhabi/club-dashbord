import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { InboxListsResponse } from "@/interface/inbox";
const useInbox = () => {
  const ListInboxQuery = useQuery({
    queryKey: ["listInbox"],
    queryFn: async () => {
      const response = await fetcher<InboxListsResponse>({
        method: "get",
        endpoint: "inbox",
        contentType: "json",
      });
      if (response.status === 200) {
        return response.data;
      }
    },
  });
  return { ListInboxQuery };
};

export default useInbox;
