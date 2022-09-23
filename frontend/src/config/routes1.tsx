import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout';

const Login = lazy(() => import('@/pages/Login'));
const xxxxss = lazy(() => import('@/pages/xxxxss'));
const NotFound = lazy(() => import('@/pages/404'));

const routes: RouteObject[] = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <DeviceAgv /> },
      { path: '/routePath/xxxx', element: <xxxxss /> },
      { path: 'device/agv', element: <DeviceAgv /> },
      { path: 'device/sensor', element: <DeviceSensor /> },
      { path: 'device/ota', element: <DeviceOta /> },
      { path: 'log/error', element: <LogError /> },
      { path: 'play', element: <Play /> },
      { path: 'task/index', element: <Task /> },
      { path: 'task/log', element: <LogTask /> },
      { path: 'LayoutList', element: <LayoutList /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
