import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import menuItems from '@/config/menu';
import styles from './index.module.less';

const MenuItems = menuItems.map((item) => {
  if (item.icon)
    item.icon = (
      <span
        style={{ fontSize: '2.6rem', marginRight: '1rem' }}
        className={`iconfont ${item.icon}`}
      ></span>
    ) as any;
  return item;
});

const App: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const onClick: MenuProps['onClick'] = (e) => navigate(e.key);

  useEffect(() => {
    setDefaultSelectedKeys([pathname]);
  }, [pathname]);

  const openKeys = useMemo(() => [pathname.split('/')[1]], [pathname]);

  return (
    <div className={styles.menuwrap}>
      <div onClick={() => navigate('/')} className={styles.m_title}>
        测试项目
      </div>
      <Menu
        mode="inline"
        theme="dark"
        onClick={onClick}
        items={MenuItems}
        defaultOpenKeys={openKeys}
        className={styles.menu}
        selectedKeys={defaultSelectedKeys}
      />
    </div>
  );
};

export default App;
