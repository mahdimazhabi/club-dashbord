import Header from "@/shared/components/Header";
import Navbar from "@/shared/components/Navbar";
import CardBunk from "@/page/home/components/CardBunk";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6 bg-white rounded-t-xl  relative bottom-2.5 h-screen ">
          <CardBunk />
      </main>
      <Navbar />
    </div>
  );
};

export default HomeLayout;
