import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  EditDataUserSchema,
  TypeEditDataUserForm,
} from "@/schema/EditDataUserSchema";
import useCustomers from "@/services/useCustomers";
import { useCustomersData } from "@/services/useCustomersData";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import UplodeProfile from "@/components/UplodeProfile";
import { toast } from "sonner";
import { serialize } from "object-to-formdata";
import Datepicker from "@/components/datepicker";
interface props {
  setOpen: (value: boolean) => void;
}

const EditDataUserForm = ({ setOpen }: props) => {
  const { DataCustomers } = useCustomersData();
  const { edit, EditPending } = useCustomers();
  const [genderValue, setGenderValue] = useState<"male" | "female" | undefined>(
    undefined,
  );
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<TypeEditDataUserForm>({
      resolver: yupResolver(
        EditDataUserSchema,
      ) as Resolver<TypeEditDataUserForm>,
    });

  useEffect(() => {
    if (DataCustomers) {
      reset({
        first_name: DataCustomers.data?.first_name ?? "",
        last_name: DataCustomers.data?.last_name ?? "",
        email: DataCustomers.data?.email ?? "",
        profile: {
          national_code: DataCustomers.data?.national_code?.toString() ?? "",
          // تبدیل string به Date
          birthdate: DataCustomers.data.profile?.birthdate
            ? new Date(DataCustomers.data.profile.birthdate)
            : undefined,
        },
        gender: (DataCustomers.data?.gender as "male" | "female") ?? undefined,
      });

      setGenderValue(
        (DataCustomers.data?.gender as "male" | "female") ?? undefined,
      );
    }
  }, [DataCustomers, reset]);

  const onsubmit: SubmitHandler<TypeEditDataUserForm> = (data) => {
    const fd = new FormData();
    fd.append("first_name", data.first_name);
    fd.append("last_name", data.last_name);
    if (data.email) {
      fd.append("email", data.email);
    }
    fd.append("gender", data.gender);
    if (data.profile.national_code) {
      fd.append("profile[national_code]", data.profile.national_code);
    }
    if (data.profile.birthdate) {
      fd.append("profile[birthdate]", data.profile.birthdate.toISOString());
    }

    edit(
      { data: fd, id: Number(DataCustomers?.data.id) },
      {
        onSuccess: () => {
          setOpen(false);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
      <div className="flex justify-center my-6">
        <UplodeProfile
          UrlImag={`${DataCustomers?.data.profile?.avatar}`}
          onChange={async (url) => {
            const Data = {
              profile: {
                ...DataCustomers?.data.profile,
                avatar: url ? url : "nothing",
              },
            };
            const formData = serialize(Data, {
              indices: true,
              booleansAsIntegers: true,
            });
            try {
              edit({ data: formData, id: Number(DataCustomers?.data.id) });
            } catch {
              toast.error("خطا در آپلود عکس:");
            }
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-9 ">
        <Input {...register("first_name")} label="نام" />
        <Input {...register("last_name")} label="نام خانوادگی" />
        <Input {...register("profile.national_code")} label="کد ملی" />
        <Input {...register("email")} label="ایمیل" />
        <div className="space-y-3">
          <RadioGroup
            value={genderValue}
            onValueChange={(value) => {
              setValue("gender", value as "male" | "female");
              setGenderValue(value as "male" | "female");
            }}
            className="grid grid-cols-2"
          >
            <div className="flex items-center justify-end gap-3 border border-description-text px-2.5 py-3.5 rounded-lg ">
              <Label htmlFor="female" className="cursor-pointer">
                خانم
                <RadioGroupItem value="female" id="female" />
              </Label>
            </div>
            <div className="flex items-center justify-end gap-3 border border-description-text px-2.5 py-3 rounded-lg ">
              <Label htmlFor="male" className="cursor-pointer">
                آقا
                <RadioGroupItem value="male" id="male" />
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Datepicker
          placeholder="تاریخ تولد"
          value={watch("profile.birthdate") ?? undefined}
          onChange={(value) => {
            setValue("profile.birthdate", value ? value.toDate() : undefined);
          }}
        />
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
