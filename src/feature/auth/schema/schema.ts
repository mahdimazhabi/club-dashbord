import * as yup from "yup";

export const LoginPhoneSchema = yup.object({
  identifier: yup
    .string()
    .required("شماره تلفن الزامی است")
    .matches(/^09\d{9}$/, "شماره تلفن نامعتبر است"),
});

export const OtpSchema = yup.object().shape({
  tokenCode: yup.string().typeError("").required(),
});

export type TypeFormInputLogin = yup.InferType<typeof LoginPhoneSchema>;
export type TypeFormInputOtp = yup.InferType<typeof OtpSchema>;
