const items = [
  {
    label: "设备管理",
    key: "device",
  },
  {
    label: "xsadsa是的",
    key: "/dd/fdf/sd",
  },
  {
    label: '菜单管理',
    key: '/routePath/xxxx',
  },
  {
    label: '菜单管理',
    key: '/routePath/xxxx',
  },
  /** 动态插入菜单的位置 */
];

export const getNameByPath = (path: string) => {
  for (let i = 0; i < items.length; i++) {
    const { key, label, children } = items[i];
    if (key === path) return label;
    if (children) {
      for (let j = 0; j < children.length; j++) {
        const { key, label } = children[j];
        if (key === path) return label;
      }
    }
  }
  return "";
};

export default items;
