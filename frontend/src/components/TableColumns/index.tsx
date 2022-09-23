import { Button, Input, Modal, Radio, Select } from 'antd';
import DeleteButton from '@/components/DeleteButton';
import { updateObjectByString } from '@/utils/util';
import ButtonList from '@/components/ButtonList';
import AddButton from '@/components/AddButton';
import ConfigLayout from '@/components/ConfigLayout';
import Tip from '@/components/Tip';
import { useState } from 'react';

const { TextArea } = Input;

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

const placeholderTips = `输入列的ts类型, 严格按照例子的格式:  
  type smzxAppUpgrade =  {
    /** 应用版本id */
    'id': string;
    /** 应用版本名称 */
    'name': string;
    /** 创建毫秒时间戳 */
    'date_created': number;
  }`;

const tsTypeToColumn = (typeString: string) => {
  let columnsTypes = '';

  typeString = typeString.replace(/\s/g, '');

  let index = typeString.indexOf('{');
  if (index > -1) {
    columnsTypes = typeString.slice(0, index - 1);

    if (columnsTypes.startsWith('type')) {
      columnsTypes = columnsTypes.slice(4);
    }

    if (columnsTypes.startsWith('interface')) {
      columnsTypes = columnsTypes.slice(9);
    }

    typeString = typeString.slice(index + 1);
  }

  index = typeString.indexOf('}');
  if (index > -1) {
    typeString = typeString.slice(0, index);
  }

  const cloumnsArray = typeString.split(';');
  if (!cloumnsArray.length[cloumnsArray.length - 1]) {
    cloumnsArray.pop();
  }

  const cloumns = cloumnsArray.reduce((cloumns, str) => {
    const data = str.replace('/**', '').split('*/');
    // 得到注释 /** 应用版本id */ 中的 "应用版本id"
    const title = data[0];
    // 此时得到: 'version':number
    const column = (data.length > 1 ? data[1] : data[0])
      .replace(/'|"/g, '')
      .split(':');
    const dataIndex = column[0];
    cloumns.push({ title, dataIndex });
    return cloumns;
  }, [] as ColumnsProps[]);

  return { columnsTypes, cloumns };
};

const Comp: React.FC<TableColumnsProps> = ({ onChange, columnsConfig }) => {
  const { columns, columnsTypes } = columnsConfig;

  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(columnsConfig, keys, value));
  };

  const [types, setTypes] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
    if (types) {
      const { cloumns, columnsTypes } = tsTypeToColumn(types);
      if (cloumns && cloumns.length) {
        const cloneData = { ...columnsConfig };
        cloneData.columns = cloumns;
        cloneData.columnsTypes = columnsTypes;
        onChange(cloneData);
      }
    }
    setTypes('');
  };

  return (
    <ConfigLayout title="table列配置">
      <>
        <Button
          ghost
          type="primary"
          onClick={() => setIsModalOpen(true)}
          style={{ position: 'absolute', right: '16px', top: '16px' }}
        >
          ts 转列
        </Button>
        <Modal
          title="TS 类型转列"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={() => setIsModalOpen(false)}
        >
          <TextArea
            rows={10}
            value={types}
            placeholder={placeholderTips}
            onChange={(e) => setTypes(e.target.value)}
          />
        </Modal>
      </>
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
