import { useNavigate } from "react-router-dom";
import SupportImg from "@/assets/img/supportImg.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/PageHeader";

const Support = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader onBack={() => navigate(-1)} title="درخواست پشتیبانی" />
      <div className="mt-6 px-4">
        <div className="flex items-center gap-3">
          <img src={SupportImg} alt="img" width={20} height={20} />
          <h1 className="text-[20px] font-bold capitalize text-spidar2">
            سوالات متداول کاربران
          </h1>
        </div>
        <p className="text-[#818181] font-normal capitalize mt-1.5 text-[15px]">
          سوالی داری؟ اول اینجا یه نگاهی بنداز، شاید جوابش همین‌جا باشه!
        </p>
      </div>
      <div className="px-4 mt-5">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              چگونه از طرح تخفیفی استفاده کنم ؟
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                برای استفاده از طرح تخفیفی، ابتدا وارد حساب کاربری خود شوید. در
                صورتی که حساب ندارید، یک حساب جدید ایجاد کنید.
              </p>
              <p>
                سپس محصول یا خدمات مورد نظر خود را به سبد خرید اضافه کرده و در
                مرحله‌ی پرداخت، کد تخفیف را در بخش مربوطه وارد کنید.
              </p>
              <p>
                در صورت معتبر بودن کد، تخفیف به صورت خودکار از مبلغ نهایی کسر
                خواهد شد. توجه داشته باشید که هر کد تخفیف ممکن است شرایط خاصی
                داشته باشد که در توضیحات آن درج شده است.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Support;
