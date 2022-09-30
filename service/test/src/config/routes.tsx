import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout';

const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/404'));
const Test1 = lazy(() => import('@/pages/Test1'));
const Test2 = lazy(() => import('@/pages/Test2'));
const Test3 = lazy(() => import('@/pages/Test3'));

const routes: RouteObject[] = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Test2 /> },
      { path: 'test-1', element: <Test1 /> },
      { path: 'test-2', element: <Test2 /> },
      { path: 'test3', element: <Test3 /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
