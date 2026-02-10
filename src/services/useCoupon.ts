import { fetcher } from "@/action/fetcher";
import { useQuery } from "@tanstack/react-query";
import { CouponResponse } from "@/interface/coupon";
import { parseAsInteger, useQueryStates } from "nuqs";
const useCoupon = () => {
  const [query] = useQueryStates({
    page: parseAsInteger.withDefault(1),
  });

  const couponList = useQuery({
    queryKey: ["coupon-list", query.page],
    queryFn: async () => {
      const response = await fetcher<CouponResponse>({
        method: "get",
        endpoint: "/user/campaigns",
        contentType: "json",
        query: {
          page: query.page,
        },
      });
      if (response) {
        return response.data;
      }
    },
  });
  return { couponList };
};

export default useCoupon;
