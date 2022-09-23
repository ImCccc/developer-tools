import Tip from '@/components/Tip';
import { Input } from 'antd';
import { updateObjectByString } from '@/utils/util';
import ConfigLayout from '@/components/ConfigLayout';

export type MenuRouteConfigProps = {
  menuName: string;
  folderName: string;
  routePath: string;
};

type RouteComponentProps = {
  menuRouteConfig: MenuRouteConfigProps;
  onChange: (menuRouteConfig: MenuRouteConfigProps) => void;
};

const Comp: React.FC<RouteComponentProps> = ({ menuRouteConfig, onChange }) => {
  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(menuRouteConfig, keys, value));
  };

  return (
    <ConfigLayout title="菜单路由配置">
      <div className="main-item flex-center">
        <div className="main-label">
          <Tip url="/imgs/10.jpg" />
          <span>文件夹名称</span>
        </div>
        <Input
          className="main-input"
          placeholder="文件夹名称"
          value={menuRouteConfig.folderName}
          onChange={(e) => update(`folderName`, e.target.value)}
        />
        <div className="main-label">
          <Tip url="/imgs/9.jpg" />
          <span>路由路径</span>
        </div>
        <Input
          className="main-input"
          placeholder="路由路径"
          value={menuRouteConfig.routePath}
          onChange={(e) => update(`routePath`, e.target.value)}
        />
        <div className="main-label">
          <Tip msg="显示在左侧的菜单名称" />
          <span>菜单名称</span>
        </div>
        <Input
          className="main-input"
          placeholder="菜单名称"
          value={menuRouteConfig.menuName}
          onChange={(e) => update(`menuName`, e.target.value)}
        />
      </div>
    </ConfigLayout>
  );
};

export default Comp;
