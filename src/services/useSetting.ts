import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { SettingRsponse } from "@/interface/setting";

const useSetting = () => {
  const setting = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await fetcher<SettingRsponse>({
        method: "get",
        endpoint: "settings",
        contentType: "json",
      });
      if (response.status === 200) {
        return response.data;
      }
    },
  });
  return { setting };
};

export default useSetting;
