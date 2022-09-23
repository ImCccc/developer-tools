const Icon: React.FC<{ icon: string }> = ({ icon }) => (
  <span
    style={{
      fontSize: '2.6rem',
      marginRight: '1rem',
    }}
    className={`iconfont ${icon}`}
  ></span>
);

const items = [
  {
    label: '设备管理',
    key: 'device',
    icon: <Icon icon="icon_yingyong" />,
    children: [
      { label: '机器人管理', key: '/device/agv' },
      { label: '传感器管理', key: '/device/sensor' },
      { label: '升级管理', key: '/device/ota' },
    ],
  },
  {
    label: '日志管理',
    key: 'log',
    icon: <Icon icon="icon_shezhi" />,
    children: [{ label: '异常记录', key: '/log/error' }],
  },

  {
    label: '任务管理',
    key: 'task',
    icon: <Icon icon="icon_renwu" />,
    children: [
      { label: '任务列表', key: '/task/index' },
      { label: '任务记录', key: '/task/log' },
    ],
  },
  {
    label: '冰屏方案',
    key: '/layoutList',
    icon: <Icon icon="icon_jieruliucheng" />,
  },
  {
    label: '播报管理',
    key: '/play',
    icon: <Icon icon="icon_jieruliucheng" />,
  },
  {
    label: 'xsadsa是的',
    key: '/dd/fdf/sd',
  },
  {
    label: 'xsadsa是的',
    key: '/dd/fdf/sd',
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
  return '';
};

export default items;
