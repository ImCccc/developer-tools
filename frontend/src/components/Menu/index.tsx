import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './index.module.less';

const menuItems = [
  {
    label: '设备管理',
    key: '/device',
    children: [
      { label: '机器人管理', key: '/device/agv' },
      { label: '升级管理', key: '/device/ota' },
    ],
  },
  {
    label: '播报管理',
    key: '/play',
  },
];

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>();
  useEffect(() => setSelectedKeys([location.pathname]), [location.pathname]);

  return (
    <div className={styles.menuwrap}>
      <Menu
        mode="inline"
        items={menuItems}
        className={styles.menu}
        selectedKeys={selectedKeys}
        onClick={(e) => navigate(e.key)}
      />
    </div>
  );
};

export default App;
