// react dnd api: https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor/
// 放置拖动的组件
import classNames from 'classnames';
import React, { CSSProperties, useRef } from 'react';
import { useDrop } from 'react-dnd';
import styles from './index.module.less';

type Node_Props = any;

type CopmProps = {
  id?: string;
  accept?: string[];
  style?: CSSProperties;
  drop?: (props: Node_Props, monitor?: any, element?: HTMLDivElement) => void;
  hover?: (props?: Node_Props, monitor?: any, element?: HTMLDivElement) => void;
  className?: string;
  [key: string]: any;
};

const Comp: React.FC<CopmProps> = ({
  drop,
  hover,
  accept = [],
  children,
  id,
  style,
  className,
}) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const [, droper] = useDrop<Node_Props>({
    // 能接受什么东西
    accept,

    // 有东西来了, 会不断触发, props 就是拖动组件传递过来的数据
    hover: (props, monitor) => {
      if (!dropRef.current) return;
      hover?.(props, monitor, dropRef.current);
    },

    // 东西放下了, 触发一次, props 就是拖动组件传递过来的数据
    drop: (props, monitor) => {
      // console.log('useDrop 东西放下了.........', monitor);

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
      drop?.(props);
    },

    // 可以判断组件能否下, 会不断触发, props 就是拖动组件传递过来的数据
    canDrop: (props, monitor) => {
      return true;
    },
  });

  droper(dropRef);

  return (
    <div
      id={id}
      style={style}
      ref={dropRef}
      className={classNames(styles.wrap, className, {
        [styles.empty]: !children,
      })}
    >
      {children}
      {!children && <span className={styles.add}>请将组件拖到这里</span>}
    </div>
  );
};

export default Comp;
