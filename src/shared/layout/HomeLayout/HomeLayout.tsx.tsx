import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400">
      <Outlet />
    </section>
  );
};

export default HomeLayout;
