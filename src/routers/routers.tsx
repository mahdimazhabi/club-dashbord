import { RouteObject } from "react-router-dom";
import AuthLayout from "@/shared/layout/AuthLayout/AuthLayout";
import { Navigate } from "react-router-dom";
import StoreLayout from "@/shared/layout/StoreLayout/StoreLayout.tsx";
import WelcomeLayout from "@/shared/components/Welcome";
import ProfileLayout from "@/shared/layout/ProfileLayout/ProfileLayout";
import AccountInformation from "@/page/profile/components/AccountInformation";
import RewardLayout from "@/shared/layout/RewardLayout/RewardLayout";
import MissionLayout from "@/shared/layout/MissionLayout/MissionLayout";
import SignUp from "@/page/auth/SignUp";
import Login from "@/page/auth/Login";
import ChckingIsLogin from "@/shared/common/ChckingIsLogin";
import CheckingLogin from "@/shared/common/CheckingLogin";
export const AllRouters: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/welcome",
    element: <WelcomeLayout />,
  },
  {
    path: "/home",
    element: (
      <CheckingLogin>
        <StoreLayout />
      </CheckingLogin>
    ),
  },
  {
    path: "/profile",
    element: (
      <CheckingLogin>
        <ProfileLayout />
      </CheckingLogin>
    ),
  },
  {
    path: "/profile/information",
    element: (
      <CheckingLogin>
        <AccountInformation />
      </CheckingLogin>
    ),
  },
  {
    path: "/reward",
    element: (
      <CheckingLogin>
        <RewardLayout />
      </CheckingLogin>
    ),
  },
  {
    path: "/mission",
    element: (
      <CheckingLogin>
        <MissionLayout />
      </CheckingLogin>
    ),
  },
  {
    path: "/auth",
    element: (
      <ChckingIsLogin>
        <AuthLayout />
      </ChckingIsLogin>
    ),
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "auth/signup",
    element: <SignUp />,
  },
];
