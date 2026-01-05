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
    <form className="space-y-6 " onSubmit={handleSubmit(onsubmit)}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold  text-button">خوش آمدید!</h1>
        <p className="text-sm font-semibold text-secondary-text">
          با شماره تلفن خود وارد شوید !
        </p>
      </div>

      {/* Input Field */}
      <div className="space-y-2 ">
        <div className="relative">
          <input
            type="text"
            id="identifier"
            className="peer block w-full rounded-lg border border-[var(--color-text)] bg-white placeholder:text-xs pt-4 pb-2 px-3 text-sm text-[var(--color-primary-text)] placeholder:text-[var(--color-text)] appearance-none focus:border-[var(--color-text)] focus:outline-none focus:ring-0"
            placeholder=" "
            {...register("identifier")}
          />
          <label
            htmlFor="identifier"
            className="absolute start-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-[var(--color-text)] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2 peer-focus:text-[var(--color-text)] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            ایمیل یا شماره تلفن
          </label>
        </div>

        {/* Error Message */}
        <div className="min-h-[20px] flex items-start gap-1">
          {errors?.identifier && (
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-error)]"></span>
              <ErrorMessage message={errors.identifier?.message} />
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg py-3 px-4 text-white font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          style={{
            background:
              "linear-gradient(to right, var(--color-main-alt), var(--color-main))",
          }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            "ورود به حساب کاربری"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
