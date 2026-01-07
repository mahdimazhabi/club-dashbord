import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  EditDataUserSchema,
  TypeEditDataUserForm,
} from "@/schema/EditDataUserSchema";
import useCustomers from "@/services/useCustomers";
import { useCustomersData } from "@/services/useCustomersData";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";

const EditDataUserForm = () => {
  const { DataCustomers } = useCustomersData();
  const { edit, EditPending } = useCustomers();
  const { register, handleSubmit, reset } = useForm<TypeEditDataUserForm>({
    resolver: yupResolver(EditDataUserSchema) as Resolver<TypeEditDataUserForm>,
  });
  useEffect(() => {
    if (DataCustomers) {
      reset({
        first_name: DataCustomers.data?.first_name ?? "",
        last_name: DataCustomers.data?.last_name ?? "",
        email: DataCustomers.data?.email ?? "",
        national_code: DataCustomers.data?.national_code ?? "",
        gender: (DataCustomers.data?.gender as "male" | "female") ?? undefined,
      });
    }
  }, [DataCustomers, reset]);

  const onsubmit: SubmitHandler<TypeEditDataUserForm> = (data) => {
    edit({ data: data, id: Number(DataCustomers?.data.id) });
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-x-3 gap-y-9 ">
        <Input {...register("first_name")} label="نام" />
        <Input {...register("last_name")} label="نام خانوادگی" />
        <Input {...register("national_code")} label="کد ملی" />
        <Input {...register("email")} label="ایمیل" />
        <Input {...register("gender")} label="جنسیت" />
      </div>
      <Button
        type="submit"
        className="bg-main text-white w-full hover:bg-main/80 cursor-pointer"
        disabled={EditPending}
        loading={EditPending}
      >
        ذخیره اطلاعات
      </Button>
    </form>
  );
};

export default EditDataUserForm;
