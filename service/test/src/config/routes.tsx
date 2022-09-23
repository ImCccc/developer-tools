import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));

const routes: RouteObject[] = [
  {
    children: [
      { path: "application", element: <Application /> },
      { path: "/routePath/xxxx", element: <xxxxss /> },
      { path: "/routePath/xxxx", element: <xxxxss /> },
    ],
  },
];

export default routes;
