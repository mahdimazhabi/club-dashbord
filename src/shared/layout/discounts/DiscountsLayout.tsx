import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import DiscountsLists from "@/page/discounts/components/DiscountsLists";

const DiscountsLayout = () => {
  return (
    <section className="px-4 py-[18px] space-y-4">
      <header>
        <Header />
      </header>
      <main>
        <DiscountsLists />
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  );
};

export default DiscountsLayout;
