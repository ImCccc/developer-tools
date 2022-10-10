// 拖动的组件
import { useDrag } from 'react-dnd';
import React, { useMemo } from 'react';
import { VirtualId } from '@/components/DragList';

const Drag: React.FC<Global.DragProps> = ({
  disabled,
  className,
  children,
  end,
  begin,
  data,
  style,
}) => {
  const type = useMemo(() => data.type, [data]);

  const [, drager] = useDrag({
    type: type,

    item: () => {
      begin?.(data);
      return data;
    },

    end: () => {
      end?.(data);
    },

    // true 代码能拖拽, false 不能拖拽
    canDrag: () => {
      if (data.canDrag === false) return false;
      return !disabled;
    },
  });

  return (
    <div
      ref={drager}
      style={style}
      className={className}
      id={data.id === VirtualId ? undefined : data.id}
    >
      {children}
    </div>
  );
};

export default Drag;
