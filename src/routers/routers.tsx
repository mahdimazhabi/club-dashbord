import { RouteObject } from "react-router-dom";
import AuthLayout from "@/shared/layout/AuthLayout/AuthLayout";
import { Navigate } from "react-router-dom";
import HomeLayout from "@/shared/layout/HomeLayout/HomeLayout.tsx";
import WellcomeLayout from "@/shared/layout/WellcomeLayout/WellcomeLayout.tsx";
import ProfileLayout from "@/shared/layout/ProfileLayout/ProfileLayout";
import AccountInformation from "@/page/profile/components/AccountInformation";
import RewardLayout from "@/shared/layout/RewardLayout/RewardLayout";
import MissionLayout from "@/shared/layout/MissionLayout/MissionLayout";
export const AllRouters: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/wellcome" replace />,
  },
  {
    path: "/wellcome",
    element: <WellcomeLayout />,
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
    children: [
      {
        path: "login",
        element: "",
      },
    ],
  },
];
