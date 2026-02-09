import { RouteObject } from "react-router-dom";
import HomeLayout from "@/shared/layout/home/HomeLayout";
import ProfileLayout from "@/shared/layout/profile/ProfileLayout";
import Inbox from "@/feature/profile/components/Inbox";
import Support from "@/feature/profile/components/Support";
import DiscountsLayout from "@/shared/layout/discounts/DiscountsLayout";
import PlanLayout from "@/shared/layout/plan/PlanLayout";
import GamificationLayout from "@/shared/layout/gamification/GamificationLayout";
import AuthLayout from "@/shared/layout/auth/AuthLayout";
import OtpForm from "@/feature/auth/form/OtpForm";
import LoginForm from "@/feature/auth/form/LoginForm";
import ProtectedRoute from "@/shared/common/ProtectedRoute";
import GamificationWheel from "@/feature/gamification/GamificationWhell";
import PasswordForm from "@/feature/auth/form/PasswordForm";
import RegisterForm from "@/feature/auth/form/RegisterForm";
import Tracking from "@/feature/profile/components/Tracking";
import TrackingDetail from "@/feature/profile/components/TrackingDetail";
import InboxDetail from "@/feature/profile/components/InboxDetail";
import MissionLayout from "@/shared/layout/mission/MissionLayout";
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
    path: "/profile/inbox/:id",
    element: (
      <ProtectedRoute>
        <InboxDetail />
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
    path: "/profile/tracking",
    element: (
      <ProtectedRoute>
        <Tracking />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile/tracking/detail",
    element: (
      <ProtectedRoute>
        <TrackingDetail />
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
    path: "/mission",
    element: (
      <ProtectedRoute>
        <MissionLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Gamification/spin-whell",
    element: (
      <ProtectedRoute>
        <GamificationWheel />
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
      {
        path: "password",
        element: <PasswordForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
];
