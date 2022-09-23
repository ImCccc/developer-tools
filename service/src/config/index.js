let basePath = __dirname.split("node_modules")[0];

if (__dirname.indexOf("node_modules") === -1) {
  // 开发环境, 创建的页面在 test/src/page 下面
  basePath = `${__dirname.split("src")[0]}test\\`;
}

// 页面路径
const PAGE_PATH = `${basePath}src\\pages\\`;
// 菜单路径
const MENU_PATH = `${basePath}src\\config\\menu.tsx`;
// 路由配置路径
const ROUTE_PATH = `${basePath}src\\config\\routes.tsx`;

module.exports = {
  MENU_PATH,
  ROUTE_PATH,
  PAGE_PATH,
};
