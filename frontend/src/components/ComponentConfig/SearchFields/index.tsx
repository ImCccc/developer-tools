import Tip from '@/components/Tip';
import { Input, Select } from 'antd';
import ConfigLayout from '@/components/ConfigLayout';
import { updateObjectByString } from '@/utils/util';
import DeleteButton from '@/components/DeleteButton';
import AddButton from '@/components/AddButton';

export type FieldType =
  | 'Input'
  | 'Select'
  | 'DatePicker'
  | 'RangePicker'
  | 'Multiple';

export type SearchFieldProps = {
  key: string;
  label: string;
  type?: FieldType;
};

export type SearchFieldConfigProps = SearchFieldProps[];

const fieldsType: { value: FieldType; label: string }[] = [
  { value: 'Input', label: '输入框' },
  { value: 'Multiple', label: '下拉多选' },
  { value: 'Select', label: '下拉单选' },
  { value: 'DatePicker', label: '日期' },
  { value: 'RangePicker', label: '时间段' },
];

type SearchFieldsProps = {
  searchFields: SearchFieldConfigProps;
  onChange: (columns: SearchFieldConfigProps) => void;
};

const Comp: React.FC<SearchFieldsProps> = ({ searchFields, onChange }) => {
  const update = (keys: string, value: any) => {
    onChange(updateObjectByString(searchFields, keys, value));
  };

  return (
    <ConfigLayout title="table查询字段配置">
      <div className="main-item">
        <div className="main-label self-start">
          <Tip url="/imgs/7.jpg" />
          <span>查询字段:</span>
        </div>
        <div className="main-col">
          {searchFields.map((col, index) => (
            <div key={index} className="main-colitem">
              <div className="main-colitem-left">
                <Input
                  className="main-comp-w"
                  value={col.label}
                  placeholder="字段名称"
                  onChange={(e) => update(`${index}.label`, e.target.value)}
                />
                <Input
                  className="main-comp-w"
                  value={col.key}
                  placeholder="传给接口的key"
                  onChange={(e) => update(`${index}.key`, e.target.value)}
                />
                <Select
                  className="main-comp-w"
                  placeholder="字段类型"
                  value={col.type}
                  onChange={(value) => update(`${index}.type`, value)}
                >
                  {fieldsType.map((field) => (
                    <Select.Option key={field.value} value={field.value}>
                      {field.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="main-colitem-right">
                <DeleteButton
                  disabled={searchFields.length === 1}
                  onClick={() => {
                    const cloneData = [...searchFields];
                    cloneData.splice(index, 1);
                    onChange(cloneData);
                  }}
                />
                <AddButton
                  onClick={() => {
                    const cloneData = [...searchFields];
                    cloneData.splice(index + 1, 0, { key: '', label: '' });
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
