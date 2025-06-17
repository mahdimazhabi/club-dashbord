import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import { useDataFetching } from "../hook/useDataFetching";
import { useNavigate } from "react-router-dom";
import { AddCustomersType, LoginType } from "../interface/AuthType";

export const useAuth = () => {
  const { baseUrl } = useDataFetching();
  const navigate = useNavigate();
  const register = async (data: AddCustomersType) => {
    const response = await axios.post(`${baseUrl}/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
    if (response) {
      localStorage.setItem("token", response.data.token);
      navigate("/home", { replace: true });
    }
  };
  const Login = async (UserData: LoginType) => {
    try {
      const response = await axios.post(`${baseUrl}/token`, UserData);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return { register, Login };
};
