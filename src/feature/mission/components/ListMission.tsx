import useMission from "@/services/useMission";
import NoImage from "@/assets/img/no-image.jpeg";
const ListMission = () => {
  const { listMission } = useMission();
  console.log(listMission.data);

  return (
    <section>
      <div className=" flex flex-col gap-2.5 space-y-3.5">
        {listMission.data?.data.map((item, index) => (
          <div
            key={index}
            className=" flex flex-1 bg-neutral-100 rounded-[5px] py-2.5 px-1.5"
          >
            <div className="flex gap-1.5 items-center">
              <img
                src={item?.image_url ? item.image_url : NoImage}
                alt="mission-logo"
                className="size-22.5 rounded-[5px]"
              />
              <div className="flex flex-col  gap-y-1.5">
                <span className="text-secondary-text font-semibold text-xs">
                  {item?.title}
                </span>
                <span className="text-[10px]">{item?.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListMission;
