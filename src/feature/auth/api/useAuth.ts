import { useMutation } from "@tanstack/react-query";
import api from "@/config/htpp/axios";
import { TypeFormInputLogin } from "../schema/schema";
import { useNavigate } from "react-router-dom";
import { useRegisterStore } from "../store/RegisterStore";
import { useLoginStore } from "../store/LoginStore";
import { toFormData } from "@/lib/toFormData";
import { ApiConfig } from "@/config/ApiConfig";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setRegisterData } = useRegisterStore();
  const { identifier } = useLoginStore();
  const { headersFormData } = ApiConfig();

  // ===== Request OTP =====
  const requestOtpMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await api.post("/auth/request-token", formData);
      return res.data;
    },
    onSuccess: (data, variables) => {
      localStorage.setItem("authFlowToken", data.authFlowToken);

      navigate("/auth/otp", {
        replace: true,
        state: {
          identifier: variables.get("identifier"),
          usedIn: "loginRegister",
          authFlowToken: variables.get("authFlowToken"),
        },
      });
    },
  });

  // ===== Login =====
  const loginMutation = useMutation({
    mutationFn: async (data: TypeFormInputLogin) => {
      const formData = toFormData(data);
      return await api.post("/auth", formData);
    },
    onSuccess: (data, variables) => {
      if (data.data.identifierType === "email") {
        navigate("/auth/password", { state: { data: data.data } });
      } else if (data.data.identifierType === "phone") {
        const authFlowToken = data.data.authFlowToken;

        const formData = toFormData({
          identifier: variables.identifier,
          authFlowToken,
          usedIn: "loginRegister",
        });

        requestOtpMutation.mutate(formData);
      }
    },
    onError: (error: any, variables) => {
      const status = error?.response?.status;
      if (status === 406 || status === 404) {
        const authFlowToken = error.response.data.authFlowToken;

        const formData = toFormData({
          identifier: variables.identifier,
          authFlowToken,
          usedIn: "loginRegister",
        });

        requestOtpMutation.mutate(formData);
      }
    },
  });

  // ===== Verify Token =====
  const verifyTokenMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await api.post("/auth/verify-token", formData);
    },
    onSuccess: (response) => {
      if (
        response.status === 200 &&
        response.data.nextStep !== "register_form"
      ) {
        localStorage.removeItem("otp-expiry");
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      } else if (response.data.nextStep === "register_form") {
        setRegisterData({
          identifier: identifier,
          authFlowToken: response.data.registerOtp,
        });
        navigate("/auth/register");
      }
    },
  });

  // ===== Password =====
  const { mutate: password, isPending: PasswordPending } = useMutation({
    mutationKey: ["password"],
    mutationFn: async (data: FormData) => {
      const response = await api.post("/auth/verify-password", data);
      return response.data;
    },
  });

  // ===== Register =====
  const { mutate: Register, isPending: RegisterPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: FormData) => {
      return await api.post("/auth/register", data, {
        headers: headersFormData,
      });
    },
    onSuccess: (response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      }
    },
  });

  return {
    login: loginMutation.mutate,
    loginLoading: loginMutation.isPending,
    verifyToken: verifyTokenMutation.mutate,
    verifyLoading: verifyTokenMutation.isPending,
    requestOtp: requestOtpMutation.mutate,
    requestOtpLoading: requestOtpMutation.isPending,
    password,
    PasswordPending,
    Register,
    RegisterPending,
  };
};
