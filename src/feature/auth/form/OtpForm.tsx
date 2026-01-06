import { Button } from "@/components/ui/button";
import { TypeFormInputOtp, OtpSchema } from "../schema/schema";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from "react-router-dom";
import { useAuth } from "../api/useAuth";
const OtpForm = () => {
  const { verifyToken, verifyLoading } = useAuth();
  const location = useLocation();

  const DataLocation = location.state;
  const authflow = localStorage.getItem("authFlowToken");

  const { handleSubmit, control } = useForm<TypeFormInputOtp>({
    resolver: yupResolver(OtpSchema),
  });

  const onsubmit: SubmitHandler<TypeFormInputOtp> = (form_data) => {
    const formData = new FormData();
    formData.append("identifier", DataLocation.identifier);
    formData.append("authFlowToken", authflow ?? "");
    formData.append("usedIn ", "loginRegister");
    formData.append("tokenCode", form_data.tokenCode);

    verifyToken(formData);
  };
  return (
    <form className=" space-y-7 my-5 " onSubmit={handleSubmit(onsubmit)}>
      <div>
        <h1 className=" text-center font-bold text-green-800 underline">
          کد تایید
        </h1>
        <p className="text-center text-xs font-semibold text-[#737373]">
          کد تایید خود را وارد کنید !
        </p>
      </div>
      <div>
        <Controller
          name="tokenCode"
          control={control}
          render={({ field }) => (
            <InputOTP
              maxLength={4}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              {...field}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        <p className="text-center text-xs  text-[#737373] mt-4">
          دریافت مجدد کد از طریق <span className="font-bold">پیامک</span> یا{" "}
          <span className="font-bold">تماس</span>
        </p>
      </div>

      <div className="flex justify-center my-4">
        <Button
          variant={"gradient"}
          type="submit"
          className="w-full"
          loading={verifyLoading}
          disabled={verifyLoading}
        >
          تایید کد
        </Button>
      </div>
    </form>
  );
};

export default OtpForm;
