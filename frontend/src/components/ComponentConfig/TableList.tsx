import { updateObjectByString } from '@/utils/util';
import { Input, Radio, Select } from 'antd';
import ButtonList from './ButtonList';
import { useMemo } from 'react';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

export type ColumnsProps = {
  title: string;
  width?: number;
  type?: FieldType;
  dataIndex: string;
  operList?: { label: string }[];
  timeFormat?: 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD';
};

export type FieldType = 'render' | 'date' | 'oper' | 'text';

const fieldsType: { value: FieldType; label: string }[] = [
  { value: 'text', label: '文本' },
  { value: 'date', label: '日期' },
  { value: 'oper', label: '操作按钮' },
  { value: 'render', label: '自定义' },
];

const timeFormatList = [
  { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
  { label: 'YYYY-MM-DD HH:mm:ss', value: 'YYYY-MM-DD HH:mm:ss' },
];

const Comp: React.FC<{
  onChange: any;
  selectedComp: Global.DropComponentProps;
}> = ({ onChange, selectedComp }) => {
  const columns: ColumnsProps[] = useMemo(() => {
    return selectedComp?.props?.columns || [];
  }, [selectedComp]);

  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(selectedComp, keys, value));
  };

  return (
    <div className="main-item">
      <div className="field-col header">
        <span className="field-col-1">字段名</span>
        <span className="field-col-2">接口返回的key</span>
        <span className="field-col-3">字段宽度</span>
        <span className="field-col-4">字段类型</span>
      </div>
      {columns.map((col, index) => (
        <div key={index} className="field-col">
          <Input
            disabled={col.type === 'oper'}
            className="field-col-1"
            value={col.title}
            placeholder="列名称"
            onChange={(e) =>
              update(`props.columns.${index}.title`, e.target.value)
            }
          />
          <Input
            disabled={col.type === 'oper'}
            className="field-col-2"
            value={col.dataIndex}
            placeholder="接口返回的字段"
            onChange={(e) =>
              update(`props.columns.${index}.dataIndex`, e.target.value)
            }
          />
          <Input
            type="number"
            disabled={col.type === 'oper'}
            className="field-col-3"
            value={col.width}
            placeholder="字段宽度"
            onChange={(e) =>
              update(`props.columns.${index}.width`, +e.target.value)
            }
          />
          <div className="field-col-4">
            <Select
              className="select"
              placeholder="字段类型"
              value={col.type}
              onChange={(value) => {
                const item = { ...columns[index] };
                item.type = value;
                item.timeFormat =
                  value === 'date' ? 'YYYY-MM-DD HH:mm:ss' : undefined;
                if (value === 'oper') {
                  item.operList = [{ label: '删除' }];
                  item.dataIndex = '';
                  item.title = '操作';
                } else {
                  item.operList = undefined;
                }
                update(`props.columns.${index}`, item);
              }}
            >
              {fieldsType.map((field) => (
                <Select.Option key={field.value} value={field.value}>
                  {field.label}
                </Select.Option>
              ))}
            </Select>

            <div className="date-wrap">
              {col.type === 'date' && (
                <Radio.Group
                  value={col.timeFormat}
                  options={timeFormatList}
                  onChange={(e) =>
                    update(`props.columns.${index}.timeFormat`, e.target.value)
                  }
                />
              )}
              {col.operList && (
                <span className="field-col-6">
                  <ButtonList
                    buttons={col.operList}
                    onChange={(operList) =>
                      update(`props.columns.${index}.operList`, operList)
                    }
                  />
                </span>
              )}
            </div>
          </div>

          <div className="main-colitem-right">
            <DeleteButton
              disabled={columns.length === 1}
              onClick={() => {
                columns.splice(index, 1);
                onChange({ ...selectedComp });
              }}
            />
            <AddButton
              onClick={() => {
                columns.splice(index + 1, 0, { title: '', dataIndex: '' });
                onChange({ ...selectedComp });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comp;
