import Header from "@/components/Header";
import ListsPlans from "@/page/plans/components/ListsPlans";
import Navbar from "@/components/Navbar";

const PlanLayout = () => {
  return (
    <section className=" py-[18px] space-y-4">
      <header className="px-4">
        <Header />
      </header>
      <main>
        <ListsPlans />
      </main>
      <footer className="px-4">
        <Navbar />
      </footer>
    </section>
  );
};

export default PlanLayout;
