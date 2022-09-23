import Tip from '@/components/Tip';
import { Button, Input, Radio, Select } from 'antd';
import { updateObjectByString } from '@/utils/util';
import ConfigLayout from '@/components/ConfigLayout';
import { ButtonProps } from '@/components/OperButtons';
import AddButton from '@/components/AddButton';
import { useCallback, useMemo } from 'react';
import TypeToList from '@/components/TypeToList';
import DeleteButton from '@/components/DeleteButton';

export type FieldType =
  | 'Select'
  | 'Upload'
  | 'Input'
  | 'DatePicker'
  | 'Multiple';

export type ModalFormProps = {
  name: string;
  label: string;
  type?: FieldType;
  isRequired?: boolean;
};

export type ModalFormConfigProps = {
  formFields: ModalFormProps[];
  correlationBtn?: string;
};

const defaultValue = {
  name: '',
  label: '',
  isRequired: true,
};

const fieldsType: { value: FieldType; label: string }[] = [
  { value: 'Input', label: '输入框' },
  { value: 'Multiple', label: '下拉多选' },
  { value: 'Select', label: '下拉单选' },
  { value: 'DatePicker', label: '日期' },
  { value: 'Upload', label: '上传' },
];

const isRequiredList = [
  { label: '必填', value: true },
  { label: '选填', value: false },
];

type ModalFormsProps = {
  buttons: ButtonProps[];
  modalFormConfig: ModalFormConfigProps;
  onChange: (modalFormConfig: ModalFormConfigProps) => void;
};

const Comp: React.FC<ModalFormsProps> = ({
  buttons,
  onChange,
  modalFormConfig,
}) => {
  const { formFields } = modalFormConfig;

  const update = useCallback(
    (keys: string, value: any) => {
      onChange(updateObjectByString(modalFormConfig, keys, value));
    },
    [modalFormConfig, onChange],
  );

  const buttonList = useMemo(() => {
    return buttons
      .filter((btn) => btn.label)
      .map((btn, index) => {
        const selected = btn.label === modalFormConfig.correlationBtn;
        return (
          <Button
            className="mr"
            key={index}
            type={selected ? 'primary' : 'default'}
            onClick={() => update('correlationBtn', selected ? '' : btn.label)}
          >
            {btn.label}
          </Button>
        );
      });
  }, [buttons, modalFormConfig.correlationBtn, update]);

  return (
    <ConfigLayout title="弹窗的表单配置">
      <TypeToList
        onChange={({ columns }) => {
          update(
            'formFields',
            columns.map((col) => ({
              name: col.dataIndex,
              label: col.title,
              isRequired: true,
            })),
          );
        }}
      />
      <div className="main-item">
        <div className="main-label self-start">
          <Tip url="/imgs/8.jpg" />
          <span>字段配置:</span>
        </div>
        <div className="main-col">
          {!formFields.length && (
            <AddButton
              onClick={() => update('formFields', [{ ...defaultValue }])}
            ></AddButton>
          )}
          {formFields.map((col, index) => (
            <div key={index} className="main-colitem">
              <div className="main-colitem-left">
                <Input
                  className="main-comp-w"
                  value={col.label}
                  placeholder="字段名称"
                  onChange={(e) =>
                    update(`formFields.${index}.label`, e.target.value)
                  }
                />
                <Input
                  className="main-comp-w"
                  value={col.name}
                  placeholder="传给接口的key"
                  onChange={(e) =>
                    update(`formFields.${index}.name`, e.target.value)
                  }
                />
                <Select
                  className="main-comp-w"
                  placeholder="字段类型"
                  value={col.type}
                  onChange={(value) => {
                    update(`formFields.${index}.type`, value);
                  }}
                >
                  {fieldsType.map((field) => (
                    <Select.Option key={field.value} value={field.value}>
                      {field.label}
                    </Select.Option>
                  ))}
                </Select>
                <Radio.Group
                  options={isRequiredList}
                  value={col.isRequired}
                  onChange={(e) =>
                    update(`formFields.${index}.isRequired`, e.target.value)
                  }
                />
              </div>
              <div className="main-colitem-right">
                <DeleteButton
                  onClick={() => {
                    const cloneData = [...formFields];
                    cloneData.splice(index, 1);
                    update(`formFields`, cloneData);
                  }}
                />
                <AddButton
                  onClick={() => {
                    const cloneData = [...formFields];
                    cloneData.splice(index + 1, 0, { ...defaultValue });
                    update(`formFields`, cloneData);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="main-item ">
        <div className="main-label">
          <Tip msg="按哪个按钮触发弹窗" />
          <span>触发按钮:</span>
        </div>
        {buttonList}
      </div>
    </ConfigLayout>
  );
};

export default Comp;
