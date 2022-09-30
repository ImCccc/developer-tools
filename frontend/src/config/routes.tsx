import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Main = lazy(() => import('@/pages/Main'));
const Test = lazy(() => import('@/pages/Test'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/test',
    element: <Test />,
  },
];

export default routes;
