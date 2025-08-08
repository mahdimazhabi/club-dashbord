import { Outlet } from "react-router-dom";
import MenAuthImg from "@/assets/img/MenAuth.png";
import Logo from "@/assets/logo/logo-wide-sepidar-Holding (1).png";
import "@/shared/coustom-style/index.css";

const AuthLayout = () => {
  return (
    <section>
      <header className="flex justify-center mt-16">
        <img src={Logo} alt="LogoSepidar" width={200} height={53} />
      </header>
      <main>
        <div className="mt-48 px-7">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm relative">
              <img
                src={MenAuthImg}
                alt="Men Auth"
                className="absolute bottom-15 -left-10 w-[180px] z-10 pointer-events-none"
              />
              <div className="w-full max-w-[422px] h-full relative rounded-2xl border-2 border border-transparent animate-border overflow-hidden [background:linear-gradient(45deg,#172035,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_#0ac974_86%,_#0ac974_90%,_#0ac974_94%,_theme(colors.slate.600/.48))_border-box]">
                {/* تصویر مرد در گوشه پایین-چپ */}

                {/* محتوای فرم */}
                <div className="relative  bg-muted bg-opacity-90 p-6">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AuthLayout;
