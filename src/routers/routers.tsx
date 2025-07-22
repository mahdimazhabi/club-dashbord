import { RouteObject } from "react-router-dom";
import HomeLayout from "@/shared/layout/home/HomeLayout";
import ProfileLayout from "@/shared/layout/profile/ProfileLayout";
import Inbox from "@/page/profile/Inbox";

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
];
