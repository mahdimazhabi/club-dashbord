import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { headers, baseUrl } = useFetch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/logout`,
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
