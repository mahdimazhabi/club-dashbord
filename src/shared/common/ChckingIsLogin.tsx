import { useDataFetching } from "../hook/useDataFetching";
import { Navigate } from "react-router-dom";

const ChckingIsLogin = ({ children }: { children: React.ReactNode }) => {
  const { token } = useDataFetching();

  if (token && token !== "undefined") {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

export default ChckingIsLogin;
