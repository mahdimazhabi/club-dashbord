import { RouteObject } from "react-router-dom";
import HomeLayout from "@/shared/layout/home/HomeLayout";

export const AllRouters: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
];
