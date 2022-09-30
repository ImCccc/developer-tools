import React, {
  useMemo,
  useState,
  createRef,
  useImperativeHandle,
} from 'react';

import {
  Input,
  Modal,
  Form,
  FormProps,
  DatePicker,
  ModalProps,
  FormInstance,
  FormItemProps,
} from 'antd';
import moment from 'moment';

import Select from '@/components/Select';
import Upload from '@/components/Upload';

import styles from './index.module.less';

type Obj = Record<string, any>;

export type ImperativeHandleProps = {
  showModal: () => void;
  hideModal: () => void;
};

export type FormItemType = 'DatePicker' | 'Select' | 'Input' | 'Upload';

export type FormItemListProps = Partial<
  FormItemProps & { type: FormItemType; props: any }
>[];

export type ModalFormProps = Partial<ModalProps> & {
  onSubmit: (data: any) => any;
  formItemList: FormItemListProps;
  ref?: any;
  formProps?: FormProps;
  initialValues?: Obj;
};

const COMP_MAP: Obj = { Upload, DatePicker, Select, Input };

// 使用 React.forwardRef 技术， 让父组件可以调用子组件的方法
const ModalForm: React.FC<ModalFormProps> = React.forwardRef(
  (
    { formProps, onSubmit, formItemList, initialValues, children, ...props },
    ref,
  ) => {
    const formRef = createRef<FormInstance<any>>();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
      formRef.current?.validateFields().then(async (values) => {
        const submitData = Object.keys(values).reduce(
          (data, key) => {
            let val = values[key];
            if (val instanceof moment) val = val.valueOf();
            data[key] = val;
            return data;
          },
          { ...initialValues },
        );
        const rs = onSubmit(submitData);
        try {
          if (rs instanceof Promise) {
            setConfirmLoading(true);
            await rs;
          }
          setVisible(false);
        } catch (error) {}
        setConfirmLoading(false);
      });
    };

    const handleCancel = () => {
      setConfirmLoading(false);
      setVisible(false);
    };

    const imperativeHandle = (): ImperativeHandleProps => ({
      showModal: () => setVisible(true),
      hideModal: () => handleCancel(),
    });

    // 暴露给父组件调用的方法
    useImperativeHandle(ref, imperativeHandle);

    const Title: React.ReactNode = useMemo(
      () => (
        <div className={styles.header}>
          <span className={styles.title}>{props.title}</span>
          <span
            onClick={() => setVisible(false)}
            className={'iconfont icon_guanbi ' + styles.icon}
          ></span>
        </div>
      ),
      [props.title],
    );

    return (
      <Modal
        width={'66rem'}
        destroyOnClose
        onOk={handleOk}
        closable={false}
        visible={visible}
        onCancel={handleCancel}
        className={styles.modal}
        confirmLoading={confirmLoading}
        {...props}
        title={Title}
      >
        <Form initialValues={initialValues} {...formProps} ref={formRef}>
          {formItemList.map((item, index) => {
            const Comp = COMP_MAP[item.type || 'Input'] || COMP_MAP.Input;
            return (
              <Form.Item
                key={index}
                label={item.label}
                name={item.name}
                rules={item.rules}
              >
                <Comp style={{ width: '98%' }} {...item.props} />
              </Form.Item>
            );
          })}
          {children}
        </Form>
      </Modal>
    );
  },
);

export default ModalForm;
