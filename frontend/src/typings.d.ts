declare namespace Global {
  type ObjectProps = { [key: string]: any };

  type ComponentTypes = 'Item1' | 'Item2' | 'Item3' | 'Item4';

  type DragComponentProps =
    | {
        id?: string;
        type: ComponentTypes; // 组件类型
        canDrag: boolean; // 能否拖动
        canDrop: boolean; // 能否放置拖动组件
      }
    | DropComponentProps;

  type DropComponentProps = {
    id: string;
    type: ComponentTypes; // 组件类型
    canDrag: boolean; // 能否拖动
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
    drop?: (dropData: DropComponentProps, dragData: any) => void;
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
