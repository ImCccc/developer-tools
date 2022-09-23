/* eslint-disable @typescript-eslint/no-var-requires */
const {
  updataMenu,
  updataRoute,
  writeFileByPath,
} = require("../utils/utils.js");
const { getPageTsx } = require("../utils/createFile.js");
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const { PAGE_PATH } = require("../config");

router.post("/add-page/table", async (ctx) => {
  const params = ctx.request.body;

  if (!params) {
    ctx.response.body = { code: 10000, message: "请求参数错误" };
    return;
  }

  const menuRouteConfig = params.menuRouteConfig;

  const { routePath, folderName, menuName } = menuRouteConfig;

  if (!folderName || !routePath) {
    ctx.response.body = {
      code: 10000,
      message: "缺少参数 folderName 或者 routePath",
    };
    return;
  }

  const path = `${PAGE_PATH}${folderName}\\index.tsx`;
  const rs = writeFileByPath(path, getPageTsx(params));
  if (rs === true) {
    console.log("************新建页面文件成功！************:", path);
    ctx.response.body = { code: 200 };
  } else {
    ctx.response.body = { code: 10000, message: rs };
  }
  try {
    // 更新路由
    updataRoute(folderName, routePath);
    // 更新菜单
    if (menuName) updataMenu(menuName, routePath);
  } catch (error) {
    console.error(error);
  }
});

module.exports = { router };
