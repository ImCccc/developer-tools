import { Suspense } from 'react';
import { HashRouter, Route, RouteObject, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import routes from '@/config/routes';
import '@/styles/global.less';
const getRoute = (routes: RouteObject[]) => {
  return routes.map((options) => (
    <Route
      key={options.path}
      path={options.path}
      element={<Suspense fallback={'加载中...'}>{options.element}</Suspense>}
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
