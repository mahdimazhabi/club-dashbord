import { RouteObject } from "react-router-dom";
import HomeLayout from "@/shared/layout/home/HomeLayout";
import ProfileLayout from "@/shared/layout/profile/ProfileLayout";
import Inbox from "@/page/profile/Inbox";
import Support from "@/page/profile/Support";

export const AllRouters: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/profile/inbox",
    element: <Inbox />,
  },
  {
    path: "/profile/support",
    element: <Support />,
  },
];
