import { RouteObject } from "react-router-dom";
import HomeLayout from "@/layout/home/HomeLayout";
import ProfileLayout from "@/layout/profile/ProfileLayout";
import Inbox from "@/feature/profile/components/Inbox";
import Support from "@/feature/profile/components/Support";
import DiscountsLayout from "@/layout/discounts/DiscountsLayout";

import GamificationLayout from "@/layout/gamification/GamificationLayout";
import AuthLayout from "@/layout/auth/AuthLayout";
import OtpForm from "@/feature/auth/form/OtpForm";
import LoginForm from "@/feature/auth/form/LoginForm";
import GamificationWheel from "@/feature/gamification/GamificationWhell";
import PasswordForm from "@/feature/auth/form/PasswordForm";
import RegisterForm from "@/feature/auth/form/RegisterForm";
import Tracking from "@/feature/profile/components/Tracking";
import TrackingDetail from "@/feature/profile/components/TrackingDetail";
import InboxDetail from "@/feature/profile/components/InboxDetail";
import MissionLayout from "@/layout/mission/MissionLayout";
import MissionDetail from "@/feature/mission/components/MissionDetail";
import CouponsLayout from "@/layout/Coupons/CouponsLayout";
import ProtectedRoute from "@/middleware/ProtectedRoute";
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
    path: "/coupon",
    element: (
      <ProtectedRoute>
        <CouponsLayout />
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
    path: "mission/detail/:id",
    element: (
      <ProtectedRoute>
        <MissionDetail />
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
