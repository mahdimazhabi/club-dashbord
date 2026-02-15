import Header from "@/components/Header";
import BanerCarousel from "@/feature/home/components/BanerCarousel";
import Navbar from "@/components/Navbar";
import Coupons from "@/feature/home/components/Coupons";
import Missions from "@/feature/home/components/Missions";
import Gamification from "@/feature/home/components/Gamification";
const HomeLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4.5 space-y-4">
      <header>
        <Header />
      </header>
      <main className="space-y-10 pb-32">
        <BanerCarousel />
        <Missions />
        <Gamification />
        <Coupons />
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  );
};

export default HomeLayout;
