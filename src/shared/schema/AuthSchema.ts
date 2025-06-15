import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("نام الزامی است"),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("پسورد الزامی است"),
  phone: yup.string().required("تلفن همراه الزامی است"),
});
export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("فرمت ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),
  password: yup.string().required("پسورد الزامی است"),
});
