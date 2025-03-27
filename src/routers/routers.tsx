import { RouteObject } from "react-router-dom";
import AuthLayout from "@/shared/layout/AuthLayout/AuthLayout";
import { Navigate } from "react-router-dom";
import HomeLayout from "@/shared/layout/HomeLayout/HomeLayout.tsx";
import WellcomeLayout from "@/shared/layout/WellcomeLayout/WellcomeLayout.tsx";
import ProfileLayout from "@/shared/layout/ProfileLayout/ProfileLayout";
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
