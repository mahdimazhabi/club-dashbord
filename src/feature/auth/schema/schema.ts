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

export type TypeFormInputLogin = yup.InferType<typeof LoginPhoneSchema>;
export type TypeFormInputOtp = yup.InferType<typeof OtpSchema>;
export type TypeFormInputPassword = yup.InferType<typeof PasswordSchema>;
