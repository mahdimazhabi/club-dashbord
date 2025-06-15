import gradient from "@/assets/img/image-mesh-gradient (1).png";
import logo from "@/assets/logo/logo-wide-sepidar-Holding (1).png";

const WelcomeLayout = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* تصویر پس‌زمینه که کل صفحه رو پوشش میده */}
      <img
        src={gradient}
        alt="Image"
        className="absolute inset-0 w-full h-full object-cover dark:brightness-[0.2] dark:grayscale z-0"
      />

      {/* محتوای اصلی با لایه بالاتر */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <img src={logo} alt="Logo" className="w-1/2 h-auto" />
      </div>
    </section>
  );
};

export default WelcomeLayout;
