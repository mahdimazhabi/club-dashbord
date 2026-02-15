import { TrackingIcon, SearchStatusIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import useTracking from "@/services/useTracking";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import getStatusOrder from "@/util/getStatusOrder";
import { fullPersianDate } from "@/lib/date";
import useTrackingStore from "@/store/useTrackingStore";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import TrackingSkeleton from "@/skeleton/TrackingSkeleton";
import { useQueryStates, parseAsString } from "nuqs";
const Tracking = () => {
  const navigate = useNavigate();
  const { TrackingListsQuery } = useTracking();
  const { setTracking } = useTrackingStore();
  const [query, setQuery] = useQueryStates({
    search: parseAsString.withDefault(""),
  });

  const trackingList = TrackingListsQuery.data?.data ?? [];

  return (
    <section>
      {/* Header همیشه نمایش داده شود */}
      <PageHeader title="پیگیری خرید" onBack={() => navigate(-1)} />

      <div className="px-4">
        <div className="flex gap-2 mt-6 items-center">
          <TrackingIcon className="w-5 h-5" />
          <h1 className="text-spidar2 text-[20px] font-bold">پیگیری خرید</h1>
        </div>

        <p className="text-[#818181] font-normal text-[15px]">
          می‌خوای بدونی سفارشت کجاست؟ محصولت رو جستجو کن!
        </p>
      </div>

      <div className="px-4 mt-4">
        <Input
          placeholder="شماره سفارش خود را وارد کنید ."
          icon={<SearchStatusIcon />}
          className="text-secondary-text border-[1.5px] border-black/15 shadow-xs font-semibold placeholder:font-sans"
          value={query.search}
          onChange={(e) => {
            setQuery({ search: e.target.value });
          }}
        />
      </div>

      <div className="px-4 mt-6 space-y-4">
        {TrackingListsQuery.isLoading ? (
          <TrackingSkeleton count_tracking={5} />
        ) : TrackingListsQuery.isError ? (
          <div className="px-4 mt-10 text-center text-sm text-red-500">
            خطا در دریافت اطلاعات
          </div>
        ) : trackingList.length === 0 ? (
          <div
            className="flex items-center justify-center text-center text-sm text-description-text 
                border border-black/10 rounded-lg py-6 px-4 bg-background shadow-md mt-10"
          >
            <span className="text-main font-bold"> سفارشی ثبت نشده است</span>
          </div>
        ) : (
          trackingList.map((item) => {
            const { label, color } = getStatusOrder(item.order_status);

            return (
              <div
                key={item.id}
                className="border border-black/10 rounded-[5px] py-2.5 px-2.75  shadow "
              >
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <div className="flex gap-2.5">
                      <span className="text-secondary-text font-bold text-sm">
                        سفارش
                      </span>
                      <span className="text-sm font-normal text-description-text">
                        #{item.id}
                      </span>
                    </div>

                    <Badge className={color}>{label}</Badge>
                  </div>

                  <Button
                    className="text-white rounded-full font-bold text-xs cursor-pointer "
                    size="sm"
                    onClick={() => {
                      setTracking(item);
                      navigate("/profile/tracking/detail");
                    }}
                    variant={"secondary"}
                  >
                    مشاهده فاکتور
                  </Button>
                </div>
                <ul className="space-y-2.5 mt-4 w-full flex flex-col ">
                  <li className="flex justify-between w-full">
                    <span className="text-secondary-text text-xs font-semibold">
                      کد پیگیری:
                    </span>
                    <span className="text-xs font-medium ">
                      {item.tracking_number}
                    </span>
                  </li>

                  <li className="flex justify-between w-full">
                    <span className="text-secondary-text text-xs font-semibold">
                      مبلغ:
                    </span>
                    <span className="text-xs font-medium ">
                      {item.total.toLocaleString()} تومان
                    </span>
                  </li>

                  <li className="flex justify-between w-full">
                    <span className="text-secondary-text text-xs font-semibold">
                      تاریخ ثبت:
                    </span>
                    <span className="text-xs font-medium ">
                      {fullPersianDate(item.created_at)}
                    </span>
                  </li>

                  <li className="flex justify-between w-full">
                    <span className="text-secondary-text text-xs font-semibold">
                      کدپستی:
                    </span>
                    <span className="text-xs font-medium ">
                      {item.shipping_address.zip}
                    </span>
                  </li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Tracking;
