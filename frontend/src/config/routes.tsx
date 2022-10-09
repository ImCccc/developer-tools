import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Main = lazy(() => import('@/pages/Main'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
];

export default routes;
