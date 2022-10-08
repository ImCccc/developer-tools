// 拖动的组件
import React, { useMemo, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';
import styles from './index.module.less';

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
  <div style={{ border: '1px solid red', padding: '40px' }}>布局组件</div>
);

const componentsObject = {
  Item1,
  Item2,
  Item3,
  Item4,
};

const conponentList: Global.DragComponentProps[] = [
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
    type: 'Item4', // 组件类型
    canDrag: true,
    canDrop: true,
  },
];

const getDefaultValue = () => {
  const defaultValue: Global.Components = [
    {
      id: '1',
      canDrag: false, // 能否拖动
      canDrop: true, // 能否放置拖动组件
      accept: ['Item1', 'Item2', 'Item3', 'Item4'],
      type: 'Item4', // 组件类型
      props: {}, // 组件的属性
      children: [
        {
          id: '1-1',
          canDrag: true, // 能否拖动
          canDrop: true, // 能否放置拖动组件
          accept: ['Item1', 'Item2', 'Item3', 'Item4'],
          type: 'Item4', // 组件类型
          props: {}, // 组件的属性
          children: [
            {
              id: '1-1-1',
              canDrag: true, // 能否拖动
              canDrop: true, // 能否放置拖动组件
              accept: ['Item1', 'Item2', 'Item3', 'Item4'],
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
        if (children && children.length) {
          initComponentsData(children);
        }
      });
    };
    initComponentsData(components);
    return idMapComponent as { [key: string]: Global.DropComponentProps };
  }, [components]);

  const drop = (
    dropData: Global.DropComponentProps,
    dragData: Global.DragComponentProps,
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
        children: dragData.canDrop ? [] : undefined,
      };

      // 拖动到布局组件中，默认放到布局组件的第一个子元素
      if (dropData.canDrop) {
        const parent = idMapComponent[dropData.id];
        const children = parent.children;
        if (children) {
          addOptions.parent = parent;
          children.unshift(addOptions);
          setComponents([...components]);
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
        const deleteIndex = children.findIndex((v) => v.id === dragData.id);
        // 先在原来的位置上删除
        const moveItem = children.splice(deleteIndex, 1)[0];

        // 拖动到布局组件中，默认放到布局组件的第一个子元素
        if (dropData.canDrop) {
          const newParent = idMapComponent[dropData.id];
          const children = newParent.children;
          if (newParent && children) {
            moveItem.parent = newParent;
            children?.unshift(moveItem);
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
            <Drop drop={drop} data={options}>
              {children && !!children.length && getConpmnents(children)}
            </Drop>
          </Drag>
        );
      }

      return (
        <Drag data={options} key={id}>
          <Drop drop={drop} data={options}>
            <Comp {...props}></Comp>
          </Drop>
        </Drag>
      );
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.page}>
        <div className={styles.side}>
          {conponentList.map((comp) => {
            const Comps = componentsObject[comp.type];
            return (
              <Drag key={comp.type} data={comp}>
                <Comps />
              </Drag>
            );
          })}
        </div>
        <div className={styles.content}>{getConpmnents(components)}</div>
      </div>
    </DndProvider>
  );
};

export default Comp;
