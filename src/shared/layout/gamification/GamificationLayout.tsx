import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpinWhellDes from "@/feature/gamification/SpinWhellDes";
const GamificationLayout = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-[1280px] mx-auto  space-y-4">
      <header>
        <div className="flex justify-between px-4 py-5 bg-emerald-500/20  rounded-b-xl ">
          <h1 className="text-[#04864C]">بازی / گردونه شانس</h1>
          <ArrowLeftIcon
            className="text-[#04864C]  cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
      </header>
      <main className="space-y-10 px-4 ">
        <SpinWhellDes />
      </main>
    </section>
  );
};

export default GamificationLayout;
