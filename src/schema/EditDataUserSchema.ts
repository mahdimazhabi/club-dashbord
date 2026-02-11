import * as yup from "yup";

export const EditDataUserSchema = yup.object().shape({
  first_name: yup.string().required("نام الزامی است"),
  last_name: yup.string().required("نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل معتبر نیست"),
  profile: yup.object().shape({
    national_code: yup.string(),
    birthdate: yup.date(),
    avatar: yup.string().nullable(),
  }),
  gender: yup
    .string()
    .oneOf(["male", "female"], "جنسیت معتبر نیست")
    .required("جنسیت الزامی است"),
});

export type TypeEditDataUserForm = yup.InferType<typeof EditDataUserSchema>;
