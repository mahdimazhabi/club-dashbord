import Header from "@/components/Header";
import ListsMissions from "@/page/home/components/ListsMissions";
import BanerCarousel from "@/page/home/components/BanerCarousel";
import GameLists from "@/page/home/components/GameLists";
import Navbar from "@/components/Navbar";
const HomeLayout = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-[18px] space-y-4">
      <header>
        <Header />
      </header>
      <main className="space-y-4">
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
