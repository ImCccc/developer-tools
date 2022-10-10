// 拖动的组件
import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';

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
    <div style={style} id={data.id} ref={drager} className={className}>
      {children}
    </div>
  );
};

export default Drag;
