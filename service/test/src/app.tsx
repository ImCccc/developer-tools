import { Suspense } from 'react';
import { HashRouter, Route, RouteObject, Routes } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import Loading from '@/components/Loading';
import routes from '@/config/routes';

import { initFontSize } from './utils/util';

import '@/styles/global.less';

initFontSize();

const getRoute = (routes: RouteObject[]) => {
  return routes.map((options) => (
    <Route
      key={options.path}
      path={options.path}
      element={<Suspense fallback={<Loading />}>{options.element}</Suspense>}
    >
      {options.children && getRoute(options.children)}
    </Route>
  ));
};

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>{getRoute(routes)}</Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
