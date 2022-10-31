import Tip from '@/components/Tip';
import { Input, Radio } from 'antd';
import { updateObjectByString } from '@/utils/util';
import ConfigLayout from '@/components/ConfigLayout';

export type TableConfigProps = {
  hasTableRef: boolean;
  serviceName: string;
  servicePath?: string;
};

const useRefList = [
  { label: '需要', value: true },
  { label: '不要', value: false },
];

type TableProps = {
  tableConfig: TableConfigProps;
  onChange: (tableConfig: TableConfigProps) => void;
};

const Comp: React.FC<TableProps> = ({ tableConfig, onChange }) => {
  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(tableConfig, keys, value));
  };

  return (
    <ConfigLayout title="table其他配置">
      <div className="main-item flex-center">
        <div className="main-label">
          <Tip url="/imgs/4.png" />
          接口名称:
        </div>
        <Input
          className="main-input"
          placeholder="接口名称"
          value={tableConfig.serviceName}
          onChange={(e) => update(`serviceName`, e.target.value)}
        />
        <div className="main-label">接口路径:</div>
        <Input
          className="main-input"
          placeholder="接口路径"
          value={tableConfig.servicePath}
          onChange={(e) => update(`servicePath`, e.target.value)}
        />
        <div className="main-label">
          <Tip url="/imgs/2.png" />
          <span>table实例:</span>
        </div>
        <Radio.Group
          options={useRefList}
          value={tableConfig.hasTableRef}
          onChange={(e) => update(`hasTableRef`, e.target.value)}
        />
      </div>
    </ConfigLayout>
  );
};

export default Comp;
