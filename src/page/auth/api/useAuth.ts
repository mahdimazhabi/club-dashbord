/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { TypeFormInputLogin } from "../schema/schema";
import { useFetch } from "@/shared/hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { baseUrl } = useFetch();
  const navigate = useNavigate();

  // ===== Login Function =====
  const login = async (data: TypeFormInputLogin) => {
    try {
      await axios.post(`${baseUrl}/auth`, data, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      handleLoginError(error, data);
    }
  };

  // ===== Handle Login Error =====
  const handleLoginError = async (error: any, data: TypeFormInputLogin) => {
    const status = error?.response?.status;
    if (status === 403) {
      const authFlowToken = error.response.data.authFlowToken;
      const formData = new FormData();
      formData.append("identifier", data.identifier);
      formData.append("authFlowToken", authFlowToken);
      formData.append("usedIn", "loginRegister");

      await requestOtp(formData);

      navigate("/auth/otp", {
        replace: true,
        state: {
          identifier: data.identifier,
          usedIn: "loginRegister",
          authFlowToken,
        },
      });
    } else {
      console.error("Login failed:", error);
    }
  };

  // ===== Request OTP =====
  const requestOtp = async (data: FormData) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/request-token`, data);
      localStorage.setItem("authFlowToken", response.data.authFlowToken);
    } catch (error) {
      console.error("OTP request failed:", error);
    }
  };

  // ===== Verify Token =====
  const verifyToken = async (data: FormData) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/verify-token`, data);
      if (response.status === 200) {
        localStorage.removeItem("otp-expiry");
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  };

  return { login, verifyToken };
};
