import * as yup from "yup";

export const LoginPhoneSchema = yup.object({
  identifier: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(/^09\d{9}$/, "شماره تلفن نامعتبر است"),
});

export const OtpSchema = yup.object().shape({
  tokenCode: yup.string().required(),
});

export const PasswordSchema = yup.object().shape({
  identifier: yup.string(),
  password: yup.string().required("پسورد الزامی است"),
  authFlowToken: yup.string(),
});

export const RegisterSchema = yup.object().shape({
  identifier: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(/^09\d{9}$/, "شماره تلفن نامعتبر است"),
  first_name: yup.string().required("نام الزامی است"),
  authFlowToken: yup.string(),
  last_name: yup.string(),
  gender: yup.string().oneOf(["male", "female"]),
});

export type TypeFormInputLogin = yup.InferType<typeof LoginPhoneSchema>;
export type TypeFormInputOtp = yup.InferType<typeof OtpSchema>;
export type TypeFormInputPassword = yup.InferType<typeof PasswordSchema>;
export type TypeFormInputRegister = yup.InferType<typeof RegisterSchema>;
