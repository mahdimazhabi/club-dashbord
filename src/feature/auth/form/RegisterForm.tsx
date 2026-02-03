import { TypeFormInputRegister, RegisterSchema } from "../schema/schema";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/ui/input";
import { useRegisterStore } from "../store/RegisterStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../api/useAuth";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TypeFormInputRegister>({
    resolver: yupResolver(RegisterSchema) as Resolver<TypeFormInputRegister>,
    defaultValues: {
      gender: "male",
    },
  });
  const { identifier, authFlowToken } = useRegisterStore((state) => state);
  const { Register, RegisterPending } = useAuth();
  useEffect(() => {
    if (identifier) {
      setValue("identifier", identifier);
    }
    if (authFlowToken) {
      setValue("authFlowToken", authFlowToken);
    }
  }, [identifier, authFlowToken, setValue]);

  const onsubmit: SubmitHandler<TypeFormInputRegister> = (data) => {
    const formdata = new FormData();
    formdata.append("identifier", data.identifier);
    if (data.authFlowToken) {
      formdata.append("authFlowToken", data.authFlowToken);
    }
    formdata.append("first_name", data.first_name);
    if (data.last_name) {
      formdata.append("last_name", data.last_name);
    }
    if (data.gender) {
      formdata.append("gender", data.gender);
    }
    console.log(data);

    Register(formdata);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold  text-button">افزودن حساب کاربری</h1>
        <p className="text-sm font-semibold text-secondary-text">
          لطفا اطلاعات خود را وارد کنید
        </p>
      </div>
      <div className="space-y-8 mt-9">
        <Input
          label="نام"
          {...register("first_name")}
          error={errors.first_name}
        />
        <Input
          label="نام خانوادگی"
          {...register("last_name")}
          error={errors.last_name}
        />
      </div>
      <div className="mt-8">
        <Button
          type="submit"
          variant={"gradient"}
          disabled={RegisterPending}
          loading={RegisterPending}
        >
          ثبت نام
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
