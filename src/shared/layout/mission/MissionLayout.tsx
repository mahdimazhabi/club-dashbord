import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ListMission from "@/feature/mission/components/ListMission";

const MissionLayout = () => {
  return (
    <section className="px-4 py-4.5 space-y-4">
      <header>
        <Header />
      </header>
      <main className="pb-32">
        <ListMission />
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  );
};

export default MissionLayout;
