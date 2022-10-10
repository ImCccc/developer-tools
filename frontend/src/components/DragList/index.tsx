import { Button, DatePicker, Input, Select } from 'antd';
import styles from './index.module.less';

export const VirtualId = 'Virtual id';

export const allTypes: Global.ComponentTypes[] = [
  'Select',
  'Button',
  'Input',
  'DatePicker',
  'LayoutRow',
  'LayoutColumn',
];

export type DragComponentListProps = {
  name: string;
  children: Global.DragComponentProps[];
};

export const getConpmnentByType = (type: Global.ComponentTypes) => {
  if (type === 'Select') {
    return <Select className={styles.base} disabled placeholder="下拉" />;
  }

  if (type === 'Input') {
    return <Input className={styles.base} disabled placeholder="输入框" />;
  }

  if (type === 'DatePicker') {
    return <DatePicker className={styles.base} disabled placeholder="日期" />;
  }

  if (type === 'Button') {
    return <div className={styles.button}>按钮</div>;
  }

  if (type === 'LayoutRow') {
    return <div className={styles.layout}>列布局</div>;
  }

  if (type === 'LayoutColumn') {
    return <div className={styles.layout}>行布局</div>;
  }
  return undefined;
};

export const dragComponentList: DragComponentListProps[] = [
  {
    name: '布局组件',
    children: [
      {
        type: 'LayoutRow',
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: true,
        direction: 'column',
        children: [],
      },
      {
        type: 'LayoutColumn',
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: true,
        direction: 'row',
        children: [],
      },
    ],
  },
  {
    name: '基础组件',
    children: [
      {
        type: 'Button', // 组件类型
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: false,
      },
      {
        type: 'Select', // 组件类型
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: false,
      },
      {
        type: 'Input', // 组件类型
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: false,
      },
      {
        type: 'DatePicker', // 组件类型
        props: {},
        id: VirtualId,
        canDrag: true,
        canDrop: false,
      },
    ],
  },
];

const LayoutRow: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>{children}</div>
);

const LayoutColumn: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>{children}</div>
);

const ThisButton: React.FC = (props: any) => {
  return <Button {...props}>按钮</Button>;
};

const ThisSelect: React.FC = (props: any) => (
  <Select placeholder="请选择" {...props} />
);

const ThisInput: React.FC = (props: any) => (
  <Input placeholder="请输入" {...props} />
);

export const componentsObject = {
  LayoutRow,
  DatePicker,
  LayoutColumn,
  Input: ThisInput,
  Select: ThisSelect,
  Button: ThisButton,
};
