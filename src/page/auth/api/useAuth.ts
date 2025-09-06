import axios from "axios";
import { TypeFormInputLogin } from "../schema/schema";
import { useFetch } from "@/shared/hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { baseUrl } = useFetch();
  const navigate = useNavigate();
  const login = async (data: TypeFormInputLogin) => {
    try {
      await axios.post(`${baseUrl}/auth`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (erorr: any) {
      const status = erorr?.response?.status;
      if (status === 403) {
        const formdata = new FormData();
        formdata.append("identifier", data.identifier);
        formdata.append("authFlowToken", erorr.response.data.authFlowToken);
        formdata.append("usedIn", "loginRegister");

        await otp(formdata);
        navigate("/auth/otp", {
          replace: true,
          state: {
            identifier: data.identifier,
            usedIn: "loginRegister",
            authFlowToken: erorr.response.data.authFlowToken,
          },
        });
      }
    }
  };

  const otp = async (data: FormData) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/request-token`, data);

      localStorage.setItem("authFlowToken", response.data.authFlowToken);
    } catch {
      // toast.error()
    }
  };

  const verifytoken = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://api.mirashjacket.ir/auth/verify-token",
        data
      );
      if (response.status === 200) {
        localStorage.removeItem("otp-expiry");
        localStorage.setItem("token", response.data.token);

        navigate("/", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { login, verifytoken };
};
