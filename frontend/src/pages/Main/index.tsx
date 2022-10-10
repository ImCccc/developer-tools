// 拖动的组件
import {
  allTypes,
  dragComponentList,
  getConpmnentByType,
  VirtualId,
} from '@/components/DragList';
import React, { useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop, { MousePositionType } from './Drop';
import DropId from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';
// import { dryConfirm } from '@/utils/util';

function clone<T>(data: T) {
  return JSON.parse(JSON.stringify(data)) as T;
}

const Item1: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', height: '40px' }}>{children}</div>
);

const Item2: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', height: '40px' }}>{children}</div>
);

const Item3: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', height: '40px' }}>{children}</div>
);

const Item4: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>{children}</div>
);

const Item5: React.FC<{ children: any }> = ({ children }) => (
  <div style={{ background: 'antiquewhite', padding: '40px' }}>{children}</div>
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
          id: '1-3',
          canDrag: true,
          canDrop: false,
          type: 'Item3',
          props: {},
        },
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

  // 删除虚拟组件
  const deleteVirtual = () => {
    const virtual = idMapComponent[VirtualId];
    if (!virtual) return;
    const children = virtual.parent?.children || [];
    const deleteIndex = children.findIndex((v) => v.id === VirtualId);
    if (deleteIndex === -1) return;
    return children.splice(deleteIndex, 1)[0];
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
    setComponents([...components]);
  };

  const hoverCallback = (
    dropData: Global.DropComponentProps,
    dragData: Global.DragComponentProps,
    mousePosition: MousePositionType,
  ) => {
    let addOptions;

    if (dragData.id !== VirtualId) {
      // 移动组件
      addOptions = deleteVirtual() || {
        ...dragData,
        id: VirtualId,
        originalId: dragData.id,
      };
    } else {
      // 新增组件
      addOptions = deleteVirtual() || clone(dragData);
    }

    // 布局组件
    if (dropData.canDrop) {
      const parent = idMapComponent[dropData.id];
      const children = idMapComponent[dropData.id].children;
      if (parent && children) {
        addOptions.parent = parent;
        if (mousePosition === 'down' || mousePosition === 'right') {
          children.push(addOptions);
        } else {
          children.unshift(addOptions);
        }
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

  // 移动组件, 开始时需要隐藏组件
  const dragBegin = (dragData: Global.DropComponentProps) => {
    setTimeout(() => {
      const dom = document.getElementById(dragData.id);
      if (dom) dom.style.display = 'none';
    }, 60);
  };

  const dragEnd = (dragData: Global.DropComponentProps) => {
    // 鼠标放下,如果组件没有放在正确的区域, 那么移动失败, 需要恢复dom
    let dom = document.getElementById(dragData.id);
    if (dom) dom.style.display = '';
    dom = document.getElementById(dragData.id);
    if (dom) dom.style.display = '';

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
          <Drag end={dragEnd} begin={dragBegin} data={options} key={id}>
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
            <Comp {...props}>{id}</Comp>
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

      // await dryConfirm('确定删除组件及其子元素?');
      const deleteItem = idMapComponent[selectedId];
      const parent = deleteItem.parent;

      if (parent) {
        const children = parent.children;
        parent.children = children?.filter((v) => v.id !== selectedId);

        // 移动时, 导致父子关系乱了 todo........
        if (parent.canDrop) {
          const gChildren = parent.parent?.children || [];
          const index = gChildren.findIndex((v) => v.id === parent.id);
          if (index !== -1) gChildren[index] = parent;
        }

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
