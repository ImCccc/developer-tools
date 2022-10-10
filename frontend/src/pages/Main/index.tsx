// 拖动的组件
import {
  allTypes,
  VirtualId,
  dragComponentList,
  getConpmnentByType,
  componentsObject,
} from '@/components/DragList';
import React, { useEffect, useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';
import useMobx from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';
import { dryConfirm, JSONclone } from '@/utils/util';

const getDefaultValue = () => {
  const defaultValue: Global.Components = [
    {
      id: '1',
      canDrag: false, // 能否拖动
      canDrop: true, // 能否放置拖动组件
      accept: allTypes,
      type: 'LayoutRow', // 组件类型
      props: {}, // 组件的属性
      children: [
        {
          id: '1-3',
          canDrag: true,
          canDrop: false,
          type: 'Input',
          props: {},
        },
        {
          id: '1-1-1',
          canDrag: true, // 能否拖动
          canDrop: true, // 能否放置拖动组件
          accept: allTypes,
          type: 'LayoutRow', // 组件类型
          props: {}, // 组件的属性
          children: [
            {
              id: '1-1-1-2',
              canDrag: true,
              canDrop: false,
              type: 'Button',
              props: {},
            },
          ],
        },
        {
          id: '1-2',
          canDrag: true,
          canDrop: false,
          type: 'Input',
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
      if (children) initData(children, options);
    });
  };
  initData(defaultValue);
  return defaultValue;
};

const Comp: React.FC = () => {
  const DropData = useMobx('DropData');

  const [components, setComponents] = useState<Global.Components>(
    getDefaultValue(),
  );

  // id 映射组件
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

  // 删除虚拟组件, 有时候速度快的时候, 会产生2个虚拟组件, 需要递归删除
  const deleteVirtualLoop = () => {
    const cloneComponents = [...components];
    const loop = (components: Global.Components) => {
      components.forEach((options) => {
        if (options.children) {
          options.children = options.children.filter((v) => v.id !== VirtualId);
          loop(options.children);
        }
      });
    };
    loop(cloneComponents);
    setComponents(cloneComponents);
  };

  // 删除虚拟组件, 这个方法时间复杂低, 但是可能会出现 bug, 原因可能是移动的时候, 异步导致的
  const deleteVirtualById = () => {
    const virtual = idMapComponent[VirtualId];
    if (!virtual) return;
    const children = virtual.parent?.children || [];
    const deleteIndex = children.findIndex((v) => v.id === VirtualId);
    if (deleteIndex === -1) return;
    const deleteItem = children.splice(deleteIndex, 1)[0];
    return deleteItem;
  };

  // 组件接受到拖拽组件时的回调
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
    }

    // 新增组件的逻辑
    virtual.id = originalId || `id-${Math.random()}`;
    setComponents([...components]);
  };

  // 移动组件移动到某个组件时的回调, 已经处理过,不会连续触发
  const hoverCallback = (
    dropData: Global.DropComponentProps,
    dragData: Global.DragComponentProps,
    mousePosition: string,
  ) => {
    let addOptions;

    if (dragData.id !== VirtualId) {
      // 移动组件
      addOptions = deleteVirtualById() || {
        ...dragData,
        id: VirtualId,
        originalId: dragData.id,
      };
    } else {
      // 新增组件
      addOptions = deleteVirtualById() || JSONclone(dragData);
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

  // 移动组件时, 鼠标放下的回调, 可能没有移动到目标组件中
  const dragEnd = (dragData: Global.DropComponentProps) => {
    // 鼠标放下,如果组件没有放在正确的区域, 那么移动失败, 需要恢复dom
    let dom = document.getElementById(dragData.id);
    if (dom) dom.style.display = '';
    dom = document.getElementById(dragData.id);
    if (dom) dom.style.display = '';

    DropData.id = '';
    deleteVirtualLoop();
  };

  const getConpmnents = (components: Global.Components, isFirst?: boolean) => {
    return components.map((options) => {
      const { children, type, props, id } = options;
      const Comp = componentsObject[type];
      // if (isFirst) {
      //   return (
      //     <Drop
      //       key={id}
      //       data={options}
      //       drop={dropCallback}
      //       hover={hoverCallback}
      //       style={{ padding: '30px' }}
      //       direction={options.direction}
      //     >
      //       {children && children[0] && getConpmnents(children)}
      //     </Drop>
      //   );
      // }
      return (
        <Drag end={dragEnd} begin={dragBegin} data={options} key={id}>
          <Drop
            data={options}
            drop={dropCallback}
            hover={hoverCallback}
            direction={options.direction}
          >
            {children ? (
              children[0] && getConpmnents(children)
            ) : (
              <Comp {...props}></Comp>
            )}
          </Drop>
        </Drag>
      );
    });
  };

  // 删除组件逻辑
  useEffect(() => {
    const keyupCallback = async (e: KeyboardEvent) => {
      const selectedId = DropData.selectedId;
      if (e.code.toLocaleLowerCase() !== 'delete' || !selectedId) return;

      await dryConfirm('确定删除组件及其子元素?');
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
  }, [DropData, components, idMapComponent]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.page}>
        <div className={styles.side}>
          {dragComponentList.map((options) => {
            const comps = options.children;
            return (
              <div key={options.name} className={styles.layout}>
                <div className={styles.title}>{options.name}</div>
                {comps.map((comp) => {
                  return (
                    <Drag data={comp} end={dragEnd} key={comp.type}>
                      {getConpmnentByType(comp.type)}
                    </Drag>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.content}>{getConpmnents(components, true)}</div>
      </div>
    </DndProvider>
  );
};

export default observer(Comp);
