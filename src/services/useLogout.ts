import { ApiConfig } from "@/config/ApiConfig";
import api from "@/config/htpp/axios";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { headers } = ApiConfig();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await api.post(
        `/logout`,
        {},
        {
          headers: headers,
        }
      );
      if (response) {
        localStorage.removeItem("token");
        navigate("/auth/login", { replace: true });
      }
    } catch {
      console.log("errpr");
    }
  };
  return { logout };
};
