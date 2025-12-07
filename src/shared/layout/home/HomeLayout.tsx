import Header from "@/components/Header";
import ListsMissions from "@/feature/home/components/ListsMissions";
import BanerCarousel from "@/feature/home/components/BanerCarousel";
import GameLists from "@/feature/home/components/GameLists";
import Navbar from "@/components/Navbar";
const HomeLayout = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-[18px] space-y-4">
      <header>
        <Header />
      </header>
      <main className="space-y-10">
        <BanerCarousel />
        <ListsMissions />
        <GameLists />
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  );
};

export default HomeLayout;
