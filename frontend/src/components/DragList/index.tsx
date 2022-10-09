// import styles from './index.module.less';
export type ComponentTypes = 'Item1' | 'Item2' | 'Item3' | 'Item4' | 'Item5';

export const allTypes: ComponentTypes[] = [
  'Item1',
  'Item2',
  'Item3',
  'Item4',
  'Item5',
];

export const getConpmnentByType = (type: ComponentTypes) => {
  if (type === 'Item1') {
    return (
      <div style={{ background: 'antiquewhite', height: '30px' }}>
        拖动组件1
      </div>
    );
  }
  if (type === 'Item2') {
    return (
      <div style={{ background: 'antiquewhite', height: '50px' }}>
        拖动组件2
      </div>
    );
  }
  if (type === 'Item3') {
    return (
      <div style={{ background: 'antiquewhite', height: '70px' }}>
        拖动组件3
      </div>
    );
  }
  if (type === 'Item4') {
    return (
      <div style={{ background: 'antiquewhite', padding: '40px' }}>
        列布局组件
      </div>
    );
  }
  if (type === 'Item5') {
    return (
      <div style={{ background: 'antiquewhite', padding: '40px' }}>
        行布局组件
      </div>
    );
  }

  return undefined;
};

export const dragComponentList: Global.DragComponentProps[] = [
  {
    type: 'Item1', // 组件类型
    canDrag: true,
    canDrop: false,
  },
  {
    type: 'Item2', // 组件类型
    canDrag: true,
    canDrop: false,
  },
  {
    type: 'Item3', // 组件类型
    canDrag: true,
    canDrop: false,
  },
  {
    type: 'Item4',
    canDrag: true,
    canDrop: true,
    direction: 'column',
  },
  {
    type: 'Item5',
    canDrag: true,
    canDrop: true,
    direction: 'row',
  },
];
