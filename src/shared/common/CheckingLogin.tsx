import { useDataFetching } from "../hook/useDataFetching";
import { Navigate } from "react-router-dom";

const CheckingLogin = ({ children }: { children: React.ReactNode }) => {
  const { token } = useDataFetching();

  if (!token || token === "undefined") {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default CheckingLogin;
