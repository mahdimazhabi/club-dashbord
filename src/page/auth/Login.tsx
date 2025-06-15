import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginSchema } from "@/shared/schema/AuthSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/shared/api/useAuth";
const Login = () => {
  type IFormInput = yup.InferType<typeof LoginSchema>;
  const { Login } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(LoginSchema) });
  const onsubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true);
      await Login(data);
    } catch {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="shadow-none border-none w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">خوش آمدید</CardTitle>
          <CardDescription>با حساب گوگل خود وارد شوید</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid gap-6">
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-3 rounded">
                  ادامه با ایمیل
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid text-xs">
                  <Input
                    label="ایمیل"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    error={errors.email}
                  />
                </div>
                <div className="grid">
                  <div className="flex items-center">
                    <Link
                      to={"/"}
                      className="ml-auto text-xs underline-offset-4 mb-2 text-spidar1 hover:underline"
                    >
                      رمز عبور را فراموش کرده‌اید؟
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="رمزعبور خود را وارد کنید"
                    {...register("password")}
                    error={errors.password}
                  />
                </div>
                <Button type="submit" loading={loading} className="w-full">
                  ورود
                </Button>
              </div>
              <div className="text-center text-xs">
                حساب کاربری ندارید؟{" "}
                <Link
                  to={"/auth/signup"}
                  className="underline underline-offset-4 text-spidar1"
                >
                  ثبت‌نام کنید
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
