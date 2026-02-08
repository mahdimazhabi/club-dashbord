import { TypeFormInputLogin } from "../schema/schema";
import { LoginPhoneSchema } from "../schema/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../api/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginStore } from "../store/LoginStore";
const LoginForm = () => {
  const { login, loginLoading } = useAuth();
  const { setIndentifier } = useLoginStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormInputLogin>({ resolver: yupResolver(LoginPhoneSchema) });

  const onsubmit: SubmitHandler<TypeFormInputLogin> = (data) => {
    setIndentifier(data.identifier);
    login(data);
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold  text-main">خوش آمدید!</h1>
        <p className="text-sm font-semibold text-secondary-text">
          با شماره تلفن خود وارد شوید !
        </p>
      </div>
      <div className="space-y-2 mt-10">
        <Input
          id="identifier"
          inputMode="numeric"
          label="شماره تلفن"
          {...register("identifier")}
          error={errors.identifier}
        />
      </div>
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full"
          variant="gradient"
          loading={loginLoading}
          disabled={loginLoading}
        >
          ورود به حساب کاربری
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
