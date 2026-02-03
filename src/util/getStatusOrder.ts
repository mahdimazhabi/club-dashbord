type OrderStatus =
  | "order-pending"
  | "order-processing"
  | "order-completed"
  | "order-cancelled"
  | "order-refunded"
  | "order-failed";

type OrderStatusResult = {
  label: string;
  color: string; // tailwind / hex / css var
};

const getStatusOrder = (status: OrderStatus): OrderStatusResult => {
  switch (status) {
    case "order-pending":
      return {
        label: "در انتظار پرداخت",
        color: "text-yellow-600 bg-yellow-100",
      };

    case "order-processing":
      return {
        label: "در حال پردازش",
        color: "text-blue-600 bg-blue-100",
      };

    case "order-completed":
      return {
        label: "تکمیل شده",
        color: "text-green-600 bg-green-100",
      };

    case "order-cancelled":
      return {
        label: "لغو شده",
        color: "text-gray-600 bg-gray-100",
      };

    case "order-refunded":
      return {
        label: "بازپرداخت شده",
        color: "text-purple-600 bg-purple-100",
      };

    case "order-failed":
      return {
        label: "ناموفق",
        color: "text-red-600 bg-red-100",
      };

    default:
      return {
        label: status,
        color: "text-gray-500 bg-gray-100",
      };
  }
};

export default getStatusOrder;
