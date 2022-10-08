// react dnd api: https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor/
// 放置拖动的组件
import React, { useMemo, useRef } from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';
import DropId from '@/stores';
import { observer } from 'mobx-react-lite';
import styles from './index.module.less';

const Comp: React.FC<Global.DropProps> = ({
  data,
  style,
  drop,
  children,
  className,
  direction = 'column',
}) => {
  const id = useMemo(() => data.id, [data]);

  const dropRef = useRef<HTMLDivElement>(null);

  // 用于判断当前移动的元素，是否包含目标元素
  const isChildren = useRef<boolean>(false);

  const [, droper] = useDrop<Global.DragComponentProps>({
    // 能接受什么东西
    accept: data.accept || ['Item1', 'Item2', 'Item3', 'Item4'],

    // 有东西来了, 会不断触发, props 就是拖动组件传递过来的数据
    hover: (props, monitor) => {
      if (!dropRef.current) return;

      if (monitor.isOver({ shallow: true })) {
        isChildren.current = false;

        let parent = data.parent;
        while (parent) {
          if (parent.id === props.id) {
            isChildren.current = true;
            break;
          }
          parent = parent.parent;
        }

        if (isChildren.current === false) {
          DropId.id = data.id;
        }
      }
    },

    // 东西放下了, 触发一次, props 就是拖动组件传递过来的数据
    drop: (props, monitor) => {
      // 如果移动到自己的子元素中，那么不处理
      if (monitor.isOver({ shallow: true }) && isChildren.current === false) {
        drop && drop(data, props, monitor);
      }
      DropId.id = '';
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
      // console.log(monitor);
    },

    // 可以判断组件能否下, 会不断触发, props 就是拖动组件传递过来的数据
    canDrop: () => {
      return true;
    },
  });

  droper(dropRef);

  return (
    <div
      style={style}
      ref={dropRef}
      className={classNames(
        {
          [styles.empty]: !children,
          [styles.active]: DropId.id === id,
          [styles.drop]: data.canDrop,
        },
        className,
        styles[direction],
      )}
    >
      {children}
      {!children && <span className={styles.add}>请将组件拖到这里</span>}
    </div>
  );
};

export default observer(Comp);
