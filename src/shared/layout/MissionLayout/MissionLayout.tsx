import Navbar from "@/shared/components/Navbar";
import HeaderMission from "@/shared/components/HeaderMission";
import CurrentMission from "@/page/mission/components/CurrentMission";
const MissionLayout = () => {
  return (
    <div>
      <HeaderMission />
      <main className="flex-1 container mx-auto px-4 py-6 bg-white rounded-t-xl">
        <CurrentMission />
      </main>
      <Navbar />
    </div>
  );
};

export default MissionLayout;
