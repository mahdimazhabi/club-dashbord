import { Link, Outlet } from "react-router-dom";
import gradient from "@/assets/img/image-mesh-gradient (1).png";
import logo from "@/assets/logo/logo-wide-sepidar-Holding (1).png";
import { Button } from "@/components/ui/button";

const AuthLayout = () => {
  return (
    <section className="relative flex flex-col h-screen max-w-[26rem] mx-auto">
      {/* پس‌زمینه */}
      <img
        src={gradient}
        alt="Image"
        className="absolute inset-0 w-full h-full object-cover dark:brightness-[0.2] dark:grayscale z-0"
      />

      {/* لوگو وسط صفحه */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
        <img src={logo} alt="Logo" className="w-1/2 h-auto" />
      </div>

      {/* دکمه‌ها چسبیده به پایین */}
      <div className="relative z-10 px-4 pb-6 w-full flex flex-col gap-2">
        <Link to={"/auth/login"}>
          <Button variant="secondary" className="w-full">
            ورود
          </Button>
        </Link>
        <Button variant="default" className="w-full">
          عضویت
        </Button>
      </div>

      <Outlet />
    </section>
  );
};

export default AuthLayout;
