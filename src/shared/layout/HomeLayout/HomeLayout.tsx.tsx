import Header from "@/shared/components/Header";
import Navbar from "@/shared/components/Navbar";
import CardBunk from "@/page/home/components/CardBunk";
import { Mission } from "@/page/home/components/Mission";
import Point from "@/page/home/components/Point";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white   max-w-[26rem] mx-auto">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 bg-white rounded-t-xl overflow-auto max-h-[calc(100vh-120px)]">
        <CardBunk />
        <Mission />
        <Point />
      </main>
      <Navbar />
    </div>
  );
};

export default HomeLayout;
