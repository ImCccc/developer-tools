// 拖动的组件
import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import DropId from '@/stores';
import { observer } from 'mobx-react-lite';

const Drag: React.FC<Global.DragProps> = ({
  disabled,
  className,
  children,
  end,
  begin,
  data,
}) => {
  const type = useMemo(() => data.type, [data]);

  const [, drager] = useDrag({
    type: type,

    item: () => {
      begin?.({ ...data });
      return { ...data };
    },

    end: () => {
      end?.({ ...data });
      DropId.id = '';
    },

    // true 代码能拖拽, false 不能拖拽
    canDrag: () => {
      if (data.canDrag === false) return false;
      return !disabled;
    },
  });

  return (
    <div id={data.id} ref={drager} className={className}>
      {children}
    </div>
  );
};

export default observer(Drag);
