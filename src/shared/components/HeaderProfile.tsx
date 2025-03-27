import profile from "@/assets/img/avatar.png";
import { PointsIcon } from "@/assets";
import { TierIcon } from "@/assets";
const HeaderProfile = () => {
  return (
    <header className="w-full">
      <div className="bg-gradient-to-br from-primary-50 via-primary-40 to-primary-30 ">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h1 className="text-white">مهسا رحیمی</h1>
              <span className="text-white/80 text-sm">09152898703</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <div className="flex items-center gap-2 ">
          <PointsIcon className="w-12 h-12" />
          <div>
            <span className="block text-xs text-yellow-500 font-bold">
              1.200
            </span>
            <span className="text-xs text-neutral-50 font-semibold">
              امتیاز
            </span>
          </div>
        </div>

        <hr className="h-10 flex w-[2px]  rounded-2xl  bg-neutral-20 border-none" />
        <div className="flex items-center gap-2">
          <TierIcon className="w-10 h-10" />
          <div>
            <span className="block text-xs text-yellow-500 font-bold">
              طلایی
            </span>
            <span className="text-xs text-neutral-50 font-semibold">عضویت</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
