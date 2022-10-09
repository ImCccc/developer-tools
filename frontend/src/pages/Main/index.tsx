// 拖动的组件
import {
  allTypes,
  dragComponentList,
  getConpmnentByType,
} from '@/components/DragList';
import React, { useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';
import DropId from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';
import { dryConfirm } from '@/utils/util';

const Item1: React.FC = () => (
  <div style={{ border: '1px solid red', height: '30px' }}>拖动组件1</div>
);

const Item2: React.FC = () => (
  <div style={{ border: '1px solid red', height: '50px' }}>拖动组件2</div>
);

const Item3: React.FC = () => (
  <div style={{ border: '1px solid red', height: '70px' }}>拖动组件3</div>
);

const Item4: React.FC = () => (
  <div style={{ border: '1px solid red', padding: '40px' }}>列布局组件</div>
);

const Item5: React.FC = () => (
  <div style={{ border: '1px solid red', padding: '40px' }}>行布局组件</div>
);

const componentsObject = {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
};

const getDefaultValue = () => {
  const defaultValue: Global.Components = [
    {
      id: '1',
      canDrag: false, // 能否拖动
      canDrop: true, // 能否放置拖动组件
      accept: allTypes,
      type: 'Item4', // 组件类型
      props: {}, // 组件的属性
      children: [
        {
          id: '1-1',
          canDrag: true, // 能否拖动
          canDrop: true, // 能否放置拖动组件
          accept: allTypes,
          type: 'Item4', // 组件类型
          props: {}, // 组件的属性
          children: [
            {
              id: '1-1-1',
              canDrag: true, // 能否拖动
              canDrop: true, // 能否放置拖动组件
              accept: allTypes,
              type: 'Item4', // 组件类型
              props: {}, // 组件的属性
              children: [
                {
                  id: '1-1-1-1',
                  canDrag: true,
                  canDrop: false,
                  type: 'Item1',
                  props: {},
                },
                {
                  id: '1-1-1-2',
                  canDrag: true,
                  canDrop: false,
                  type: 'Item3',
                  props: {},
                },
              ],
            },
            {
              id: '1-1-2',
              canDrag: true,
              canDrop: false,
              type: 'Item3',
              props: {},
            },
          ],
        },
        {
          id: '1-2',
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

  const dropCallback = (
    dropData: Global.DropComponentProps,
    dragData: Global.DragComponentProps,
    monitor: any,
  ) => {
    // 移动到自己区域，直接返回
    if (dragData.id === dropData.id) return;

    // 向页面添加新的组件
    if (!dragData.id) {
      const addOptions: Global.DropComponentProps = {
        props: {},
        type: dragData.type,
        id: 'id-' + Math.random(),
        canDrag: dragData.canDrag,
        canDrop: dragData.canDrop,
        direction: dragData.direction,
        children: dragData.canDrop ? [] : undefined,
      };

      // 拖动到布局组件中，默认放到布局组件的第一个子元素
      if (dropData.canDrop) {
        const parent = idMapComponent[dropData.id];
        const children = parent.children;
        if (children) {
          const position = addPosition(
            dropData.id,
            monitor,
            dropData.direction,
          );
          if (position) {
            addOptions.parent = parent;
            children[position](addOptions);
            setComponents([...components]);
          }
        }
        return;
      }

      // 拖动到基本组件中，和基本组件同一级别, 位置为基本组件下一个元素
      const parent = idMapComponent[dropData.id].parent;
      const children = parent?.children;
      if (parent && children) {
        addOptions.parent = parent;
        const appendIndex = children.findIndex((v) => v.id === dropData.id);
        children.splice(appendIndex + 1, 0, addOptions);
        setComponents([...components]);
      }
    }

    // 移动组件
    if (dragData.id) {
      const parent = idMapComponent[dragData.id].parent;
      const children = parent?.children;

      if (parent && children) {
        // 先在原来的位置上删除
        const deleteIndex = children.findIndex((v) => v.id === dragData.id);
        const moveItem = children.splice(deleteIndex, 1)[0];

        // 拖动到布局组件中，默认放到布局组件的第一个子元素
        if (dropData.canDrop) {
          const newParent = idMapComponent[dropData.id];
          const children = newParent.children;
          if (newParent && children) {
            const position = addPosition(
              dropData.id,
              monitor,
              dropData.direction,
            );
            if (position) {
              moveItem.parent = newParent;
              children[position](moveItem);
              setComponents([...components]);
            }
          }
        } else {
          // 拖动到基本组件中，和基本组件同一级别, 位置为基本组件下一个元素
          const newParent = idMapComponent[dropData.id].parent;
          const children = newParent?.children;
          if (newParent && children) {
            moveItem.parent = newParent;
            const appendIndex = children.findIndex((v) => v.id === dropData.id);
            children.splice(appendIndex + 1, 0, moveItem);
          }
        }

        setComponents([...components]);
      }
    }
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
              direction={options.direction}
            >
              {children && children[0] && getConpmnents(children)}
            </Drop>
          </Drag>
        );
      }

      return (
        <Drag data={options} key={id}>
          <Drop
            data={options}
            drop={dropCallback}
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
              <Drag key={comp.type} data={comp}>
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
