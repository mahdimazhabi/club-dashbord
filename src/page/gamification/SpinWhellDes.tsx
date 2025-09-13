import GameImg from "@/assets/img/_GetPaidStock.com_-68930f205258a-removebg-preview 3.png";
import SupportImg from "@/assets/img/icons8-goal-20 1.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SpinWhellDes = () => {
  return (
    <section>
      <div className="flex items-center gap-3">
        <img src={SupportImg} alt="goal icon" />
        <span className="font-bold text-spidar2">معرفی بازی گردونه شانس</span>
      </div>

      <div className="flex justify-center mt-2.5">
        <img src={GameImg} alt="گردونه شانس" />
      </div>

      <p className="mt-4 text-justify leading-7">
        گردونه شانس چیست؟ یک چرخ مجازی یا واقعی که به بخش‌های مختلف تقسیم
        می‌شود، هر بخش امتیاز یا جایزه‌ای (مثلاً تخفیف، محصول رایگان، امتیاز) در
        اختیار کاربر می‌گذارد. معمولاً کاربران برای دریافت چرخش، یک اقدام ساده
        مانند ثبت ایمیل یا شماره تماس انجام می‌دهند، یا اقدام خاصی مثل خرید یا
        معرفی دوست انجام می‌دهند.
        <br />
        <strong>رضایت فوری:</strong> کاربران بلافاصله نتیجه را می‌بینند و حتی
        جایزه کوچک هم حس برنده شدن ایجاد می‌کند (gratification).
        <br />
        <strong>هیجان و انتظار:</strong> حرکت گردونه، ایجاد اضطراب مثبت و هیجان
        را افزایش می‌دهد (anticipation).
      </p>
      <div className="flex justify-center mt-7">
        <Link to={"/Gamification/spin-whell"}>
          <Button variant={"secondary"} className=" cursor-pointer">
            شروع بازی
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default SpinWhellDes;
