/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/config/htpp/axios";
import { TypeFormInputLogin } from "../schema/schema";
import { useNavigate } from "react-router-dom";
import { fetcher } from "@/action/fetcher";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAuth = () => {
  const navigate = useNavigate();
  // ===== Login Function =====
  const { mutateAsync: login, isPending: LoginPending } = useMutation<
    any, // نوع پاسخ
    any, // نوع خطا
    TypeFormInputLogin // type داده
  >({
    mutationKey: ["login"],
    mutationFn: async (data: TypeFormInputLogin) => {
      return await fetcher({
        endpoint: `/auth`,
        method: "post",
        body: data,
      });
    },
    onSuccess: () => {
      toast.success("ورود با موفقیت انجام شد");
    },
    onError: async (error: any, variables: TypeFormInputLogin) => {
      const status = error?.response?.status;
      if (status === 406) {
        const authFlowToken = error.response.data.authFlowToken;

        const formData = new FormData();
        formData.append("identifier", variables.identifier);
        formData.append("authFlowToken", authFlowToken);
        formData.append("usedIn", "loginRegister");

        await requestOtp(formData);

        navigate("/auth/otp", {
          replace: true,
          state: {
            identifier: variables.identifier,
            usedIn: "loginRegister",
            authFlowToken,
          },
        });
      }
    },
  });

  const requestOtp = async (data: FormData) => {
    try {
      const response = await api.post(`/auth/request-token`, data);
      localStorage.setItem("authFlowToken", response.data.authFlowToken);
    } catch (error) {
      console.error("OTP request failed:", error);
    }
  };

  // ===== Verify Token =====
  const verifyToken = async (data: FormData) => {
    try {
      const response = await api.post(`/auth/verify-token`, data);
      if (response.status === 200) {
        localStorage.removeItem("otp-expiry");
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  };

  return { login, verifyToken, LoginPending };
};
