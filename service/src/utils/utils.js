const fs = require("fs");

const { MENU_PATH, ROUTE_PATH } = require("../config");

function updataRoute(routeName, path) {
  let fileText = fs.readFileSync(ROUTE_PATH, "utf8");

  let index = fileText.indexOf(`lazy(()`);
  let insterIndex = fileText.slice(index).indexOf(`const`) + index;

  let startText = fileText.slice(0, insterIndex);
  let endText = fileText.slice(insterIndex);
  let insterText = `const ${routeName} = lazy(() => import('@/pages/${routeName}'));`;

  // 添加了 const routeName = lazy(() => import('@/pages/routeName'));
  fileText = `${startText}${insterText}\n${endText}`;

  index = fileText.indexOf(`children`);
  const newText = fileText.slice(index);
  const endIndex = newText.indexOf(`{`, newText.indexOf(`{`) + 1);
  insterIndex = endIndex + index;
  startText = fileText.slice(0, insterIndex);
  endText = fileText.slice(insterIndex);
  insterText = `{ path: '${path}', element: <${routeName} /> },`;

  // 添加了 { path: 'path', element: <RouteName /> },
  fileText = `${startText}${insterText}\n      ${endText}`;

  fs.writeFileSync(ROUTE_PATH, fileText, "utf8");
}

function updataMenu(menuName, path) {
  let fileText = fs.readFileSync(MENU_PATH, "utf8");
  fileText = fileText.replace(
    "/** 动态插入菜单的位置 */",
    `{\n    label: '${menuName}',\n    key: '${path}',\n  },\n  /** 动态插入菜单的位置 */`
  );
  fs.writeFileSync(MENU_PATH, fileText, "utf8");
}

const writeFileByPath = function (filePath, data) {
  const exists = fs.existsSync(filePath);
  // if (exists) return "页面已经存在;";

  let dirCache = {};
  try {
    // 找不到文件，先新建
    if (!fs.existsSync(filePath)) {
      const arr = filePath.split("\\");
      let dir = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (!dirCache[dir] && !fs.existsSync(dir)) {
          dirCache[dir] = true;
          fs.mkdirSync(dir);
        }
        dir = dir + "/" + arr[i];
      }
    }
    fs.writeFileSync(filePath, data, "utf8");

    return true;
  } catch (error) {
    return "服务器错误";
  }
};

module.exports = {
  updataMenu,
  updataRoute,
  writeFileByPath,
};
