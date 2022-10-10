// react dnd api: https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor/
import useMobx from '@/stores';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';
import styles from './index.module.less';
import { observer } from 'mobx-react-lite';
import { allTypes, VirtualId } from '@/components/DragList';
import React, { useCallback, useMemo, useRef } from 'react';

const Comp: React.FC<Global.DropProps> = ({
  data,
  drop,
  hover,
  style,
  children,
  direction = 'column',
}) => {
  const DropData = useMobx('DropData');

  const dropRef = useRef<HTMLDivElement>(null);

  const id = useMemo(() => data.id, [data]);

  // 鼠标位置, 实在目标元素的上面, 还是下面
  const mousePosition = useRef<string>('');

  const [, droper] = useDrop<Global.DragComponentProps>({
    // 能接受什么东西
    accept: data.accept || allTypes,

    // 有东西来了, 会不断触发, props 就是拖动组件传递过来的数据
    hover: (dragData, monitor) => {
      if (!dropRef.current) return;

      // 不是目标元素上的hover钩子, 直接返回
      if (!monitor.isOver({ shallow: true })) return;

      // 拖到自己区域,直接返回
      if (id === dragData.id) return;

      // 拖动到虚拟节点,直接返回
      if (id === VirtualId) return;

      let parent = data.parent;
      while (parent) {
        if (parent.id === dragData.id) return;
        parent = parent.parent;
      }

      const { bottom, top, left, right } =
        dropRef.current.getBoundingClientRect();
      let middle = (bottom - top) / 2;
      let y = monitor.getClientOffset()?.y || 0;
      if (!y) return;
      let thisMousePosition = middle > y - top ? 'up' : 'down';

      if (data.direction === 'row') {
        middle = (right - left) / 2;
        y = monitor.getClientOffset()?.x || 0;
        thisMousePosition = middle > y - left ? 'left' : 'right';
      }

      if (DropData.id !== id) {
        DropData.id = id;
        hover && hover(data, dragData, thisMousePosition);
      } else {
        if (thisMousePosition === mousePosition.current) return;
        mousePosition.current = thisMousePosition;
        hover && hover(data, dragData, thisMousePosition);
      }
    },

    // 东西放下了, 触发一次, props 就是拖动组件传递过来的数据
    drop: (dragData, monitor) => {
      if (!dropRef.current) return;
      if (!monitor.isOver({ shallow: true })) return;
      drop && drop(data, dragData, monitor);
    },

    // 可以判断组件能否下, 会不断触发, props 就是拖动组件传递过来的数据
    canDrop: () => true,
  });

  droper(dropRef);

  const click = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      DropData.selectedId = id || '';
    },
    [DropData, id],
  );

  return (
    <div
      ref={dropRef}
      onClick={click}
      style={{
        ...style,
        cursor: data.canDrag ? 'move' : '',
        border: DropData.selectedId === id ? '1px solid #2196f3' : '',
      }}
      className={classNames({
        // [styles.active]: DropData.id === id,
        [styles[direction]]: true,
        [styles.empty]: !children,
        [styles.drop]: data.canDrop,
        [styles.virtual]: id === VirtualId,
      })}
    >
      {children || '请将组件拖到这里'}
    </div>
  );
};

export default observer(Comp);

/*
判断当前放置的目标，是否在组件的上方，
例子: 组件A, 嵌套组件B, A 和 B 都能放置目标, 如果拖动目标放在组件B上, 那么:
A 和 B 组件都会触发drop钩子, 组件B monitor.isOver() = true, A = false
*/
//  console.log('monitor.isOver():', monitor.isOver());

/*
例子: 组件A, 嵌套组件B, A 和 B 都能放置目标, 如果拖动目标放在组件B上, 
如果组件 A, B 的 drop 钩子返回 123, 那么:
1. 先执行组件 B 的 drop 钩子, 组件 B drop 钩子的 monitor.getDropResult() = null
1. 后执行组件 A 的 drop 钩子, 组件 A drop 钩子的 monitor.getDropResult() = 123
*/
// console.log('monitor.getDropResult():', monitor.getDropResult());

/*
didDrop（）如果某个放置目标已处理放置事件，则返回true，否则返回false。
即使目标未返回删除结果，didDrop（）也会返回true。
在drop（）中使用它来测试是否有任何嵌套的drop目标已经处理了该drop。
简单来说就是: source 是否已经 drop 在 target 上, 
*/
// console.log('monitor.didDrop():', monitor.didDrop());

/*
getClientOffset: 当前鼠标指针, 相对于浏览器窗口的距离
console.log('getClientOffset():', monitor.getClientOffset());

getInitialClientOffset: 返回当前拖动操作开始时, 鼠标指针的 {x，y} 客户端偏移量。
console.log(
'getInitialClientOffset():',
monitor.getInitialClientOffset(),
);

getInitialSourceClientOffset: 当前拖动组件的最外层 DOM 节点的 {x，y} 客户端偏移量。如果未拖动任何项，则返回零。
console.log(
'getInitialSourceClientOffset():',
monitor.getInitialSourceClientOffset(),
);

getDifferenceFromInitialOffset: 返回拖动开始的鼠标指针偏移量和拖动结束的偏移量的差值。
如果拖动时候鼠标指针的偏移量是 10, 10, 拖动结束鼠标指针的偏移量是 100, 100, 那么返回 {x，y};
console.log(
'getDifferenceFromInitialOffset():',
monitor.getDifferenceFromInitialOffset(),
);

getSourceClientOffset: 难明
console.log('getSourceClientOffset():', monitor.getSourceClientOffset());
*/

// console.log(dropRef.current?.getBoundingClientRect());
