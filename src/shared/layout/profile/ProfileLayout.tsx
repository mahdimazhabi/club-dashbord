import { ArrowLeftIcon } from "@/assets";
import { useNavigate } from "react-router-dom";
import InformationUser from "@/page/profile/InformationUser";
const ProfileLayout = () => {
  const navigate = useNavigate();

  return (
    <section>
      <header>
        <div className="flex justify-between px-4 py-5 bg-emerald-500/20  rounded-b-xl ">
          <h1 className="text-[#04864C]">حساب کاربری</h1>
          <ArrowLeftIcon
            className="text-[#04864C]  cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
      </header>
      <main className="p-4">
        <InformationUser />
      </main>
    </section>
  );
};

export default ProfileLayout;
