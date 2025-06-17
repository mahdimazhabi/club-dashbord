import Header from "@/shared/components/Header";
import Navbar from "@/shared/components/Navbar";
import CardBunk from "@/page/store/components/CardBunk";
import { Mission } from "@/page/store/components/Mission";
import Point from "@/page/store/components/Point";
import Acceptors from "@/page/store/components/Acceptors";

const StoreLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white   max-w-[26rem] mx-auto">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 bg-white rounded-t-xl overflow-auto max-h-[calc(100vh-120px)]">
        <CardBunk />
        <Acceptors />
        <Mission />
        <Point />
      </main>
      <Navbar />
    </div>
  );
};

export default StoreLayout;
