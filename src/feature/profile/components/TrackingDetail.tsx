import PageHeader from "@/components/PageHeader";
import Stepper from "@/components/Stepper";
import { fullPersianDate } from "@/lib/date";
import useTrackingStore from "@/store/useTrackingStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const orderStatusMap: Record<string, string> = {
  "order-cancelled": "کنسل شده",
  "order-completed": "تکمیل شده",
  "order-failed": "لغو شده",
  "order-pending": "در انتظار تایید",
  "order-processing": "در حال پردازش",
  "order-refunded": "مسترد شده",
};

const statusOrder = [
  "order-pending",
  "order-processing",
  "order-completed",
  "order-cancelled",
  "order-failed",
  "order-refunded",
];

interface Step {
  id: number;
  title: string;
}

const TrackingDetail = () => {
  const { tracking } = useTrackingStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (tracking === null || tracking === undefined) {
      navigate("/profile/tracking");
    }
  }, [navigate, tracking]);

  if (!tracking) return null;

  const steps: Step[] = statusOrder.map((status, index) => ({
    id: index + 1,
    title: orderStatusMap[status],
  }));

  const currentStep = tracking.order_status
    ? statusOrder.indexOf(tracking.order_status) + 1
    : 0;

  return (
    <div>
      <PageHeader title="جزییات فاکتور" onBack={() => navigate(-1)} />
      <div className="border border-black/10 mt-6 px-3 py-5 mx-3 rounded-[5px] bg-background shadow">
        <h1 className="font-bold text-base text-secondary-text">
          جزییات سفارش-{tracking?.tracking_number ?? ""}
        </h1>

        <ul className="px-6 mt-4 space-y-2.5">
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1 h-1 rounded-full bg-secondary-text" />
              کد پیگیری سفارش:
            </span>
            <span className="text-xs font-semibold">
              {tracking?.tracking_number ?? ""}
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1 h-1 rounded-full bg-secondary-text" />
              تاریخ ثبت سفارش:
            </span>
            <span className="text-xs font-semibold">
              {tracking?.created_at
                ? fullPersianDate(tracking.created_at)
                : "-"}
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1 h-1 rounded-full bg-secondary-text" />
              مبلغ:
            </span>
            <span className="text-xs font-semibold">
              {tracking?.total ? tracking.total.toLocaleString() : "۰"} تومان
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1 h-1 rounded-full bg-secondary-text" />
              کد پستی:
            </span>
            <span className="text-xs font-semibold">
              {tracking?.shipping_address?.zip
                ? tracking.shipping_address.zip
                : "-"}
            </span>
          </li>
        </ul>

        <div className="px-2 mt-10">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        <hr className="mt-4 border border-dashed border-secondary-text" />

        <div className="flex flex-col gap-2.5 mt-2 mb-6">
          {tracking?.products?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded border"
            >
              <div className="flex items-center gap-1.5">
                <img
                  src={item.image}
                  alt="img-product"
                  className="w-11 h-14 rounded"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-secondary-text text-xs">
                    بارکد: {item.barcode}
                  </span>
                  <span className="font-semibold text-main-alt text-sm">
                    {item.name}
                  </span>
                  <span className="font-semibold text-main-alt text-xs">
                    {item.pivot?.order_quantity ?? 0} تعداد سفارش
                  </span>
                </div>
              </div>
              <div>
                <span className="text-spidar1 font-bold">
                  {item?.pivot?.unit_price?.toLocaleString() ?? "۰"}تومان
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3.5 bg-main-alt text-white text-xs font-bold rounded flex justify-between">
          <span>مبلغ کل سفارش</span>
          <span>
            {tracking.total.toLocaleString()}
            تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackingDetail;
