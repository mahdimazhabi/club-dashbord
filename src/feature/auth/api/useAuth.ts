import { useMutation } from "@tanstack/react-query";
import api from "@/config/htpp/axios";
import { TypeFormInputLogin } from "../schema/schema";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

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
      return await api.post("/auth", data, {
        headers: { "Content-Type": "application/json" },
      });
    },
    onSuccess: (data, variables) => {
      if (data.data.identifierType === "email") {
        navigate("/auth/password", {
          state: { data: data.data },
        });
      } else if (data.data.identifierType === "phone") {
        const authFlowToken = data.data.authFlowToken;

        const formData = new FormData();
        formData.append("identifier", variables.identifier);
        formData.append("authFlowToken", authFlowToken);
        formData.append("usedIn", "loginRegister");

        requestOtpMutation.mutate(formData);
      }
    },
    onError: (error: any, variables) => {
      const status = error?.response?.status;
      if (status === 406) {
        const authFlowToken = error.response.data.authFlowToken;
        const formData = new FormData();
        formData.append("identifier", variables.identifier);
        formData.append("authFlowToken", authFlowToken);
        formData.append("usedIn", "loginRegister");

        requestOtpMutation.mutate(formData);
      }
      if (status === 404) {
        navigate("/auth/register", {
          state: {
            identifier: variables,
            authFlowToken: error.response.data.authFlowToken,
          },
        });
      }
    },
  });

  // ===== Verify Token =====
  const verifyTokenMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await api.post("/auth/verify-token", formData);
    },
    onSuccess: (response) => {
      if (response.status === 200) {
        localStorage.removeItem("otp-expiry");
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      }
    },
  });

  // ===== password =====
  const { mutate: password, isPending: PasswordPending } = useMutation({
    mutationKey: ["password"],
    mutationFn: async (data: FormData) => {
      const response = await api.post("/auth/verify-password", data, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
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
  };
};
