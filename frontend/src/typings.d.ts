declare namespace Global {
  type ObjectProps = { [key: string]: any };

  type ComponentTypes = 'Item1' | 'Item2' | 'Item3' | 'Item4' | 'Item5';

  type DragComponentProps = {
    id?: string;
    type: ComponentTypes; // 组件类型
    canDrag: boolean; // 能否拖动
    canDrop: boolean; // 能否放置拖动组件
    direction?: 'row' | 'column';
  };

  type DropComponentProps = {
    id: string;
    type: ComponentTypes; // 组件类型
    canDrag: boolean; // 能否拖动
    direction?: 'row' | 'column'; // 布局方式，其实就是 flex-direction 属性的值
    canDrop: boolean; // 能否放置拖动组件
    parent?: DropComponentProps; // 父级
    props: ObjectProps; // 组件的属性
    accept?: ComponentTypes[]; // 如果能否放置组件, 那么接受什么组件
    children?: DropComponentProps[];
  };

  type DropProps = {
    style?: CSSProperties;
    className?: string;
    data: DropComponentProps;
    children: any;
    drop?: (dropData: DropComponentProps, dragData: any, monitor: any) => void;
    direction?: 'column' | 'row';
    hover?: () => void;
  };

  type DragProps = {
    disabled?: boolean;
    begin?: (param?: any) => void;
    end?: (param?: any) => void;
    className?: string;
    children: any;
    data: DragComponentProps;
  };

  type Components = DropComponentProps[];
}
