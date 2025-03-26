import { Outlet } from "react-router-dom";
import Header from "@/shared/components/Header";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default HomeLayout;
