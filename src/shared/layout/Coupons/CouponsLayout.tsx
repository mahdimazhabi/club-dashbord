import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CouponsLists from "@/feature/Coupon/components/CouponsLists";

const CouponsLayout = () => {
  return (
    <section className="px-4 py-4.5 space-y-4">
      <header>
        <Header />
      </header>
      <main className="pb-32">
        <CouponsLists />
      </main>
      <footer>
        <Navbar />
      </footer>
    </section>
  );
};

export default CouponsLayout;
