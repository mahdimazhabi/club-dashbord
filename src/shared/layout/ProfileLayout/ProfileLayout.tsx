import Navbar from "@/shared/components/Navbar";
import HeaderProfile from "@/shared/components/HeaderProfile";
import MneuProfile from "@/page/profile/components/MneuProfile";
const ProfileLayout = () => {
  return (
    <div>
      <HeaderProfile />
      <main className="container mx-auto">
        <MneuProfile />
      </main>
      <Navbar />
    </div>
  );
};

export default ProfileLayout;
