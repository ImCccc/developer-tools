import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import { getNameByPath } from '@/config/menu';

import HeaderDropdown from './HeaderDropdown';

import styles from './index.module.less';

const Comp: React.FC = () => {
  const { pathname } = useLocation();
  const [mennName, setMenuName] = useState<string | undefined>('');

  useEffect(() => setMenuName(getNameByPath(pathname)), [pathname]);

  return (
    <div className={styles.content}>
      <div className={styles.c_header}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <span>{mennName}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <HeaderDropdown />
      </div>
      <Outlet />
    </div>
  );
};

export default Comp;
