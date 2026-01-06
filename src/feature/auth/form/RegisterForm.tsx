import { useLocation } from "react-router-dom";

const RegisterForm = () => {
  const loacation = useLocation();
  const data = loacation.state?.data;
  console.log(data);

  return <div>RegisterForm</div>;
};

export default RegisterForm;
