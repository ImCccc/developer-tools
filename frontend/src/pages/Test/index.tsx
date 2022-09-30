// 拖动的组件
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from './Drag';
import Drop from './Drop';

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
  <div style={{ border: '1px solid red', padding: '40px' }}>
    我可以放东西, 也可以拖动
  </div>
);

const componentsObject = {
  Item1,
  Item2,
  Item3,
  Item4,
};

const components = [
  {
    id: 'id-' + Math.random(),
    canDrag: true,
    canDrop: false,
    type: 'Item1',
    props: {},
  },
  {
    id: 'id-' + Math.random(),
    canDrag: true, // 能否拖动
    canDrop: true, // 能否放置拖动组件
    accept: ['Item1', 'Item2', 'Item3', 'Item4'],
    type: 'Item4', // 组件类型
    props: {}, // 组件的属性
    children: [
      {
        id: 'id-' + Math.random(),
        canDrag: true,
        canDrop: false,
        type: 'Item1',
        props: {},
      },
      {
        id: 'id-' + Math.random(),
        canDrag: true,
        canDrop: false,
        type: 'Item3',
        props: {},
      },
    ],
  },
  {
    id: 'id-' + Math.random(),
    canDrag: true,
    canDrop: false,
    type: 'Item2',
    props: {},
  },
];

const idMapComponent = {};
const initComponentsData = (components: any) => {
  components.forEach((options: any) => {
    const { children, id } = options;
    idMapComponent[id] = options;
    if (children && children.length) {
      initComponentsData(children);
    }
  });
};
initComponentsData(components);

const getConpmnents = (components: any) => {
  return components.map((options: any) => {
    const { children, type, canDrop, accept, props, id } = options;
    const Comp = componentsObject[type];
    if (children && children.length && canDrop) {
      return (
        <Drag key={id} type={type} id={id}>
          <Drop accept={accept}>{getConpmnents(children)}</Drop>
        </Drag>
      );
    }
    return (
      <Drag key={id} type={type} id={id}>
        <Comp {...props}></Comp>
      </Drag>
    );
  });
};

const Comp: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ margin: '10px 0', padding: '10px', display: 'flex' }}>
        <Drag type="Item1">
          <Item1></Item1>
        </Drag>
        <Drag type="Item2">
          <Item2></Item2>
        </Drag>
        <Drag type="Item3">
          <Item3></Item3>
        </Drag>
        <Drag type="Item4">
          <Item4></Item4>
        </Drag>
      </div>
      <Drop id="id-11" accept={['Item1', 'Item2', 'Item3', 'Item4']}>
        {getConpmnents(components)}
      </Drop>
    </DndProvider>
  );
};

export default Comp;
