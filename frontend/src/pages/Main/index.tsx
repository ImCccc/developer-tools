// 拖动的组件
import {
  VirtualId,
  componentsObject,
  dragComponentList,
  getConpmnentByType,
} from '@/components/DragList';
import Menu from '@/components/Menu';
import { useDebounceFn } from 'ahooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useEffect, useMemo, useState } from 'react';
import { deleteConfirm, getPageConfig, JSONclone } from '@/utils/util';
import Drag from './Drag';
import Drop from './Drop';
import Config from './Config';
import useMobx from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';

const Comp: React.FC = () => {
  const DropData = useMobx('DropData');

  const [components, setComponents] = useState<Global.Components>(
    getPageConfig(''),
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

  const selectedComp = useMemo(
    () => idMapComponent[DropData.selectedId],
    [DropData.selectedId, idMapComponent],
  );

  // 删除虚拟组件, 有时候速度快的时候, 会产生2个虚拟组件, 需要递归删除
  // 还有一种情况是移动嵌套组件,父子关系会错乱,需要重置
  const deleteVirtualLoop = () => {
    const cloneComponents = [...components];
    const loop = (
      components: Global.Components,
      parant?: Global.DropComponentProps,
    ) => {
      components.forEach((options) => {
        options.parent = parant;
        if (options.children) {
          options.children = options.children.filter((v) => v.id !== VirtualId);
          loop(options.children, options);
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
  const hoverEvent = useDebounceFn(
    (
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
    },
    { wait: 150 },
  ).run;

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

  const getEditComponent = () => {
    const firstChild = components[0];
    const children = firstChild.children || [];
    const _getConpmnents = (components: Global.Components) => {
      return components.map((options) => {
        const { children, type, props, id } = options;
        const Comp = componentsObject[type];
        const content = children ? (
          children[0] && _getConpmnents(children)
        ) : (
          <Comp {...props}></Comp>
        );
        return (
          <Drag end={dragEnd} begin={dragBegin} data={options} key={id}>
            <Drop
              data={options}
              hover={hoverEvent}
              drop={dropCallback}
              direction={options.direction}
            >
              {content}
            </Drop>
          </Drag>
        );
      });
    };
    return (
      <Drop
        data={firstChild}
        hover={hoverEvent}
        drop={dropCallback}
        className={styles.content}
        direction={firstChild.direction}
      >
        {_getConpmnents(children)}
      </Drop>
    );
  };

  // 删除组件逻辑
  useEffect(() => {
    const keyupCallback = async (e: KeyboardEvent) => {
      const selectedId = DropData.selectedId;
      if (e.code.toLocaleLowerCase() !== 'delete' || !selectedId) return;

      await deleteConfirm('确定删除组件及其子元素?');
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
                {comps.map((comp) => (
                  <Drag data={comp} end={dragEnd} key={comp.type}>
                    {getConpmnentByType(comp.type)}
                  </Drag>
                ))}
              </div>
            );
          })}
        </div>
        <Menu />
        {getEditComponent()}
        <Config
          selectedComp={selectedComp}
          onChange={() => setComponents([...components])}
        />
      </div>
    </DndProvider>
  );
};

export default observer(Comp);
