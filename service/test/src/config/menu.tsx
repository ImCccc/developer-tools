const items = [
  {
    label: '测试菜单1',
    key: 'test-1',
    icon: 'icon_yingyong',
    children: [
      { label: '测试菜单1-1', key: '/test-1' },
      { label: '测试菜单1-2', key: '/test-2' },
    ],
  },
  {
    label: '测试菜单2',
    key: '/test3',
    icon: 'icon_jieruliucheng',
  },
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
  return '';
};

export default items;
