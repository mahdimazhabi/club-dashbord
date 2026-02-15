import { useNavigate } from "react-router-dom";
import SpinWhellDes from "@/feature/gamification/SpinWhellDes";
import PageHeader from "@/components/PageHeader";
const GamificationLayout = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto  space-y-4">
      <PageHeader onBack={() => navigate(-1)} title="بازی / گردونه شانس" />
      <div className="space-y-10 px-4 ">
        <SpinWhellDes />
      </div>
    </section>
  );
};

export default GamificationLayout;
