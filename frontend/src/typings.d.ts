// 拖动的组件

declare namespace Global {
  type ObjectProps = any;

  type ComponentTypes =
    | 'Select'
    | 'Button'
    | 'Input'
    | 'DatePicker'
    | 'LayoutRow'
    | 'LayoutColumn'
    | 'TableList';

  type DragComponentProps = DropComponentProps;

  type DropComponentProps = {
    id: string;
    type: ComponentTypes; // 组件类型
    canDrag: boolean; // 能否拖动
    canDrop: boolean; // 能否放置拖动组件
    direction?: 'row' | 'column'; // 布局方式，其实就是 flex-direction 属性的值
    parent?: DropComponentProps; // 父级
    props?: ObjectProps; // 组件的属性
    accept?: ComponentTypes[]; // 如果能否放置组件, 那么接受什么组件
    children?: DropComponentProps[];
    originalId?: string; // 移动组件的原始ID
    [k: string]: any;
  };

  type DropProps = {
    style?: CSSProperties;
    className?: string;
    data: DropComponentProps;
    children: any;
    direction?: 'column' | 'row';
    drop?: (dropData: DropComponentProps, dragData: any, monitor: any) => void;
    hover?: (
      dropData: DropComponentProps,
      dragData: DropComponentProps,
      mousePosition: string,
    ) => void;
  };

  type DragProps = {
    disabled?: boolean;
    begin?: (param?: any) => void;
    end?: (param?: any) => void;
    className?: string;
    style?: CSSProperties;
    children: any;
    data: DragComponentProps;
    onClick?: (data: DragComponentProps) => void;
  };

  type Components = DropComponentProps[];
}
