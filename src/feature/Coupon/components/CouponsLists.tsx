import DisImg from "@/assets/img/discountImg.png";
import { VectorIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import useCoupon from "@/services/useCoupon";
import NoImage from "@/assets/img/no-image.jpeg";
import { parseAsInteger, useQueryStates } from "nuqs";
import PaginationControl from "@/components/PaginationControl";

const CouponsLists = () => {
  const { couponList } = useCoupon();
  const [query, setQuery] = useQueryStates({
    page: parseAsInteger.withDefault(1),
  });

  return (
    <section>
      {/* Header */}
      <div>
        <div className="flex gap-2">
          <img src={DisImg} alt="dis" width={20} height={20} />
          <h1 className="text-spidar2 text-[20px] font-bold capitalize">
            کوپن‌ها
          </h1>
        </div>
        <p className="text-[#818181] font-normal text-[15px] capitalize">
          با کوپن‌های اختصاصی، خریدت رو هوشمندانه‌تر کن.
        </p>
      </div>

      {/* Coupons */}
      {couponList.data?.data.map((item) => (
        <div key={item.id} className="flex justify-center mt-5">
          {/* Card */}
          <div className="flex w-96 h-33.5 shrink-0">
            {/* Left ribbon */}
            <div className="relative w-11.25 rotate-180 shrink-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                <span className="text-white font-bold text-sm whitespace-nowrap px-1">
                  {item.title}
                </span>
              </div>
              <VectorIcon className="text-[#C47F18]" width={45} height={134} />
            </div>

            {/* Content */}
            <div className="bg-neutral-200 rounded flex-1">
              <div className="p-2 relative z-20 rounded-lg">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image || NoImage}
                    alt="plans"
                    className="rounded-lg w-32 h-20 object-cover shrink-0"
                  />

                  <div className="space-y-2 overflow-hidden">
                    <h1 className="text-[#04864C] font-bold text-sm capitalize line-clamp-1">
                      {item?.title}
                    </h1>

                    <p className="text-[#A7A7A7] text-xs font-semibold capitalize line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-2.5">
                  <Button
                    variant="link"
                    className="text-spidar2 font-bold no-underline hover:no-underline"
                  >
                    مشاهده جزئیات
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <PaginationControl
        currentPage={query.page}
        totalPages={Number(couponList.data?.total)}
        onPageChange={(page) => setQuery({ page })}
      />
    </section>
  );
};

export default CouponsLists;
