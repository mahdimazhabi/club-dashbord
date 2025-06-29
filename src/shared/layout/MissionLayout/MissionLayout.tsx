import Navbar from "@/shared/components/Navbar";
import HeaderMission from "@/shared/components/HeaderMission";
import CurrentMission from "@/page/mission/components/CurrentMission";
import JoinMissions from "@/page/mission/components/JoinMissions";

const MissionLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white max-w-[26rem] mx-auto">
      <HeaderMission />
      <main className="flex-1  bg-white rounded-t-xl px-4 py-6 pb-16">
        <div>
          <CurrentMission />
          <JoinMissions />
        </div>
      </main>
      <Navbar />
    </div>
  );
};

export default MissionLayout;
