import Header from "@/components/Header";
import ListsPlans from "@/page/plans/components/ListsPlans";

const PlanLayout = () => {
  return (
    <section className="px-4 py-[18px] space-y-4">
      <header>
        <Header />
      </header>
      <main>
        <ListsPlans />
      </main>
      <footer></footer>
    </section>
  );
};

export default PlanLayout;
