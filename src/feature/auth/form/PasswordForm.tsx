import { Input } from "@/components/ui/input";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { PasswordSchema, TypeFormInputPassword } from "../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../api/useAuth";
const PasswordForm = () => {
  const { password, PasswordPending } = useAuth();
  const { register, handleSubmit, setValue } = useForm<TypeFormInputPassword>({
    resolver: yupResolver(PasswordSchema) as Resolver<TypeFormInputPassword>,
  });
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    setValue("authFlowToken", data.authFlowToken);
    setValue("identifier", data.identifierType);
  }, [data.authFlowToken, data.identifier, data.identifierType, setValue]);

  const onsubmit: SubmitHandler<TypeFormInputPassword> = (formData) => {
    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value as string);
    });

    password(fd);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Input {...register("password")} type="password" label="رمز عبور" />
      <Button
        disabled={PasswordPending}
        loading={PasswordPending}
        variant={"gradient"}
      >
        ورود
      </Button>
    </form>
  );
};

export default PasswordForm;
