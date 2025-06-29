import Navbar from "@/shared/components/Navbar";
import HeaderProfile from "@/shared/components/HeaderProfile";
import MenuProfile from "@/page/profile/components/MneuProfile";
const ProfileLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white max-w-[26rem] mx-auto">
      <HeaderProfile />
      <main className="container  mx-auto">
        <MenuProfile />
      </main>
      <Navbar />
    </div>
  );
};

export default ProfileLayout;
