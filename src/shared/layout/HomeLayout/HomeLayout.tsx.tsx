import { Outlet } from "react-router-dom";
import Header from "@/shared/components/Header";
import Navbar from "@/shared/components/Navbar";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default HomeLayout;
