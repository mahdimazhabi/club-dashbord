import { RouteObject } from "react-router-dom";
import AuthLayout from "@/shared/layout/AuthLayout/AuthLayout";
import { Navigate } from "react-router-dom";
import HomeLayout from "@/shared/layout/HomeLayout/HomeLayout.tsx";
import WelcomeLayout from "@/shared/components/Welcome";
import ProfileLayout from "@/shared/layout/ProfileLayout/ProfileLayout";
import AccountInformation from "@/page/profile/components/AccountInformation";
import RewardLayout from "@/shared/layout/RewardLayout/RewardLayout";
import MissionLayout from "@/shared/layout/MissionLayout/MissionLayout";
import SignUp from "@/page/auth/SignUp";
import Login from "@/page/auth/Login";
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
    element: <HomeLayout />,
  },
  {
    path: "profile",
    element: <ProfileLayout />,
  },
  {
    path: "profile/information",
    element: <AccountInformation />,
  },
  {
    path: "reward",
    element: <RewardLayout />,
  },
  {
    path: "mission",
    element: <MissionLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
];
