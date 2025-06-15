import { Input } from "@/components/ui/input";
import { SearchIcon, FilterIcon } from "@/assets";
import Img from "@/assets/img/Rectangle.png";
import { Button } from "@/components/ui/button";

const Reward = () => {
  const Data = [
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
    { title: "کوپن تخفیف 10 درصدی", point: "1.000" },
  ];
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-2">
        <Input
          icon={<SearchIcon />}
          placeholder="جستجو"
          className="rounded-2xl placeholder:text-xs w-full placeholder:text-neutral-40  text-xs"
        />
        <FilterIcon />
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        {Data.map((item, index) => (
          <div key={index} className=" shadow rounded-xl">
            <img
              src={Img}
              alt={"img"}
              className=" object-cover w-full rounded-t-xl"
            />
            <div className="p-2 ">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-4  ">
                  <span className="text-xs">{item.title}</span>
                  <span className="text-xs text-amber-500">
                    {item.point} امتیاز
                  </span>
                </div>
                <Button variant={"secondary"} className="h-7 text-xs mt-5">
                  خرید
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
