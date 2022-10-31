import { Input, Radio, Select } from 'antd';
import DeleteButton from './DeleteButton';
import { updateObjectByString } from '@/utils/util';
import ConfigLayout from './ConfigLayout';
import TypeToList from './TypeToList';
import ButtonList from './ButtonList';
import AddButton from './AddButton';
import Tip from './Tip';

export type ColumnsProps = {
  title: string;
  dataIndex: string;
  type?: FieldType;
  width?: number;
  timeFormat?: 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD';
  buttons?: { label: string }[];
};

export type FieldType = 'render' | 'date' | 'oper' | 'text';

export type ColumnsConfigProps = {
  columns: ColumnsProps[];
  columnsTypes: string;
};

type TableColumnsProps = {
  columnsConfig: ColumnsConfigProps;
  onChange: (columnsConfig: ColumnsConfigProps) => void;
};

const defaultValue: ColumnsProps = {
  title: '',
  dataIndex: '',
};

const fieldsType: { value: FieldType; label: string }[] = [
  { value: 'text', label: '文本' },
  { value: 'date', label: '日期' },
  { value: 'oper', label: '操作' },
  { value: 'render', label: '自定义' },
];

const timeFormatList = [
  { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
  { label: 'YYYY-MM-DD HH:mm:ss', value: 'YYYY-MM-DD HH:mm:ss' },
];

const Comp: React.FC<TableColumnsProps> = ({ onChange, columnsConfig }) => {
  const { columns, columnsTypes } = columnsConfig;

  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(columnsConfig, keys, value));
  };

  return (
    <ConfigLayout title="table列配置">
      <TypeToList onChange={(config) => onChange(config)} />
      <div className="main-item flex-center">
        <div className="main-label">
          <Tip url="/imgs/3.png" />
          <span>TS类型名称:</span>
        </div>
        <Input
          className="main-input"
          value={columnsTypes}
          placeholder="TS类型名称"
          onChange={(e) => update('columnsTypes', e.target.value)}
        />
      </div>
      <div className="main-item">
        <div className="main-label self-start">
          <Tip url="/imgs/5.png" />
          <span>列配置:</span>
        </div>
        <div className="main-col">
          {columns.map((col, index) => (
            <div key={index} className="main-colitem">
              <div className="main-colitem-left">
                <Input
                  disabled={col.type === 'oper'}
                  className="main-comp-w"
                  value={col.title}
                  placeholder="列名称"
                  onChange={(e) =>
                    update(`columns.${index}.title`, e.target.value)
                  }
                />
                <Input
                  disabled={col.type === 'oper'}
                  className="main-comp-w"
                  value={col.dataIndex}
                  placeholder="接口返回的字段"
                  onChange={(e) =>
                    update(`columns.${index}.dataIndex`, e.target.value)
                  }
                />
                <Input
                  type="number"
                  disabled={col.type === 'oper'}
                  className="main-comp-w"
                  value={col.width}
                  placeholder="字段宽度"
                  onChange={(e) =>
                    update(`columns.${index}.width`, e.target.value)
                  }
                />
                <Select
                  className="main-comp-w"
                  placeholder="字段类型"
                  value={col.type}
                  onChange={(value) => {
                    const item = { ...columnsConfig.columns[index] };
                    item.type = value;
                    item.timeFormat =
                      value === 'date' ? 'YYYY-MM-DD HH:mm:ss' : undefined;
                    if (value === 'oper') {
                      item.buttons = [{ label: '删除' }];
                      item.dataIndex = '';
                      item.title = '操作';
                    } else {
                      item.buttons = undefined;
                    }
                    update(`columns.${index}`, item);
                  }}
                >
                  {fieldsType.map((field) => (
                    <Select.Option key={field.value} value={field.value}>
                      {field.label}
                    </Select.Option>
                  ))}
                </Select>
                {col.type === 'date' && (
                  <div className="main-fold">
                    <span className="main-fold-title">
                      <span>日期格式</span>
                    </span>
                    <Radio.Group
                      options={timeFormatList}
                      onChange={(e) =>
                        update(`columns.${index}.timeFormat`, e.target.value)
                      }
                      value={col.timeFormat}
                    />
                  </div>
                )}
                {col.type === 'oper' && (
                  <div className="main-fold">
                    <span className="main-fold-title">
                      <Tip url="/imgs/1.png" />
                      <span>添加操作按钮</span>
                    </span>
                    {col.buttons && (
                      <ButtonList
                        buttons={col.buttons}
                        onChange={(buttons) =>
                          update(`columns.${index}.buttons`, buttons)
                        }
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="main-colitem-right">
                <DeleteButton
                  disabled={columns.length === 1}
                  onClick={() => {
                    const cloneData = { ...columnsConfig };
                    cloneData.columns.splice(index, 1);
                    onChange(cloneData);
                  }}
                />
                <AddButton
                  onClick={() => {
                    const cloneData = { ...columnsConfig };
                    cloneData.columns.splice(index + 1, 0, { ...defaultValue });
                    onChange(cloneData);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ConfigLayout>
  );
};

export default Comp;
