import Header from "@/shared/components/Header";
import Navbar from "@/shared/components/Navbar";
import CardBunk from "@/page/home/components/CardBunk";
import { Mission } from "@/page/home/components/Mission";
import Point from "@/page/home/components/Point";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6 bg-white rounded-t-xl  relative bottom-2.5 h-screen ">
        <CardBunk />
        <Mission />
        <Point />
      </main>
      <Navbar />
    </div>
  );
};

export default HomeLayout;
