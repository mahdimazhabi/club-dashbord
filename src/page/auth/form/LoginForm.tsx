import { Button } from "@/components/ui/button";
import { TypeFormInputLogin } from "../schema/schema";
import { LoginPhoneSchema } from "../schema/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@/shared/common/ErrorMessage";
import { useState } from "react";
import { useAuth } from "../api/useAuth";
const LoginForm = () => {
  const { login } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormInputLogin>({ resolver: yupResolver(LoginPhoneSchema) });

  const onsubmit: SubmitHandler<TypeFormInputLogin> = async (data) => {
    try {
      setLoading(true);
      await login(data);
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className=" space-y-7 mt-5" onSubmit={handleSubmit(onsubmit)}>
      <div className="space-y-2.5">
        <h1 className=" text-center font-bold text-green-800 underline">
          خوش آمدید
        </h1>
        <p className="text-center text-xs font-semibold text-[#737373]">
          با شماره تلفن خود وارد شوید !
        </p>
      </div>
      <div className="z-10 my-12  ">
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="peer block w-full rounded-lg border border-[#818181] bg-transparent  placeholder:text-xs pt-4  p-2 text-sm text-gray-900 placeholder:text-[#818181] 
              appearance-none focus:border-[#818181] focus:outline-none focus:ring-0 dark:text-white"
            placeholder=" "
            {...register("identifier")}
          />

          <label
            className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-neutral-200 px-2 text-sm text-[#818181] duration-300 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
              peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-neutral-200 peer-focus:px-2 peer-focus:text-[#818181] 
              rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
          >
            شماره تلفن
          </label>
        </div>
        <div className="min-h-[20px]">
          {errors && <ErrorMessage message={errors.identifier?.message} />}
        </div>
        <div className="flex justify-center mt-7">
          <Button variant={"secondary"} className="w-full" loading={isLoading}>
            ورود به حساب کاربری
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
