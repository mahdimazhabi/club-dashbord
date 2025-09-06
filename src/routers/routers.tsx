import { RouteObject } from "react-router-dom";
import HomeLayout from "@/shared/layout/home/HomeLayout";
import ProfileLayout from "@/shared/layout/profile/ProfileLayout";
import Inbox from "@/page/profile/components/Inbox";
import Support from "@/page/profile/components/Support";
import DiscountsLayout from "@/shared/layout/discounts/DiscountsLayout";
import PlanLayout from "@/shared/layout/plan/PlanLayout";
import GamificationLayout from "@/shared/layout/gamification/GamificationLayout";
import AuthLayout from "@/shared/layout/auth/AuthLayout";
import OtpForm from "@/page/auth/form/OtpForm";
import LoginForm from "@/page/auth/form/LoginForm";
import ProtectedRoute from "@/shared/common/ProtectedRoute";

export const AllRouters: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfileLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/inbox",
    element: (
      <ProtectedRoute>
        <Inbox />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/support",
    element: (
      <ProtectedRoute>
        <Support />
      </ProtectedRoute>
    ),
  },
  {
    path: "/discounts",
    element: (
      <ProtectedRoute>
        <DiscountsLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/plans",
    element: (
      <ProtectedRoute>
        <PlanLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Gamification",
    element: (
      <ProtectedRoute>
        <GamificationLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "otp",
        element: <OtpForm />,
      },
    ],
  },
];
