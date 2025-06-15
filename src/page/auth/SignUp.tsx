import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignUpSchema } from "@/shared/schema/AuthSchema";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/shared/api/useAuth";
const SignUp = () => {
  type FormInput = yup.InferType<typeof SignUpSchema>;
  const [loading, setLoading] = useState(false);
  const { register: CustomersRegister } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onsubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      setLoading(true);
      await CustomersRegister(data);
    } catch {
      console.log("error");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="shadow-none border-none w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">خوش آمدید</CardTitle>
          {/* <CardDescription>با حساب گوگل خود وارد شوید</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid gap-3">
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-3 rounded">
                  ثبت نام
                </span>
              </div>
              <div className="grid ">
                <div className="grid text-xs">
                  <Input
                    label="نام "
                    id="email"
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    {...register("name")}
                    error={errors.name}
                  />
                </div>
                <div className="grid text-xs">
                  <Input
                    label="شماره تلفن"
                    id="email"
                    type="text"
                    placeholder="شماره تلفن خود را وارد کنید"
                    {...register("phone")}
                    error={errors.phone}
                  />
                </div>
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
                حساب کاربری دارید ؟{" "}
                <Link
                  to={"/auth/login"}
                  className="underline underline-offset-4 text-spidar1"
                >
                  وارد شوید
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
