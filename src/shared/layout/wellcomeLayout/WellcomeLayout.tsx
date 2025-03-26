import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const WellcomeLayout = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-40 to-primary-30 px-4 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold text-center mb-10">
          خوش آمدید
        </h1>
        <p className="text-neutral-20 ">
          با قفل دنیایی از مزایای انحصاری را باز کنید و دنیایی از امتیازات را در
          دستان خود کشف کنید
        </p>
      </div>
      <div className="flex flex-col w-full max-w-sm gap-4 mt-8">
        <Button
          className="w-full border-white"
          onClick={() => navigate("auth/login")}
        >
          ورود با اکانت
        </Button>
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => navigate("/home")}
        >
          ورود به عنوان مهمان
        </Button>
      </div>
    </section>
  );
};

export default WellcomeLayout;
