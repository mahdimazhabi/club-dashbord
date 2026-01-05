import { Outlet } from "react-router-dom";
import "@/shared/coustom-style/index.css";
import BackImg from "@/assets/img/image-mesh-gradient (1).png";
import Logo1 from "@/assets/img/logo-wide-sepidar-Holding 2.png";
import Logo2 from "@/assets/img/logo-wide-sepidar-Holding 3.png";

const AuthLayout = () => {
  return (
    <section className="relative h-dvh flex flex-col pt-20">
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <img
          src={BackImg}
          alt="background"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      <main className="  relative  mt-auto h-[90vh]   justify-center px-4 py-8 bg-background z-10 rounded-t-4xl ">
        <div className="flex flex-col justify-center ">
          <img src={Logo1} alt="Logo 1" className="w-14 h-14 mx-auto" />
          <img src={Logo2} alt="Logo 2" className="w-36 h-14 mx-auto" />
        </div>
        <div className="w-full max-w-md mt-11 ">
          <div className="rounded-2xl border-2  border-transparent animate-border overflow-hidden  [background:linear-gradient(white,white)_padding-box,conic-gradient(from_var(--border-angle),transparent_80%,_var(--color-main)_86%,_var(--color-main)_90%,_var(--color-main)_94%,_transparent)_border-box]">
            <div className="p-8">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <span className="text-description-text font-bold text-xs">
            طراحی شده توسط سپیدار
          </span>
        </div>
      </main>
    </section>
  );
};

export default AuthLayout;
