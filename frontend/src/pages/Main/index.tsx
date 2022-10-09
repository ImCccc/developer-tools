// 拖动的组件
import {
  allTypes,
  dragComponentList,
  getConpmnentByType,
} from '@/components/DragList';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop, { MousePositionType } from './Drop';
import DropId from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';
import { dryConfirm } from '@/utils/util';

const Item1: React.FC = () => (
  <div style={{ background: 'antiquewhite', height: '30px' }}>拖动组件1</div>
);

const Item2: React.FC = () => (
  <div style={{ background: 'antiquewhite', height: '50px' }}>拖动组件2</div>
);

const Item3: React.FC = () => (
  <div style={{ background: 'antiquewhite', height: '70px' }}>拖动组件3</div>
);

const Item4: React.FC = () => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>列布局组件</div>
);

const Item5: React.FC = () => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>行布局组件</div>
);

const componentsObject = {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
};

export const VirtualId = 'Virtual id';

const getDefaultValue = () => {
  const defaultValue: Global.Components = [
    {
      id: '1',
      originalId: '1',
      canDrag: false, // 能否拖动
      canDrop: true, // 能否放置拖动组件
      accept: allTypes,
      type: 'Item4', // 组件类型
      props: {}, // 组件的属性
      children: [
        {
          id: '1-3',
          originalId: '1-3',
          canDrag: true,
          canDrop: false,
          type: 'Item3',
          props: {},
        },
        {
          id: '1-1',
          originalId: '1-1',
          canDrag: true, // 能否拖动
          canDrop: true, // 能否放置拖动组件
          accept: allTypes,
          type: 'Item4', // 组件类型
          props: {}, // 组件的属性
          children: [
            {
              id: '1-1-1',
              originalId: '1-1-1',
              canDrag: true, // 能否拖动
              canDrop: true, // 能否放置拖动组件
              accept: allTypes,
              type: 'Item4', // 组件类型
              props: {}, // 组件的属性
              children: [
                {
                  id: '1-1-1-1',
                  originalId: '1-1-1-1',
                  canDrag: true,
                  canDrop: false,
                  type: 'Item1',
                  props: {},
                },
                {
                  id: '1-1-1-2',
                  originalId: '1-1-1-2',
                  canDrag: true,
                  canDrop: false,
                  type: 'Item3',
                  props: {},
                },
              ],
            },
            {
              id: '1-1-2',
              originalId: '1-1-2',
              canDrag: true,
              canDrop: false,
              type: 'Item3',
              props: {},
            },
          ],
        },
        {
          id: '1-2',
          originalId: '1-2',
          canDrag: true,
          canDrop: false,
          type: 'Item3',
          props: {},
        },
      ],
    },
  ];

  const initData = (
    components: Global.Components,
    parant?: Global.DropComponentProps,
  ) => {
    components.forEach((options) => {
      const { children } = options;
      options.parent = parant;
      if (children && children.length) {
        initData(children, options);
      }
    });
  };
  initData(defaultValue);
  return defaultValue;
};

const addPosition = (
  id: string,
  monitor: any,
  direction?: 'row' | 'column',
) => {
  const boundingClientRect = document
    .getElementById(id)
    ?.getBoundingClientRect();
  if (boundingClientRect) {
    const { left, right, bottom, top } = boundingClientRect;
    if (direction === 'row') {
      // 中间位置
      const middle = (right - left) / 2;
      // 鼠标指针离目标元素左侧距离;
      const h = monitor.getClientOffset().x - left;
      return h > middle ? 'push' : 'unshift';
    }

    // 中间位置
    const middle = (bottom - top) / 2;
    // 鼠标指针离目标元素顶部距离;
    const h = monitor.getClientOffset().y - top;
    return h > middle ? 'push' : 'unshift';
  }

  return null;
};

