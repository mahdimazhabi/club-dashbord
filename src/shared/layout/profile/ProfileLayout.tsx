import { useNavigate } from "react-router-dom";
import InformationUser from "@/feature/profile/components/InformationUser";
import Menu from "@/feature/profile/components/Menu";
import PageHeader from "@/components/PageHeader";
const ProfileLayout = () => {
  const navigate = useNavigate();

  return (
    <section>
      <header>
        <PageHeader title="حساب کاربری" onBack={() => navigate(-1)} />
      </header>
      <main className="p-4 ">
        <InformationUser />
        <Menu />
      </main>
    </section>
  );
};

export default ProfileLayout;
