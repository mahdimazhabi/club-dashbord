import Navbar from "@/shared/components/Navbar";
import HeaderReward from "@/shared/components/HeaderReward";
import Reward from "@/page/reward/components/Reward";
const RewardLayout = () => {
  return (
    <div className="flex flex-col max-w-[26rem] mx-auto min-h-screen shadow-2xl">
      <HeaderReward />
      <main className="flex-1 container mx-auto px-4 py-12 bg-white rounded-t-xl overflow-auto max-h-[calc(100vh-150px)]">
        <Reward />
      </main>
      <Navbar />
    </div>
  );
};

export default RewardLayout;