const Comp: React.FC = () => {
  const [components, setComponents] = useState<Global.Components>(
    getDefaultValue(),
  );

  const idMapComponent = useMemo(() => {
    const idMapComponent = {};
    const initComponentsData = (components: Global.Components) => {
      components.forEach((options: any) => {
        const { children, id } = options;
        idMapComponent[id] = options;
        if (children && children.length) initComponentsData(children);
      });
    };
    initComponentsData(components);
    return idMapComponent as { [key: string]: Global.DropComponentProps };
  }, [components]);

  const virtualComponent = useRef<Global.DropComponentProps>();

  // 删除虚拟组件
  const deleteVirtual = () => {
    const virtual = idMapComponent[VirtualId];
    if (!virtual) return;
    const parent = virtual.parent;
    const children = parent?.children;
    if (!children) return;

    let deleteItem;
    parent.children = children.filter((v) => {
      if (v.id === VirtualId) {
        deleteItem = v;
        return false;
      }
      return true;
    });
    return deleteItem;
  };

  const dropCallback = () => {
    const virtual = idMapComponent[VirtualId];
    if (!virtual) return;

    const originalId = virtual.originalId;
    // 处理移动组件的逻辑
    if (originalId) {
      const children = idMapComponent[originalId].parent?.children;
      if (children) {
        const deleteIndex = children.findIndex((v) => v.id === originalId);
        if (deleteIndex > -1) children.splice(deleteIndex, 1);
      }
      virtual.id = originalId;
      return setComponents([...components]);
    }

    // 新增组件的逻辑
    virtual.id = `id-${Math.random()}`;
    virtual.originalId = virtual.id;
    setComponents([...components]);
  };

  const hoverCallback = (
    dropData: Global.DropComponentProps,
    dragData: Global.DragComponentProps,
    mousePosition: MousePositionType,
  ) => {
    const addOptions: Global.DropComponentProps =
      deleteVirtual() ||
      (dragData.originalId
        ? { ...dragData, id: VirtualId }
        : {
            props: {},
            id: VirtualId,
            type: dragData.type,
            canDrag: dragData.canDrag,
            canDrop: dragData.canDrop,
            direction: dragData.direction,
            children: dragData.canDrop ? [] : undefined,
          });

    if (dragData.originalId) {
      const dom = document.getElementById(dragData.originalId);
      if (dom) dom.style.display = 'none';
    }

    // 布局组件
    if (dropData.canDrop) {
      const parent = idMapComponent[dropData.id];
      const children = idMapComponent[dropData.id].children;
      if (parent && children) {
        addOptions.parent = parent;
        children[mousePosition === 'down' ? 'push' : 'unshift'](addOptions);
      }
      return setComponents([...components]);
    }

    // 基本组件
    const parent = idMapComponent[dropData.id].parent;
    const children = parent?.children;
    if (parent && children) {
      addOptions.parent = parent;
      let appendIndex = children.findIndex((v) => v.id === dropData.id);
      appendIndex += mousePosition === 'down' ? 1 : 0;
      children.splice(appendIndex, 0, addOptions);
    }
    setComponents([...components]);
  };

  const dragBegin = (data: Global.DropComponentProps) => {
    console.log('dragBegin:', data);
  };

  const dragEnd = (dragData: Global.DropComponentProps) => {
    // 恢复dom
    if (dragData.originalId) {
      const dom = document.getElementById(dragData.originalId);
      if (dom) dom.style.display = '';
    }

    deleteVirtual();
    DropId.id = '';
    setComponents([...components]);
  };

  const getConpmnents = (components: any) => {
    return components.map((options: any) => {
      const { children, type, canDrop, props, id } = options;
      const Comp = componentsObject[type];

      if (canDrop) {
        return (
          <Drag data={options} key={id}>
            <Drop
              data={options}
              drop={dropCallback}
              hover={hoverCallback}
              direction={options.direction}
            >
              {children && children[0] && getConpmnents(children)}
            </Drop>
          </Drag>
        );
      }

      return (
        <Drag end={dragEnd} begin={dragBegin} data={options} key={id}>
          <Drop
            data={options}
            drop={dropCallback}
            hover={hoverCallback}
            direction={options.direction}
          >
            <Comp {...props}></Comp>
          </Drop>
        </Drag>
      );
    });
  };

  // 删除组件逻辑
  useEffect(() => {
    const keyupCallback = async (e: KeyboardEvent) => {
      const selectedId = DropId.selectedId;
      if (e.code.toLocaleLowerCase() !== 'delete' || !selectedId) return;

      await dryConfirm('确定删除组件及其子元素?');
      const deleteItem = idMapComponent[selectedId];
      const parent = deleteItem.parent;

      if (parent) {
        const children = parent.children;
        parent.children = children?.filter((v) => v.id !== selectedId);
        return setComponents([...components]);
      }

      // 没有父元素, 说明是最顶层, 直接清空子元素即可
      deleteItem.children = [];
      setComponents([...components]);
    };
    document.addEventListener('keyup', keyupCallback);

    return () => document.removeEventListener('keyup', keyupCallback);
  }, [components, idMapComponent]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.page}>
        <div className={styles.side}>
          {dragComponentList.map((comp) => {
            return (
              <Drag end={dragEnd} key={comp.type} data={comp}>
                {getConpmnentByType(comp.type)}
              </Drag>
            );
          })}
        </div>
        <div className={styles.content}>{getConpmnents(components)}</div>
      </div>
    </DndProvider>
  );
};

export default observer(Comp);
