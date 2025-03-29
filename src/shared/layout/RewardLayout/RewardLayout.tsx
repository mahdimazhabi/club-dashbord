import Navbar from "@/shared/components/Navbar";
import HeaderReward from "@/shared/components/HeaderReward";
import Reward from "@/page/reward/components/Reward";
const RewardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderReward />
      <main className="flex-1 container mx-auto px-4 py-12 bg-white rounded-t-xl">
        <Reward />
      </main>
      <Navbar />
    </div>
  );
};

export default RewardLayout;
