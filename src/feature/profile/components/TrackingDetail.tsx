import PageHeader from "@/components/PageHeader";
import Stepper from "@/components/Stepper";
import { fullPersianDate } from "@/lib/date";
import useTrackingStore from "@/store/useTrackingStore";
import { useNavigate } from "react-router-dom";

const TrackingDetail = () => {
  const { tracking } = useTrackingStore();
  const navigate = useNavigate();
  const steps = [
    { id: 1, title: "ثبت سفارش" },
    { id: 2, title: "پرداخت" },
    { id: 3, title: "آماده‌سازی" },
    { id: 4, title: "ارسال" },
  ];

  <Stepper steps={steps} currentStep={3} />;

  return (
    <div>
      <PageHeader title="پیگیری خرید" onBack={() => navigate(-1)} />
      <div className="border border-black/10 mt-6 px-3 py-5 mx-3 rounded-[5px] bg-background shadow">
        <h1 className=" font-bold text-base text-secondary-text">
          جزییات سفارش-{tracking?.tracking_number}
        </h1>
        <ul className="px-6 mt-4 space-y-2.5">
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
              کد پیگیری سفارش:
            </span>
            <span className="text-xs font-semibold text-description-text">
              {tracking?.tracking_number}
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
              تاریخ ثبت سفارش:
            </span>
            <span className="text-xs font-semibold text-description-text">
              {fullPersianDate(tracking?.created_at)}
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
              مبلغ:
            </span>
            <span className="text-xs font-semibold text-description-text">
              {tracking?.total.toLocaleString()} تومان
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-xs text-secondary-text font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
              کد پستی:
            </span>
            <span className="text-xs font-semibold text-description-text">
              {tracking?.shipping_address.zip}
            </span>
          </li>
        </ul>
        <div className="px-4.5 mt-10">
          <Stepper steps={steps} currentStep={3} />
        </div>
      </div>
    </div>
  );
};

export default TrackingDetail;
