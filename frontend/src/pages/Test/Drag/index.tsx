// 拖动的组件
import React, { CSSProperties } from 'react';
import { useDrag } from 'react-dnd';

type CopmProps = {
  type: string;
  id?: string;
  disabled?: boolean;
  begin?: (param?: any) => void;
  end?: (param?: any) => void;
  style?: CSSProperties;
  [key: string]: any;
};

const Drag: React.FC<CopmProps> = ({
  disabled,
  children,
  begin,
  id,
  type,
  end,
  style,
  ...props
}) => {
  const [, drager] = useDrag({
    type,

    item: () => {
      console.log('useDrag item..........');
      begin?.(type);
      return { type };
    },

    end: () => {
      console.log('useDrag end..........');
      end?.({ type });
    },

    // true 代码能拖拽, false 不能拖拽
    canDrag: () => {
      return !disabled;
    },
  });

  return (
    <div
      id={id}
      {...props}
      style={{ ...style, cursor: disabled ? 'no-drop' : 'move' }}
      ref={drager}
    >
      {children}
    </div>
  );
};

export default Drag;
