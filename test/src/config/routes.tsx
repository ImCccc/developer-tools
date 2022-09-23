import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login"));
const xxxxss = lazy(() => import('@/pages/xxxxss'));
const xxxxss = lazy(() => import('@/pages/xxxxss'));
const NotFound = lazy(() => import("@/pages/404"));

const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <Main /> },
  {
    path: "/main/:id",
    element: <Layout />,
    children: [
      { path: "application", element: <Application /> },
      { path: '/routePath/xxxx', element: <xxxxss /> },
      { path: '/routePath/xxxx', element: <xxxxss /> },
      { path: "publish", element: <PublishApp /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
