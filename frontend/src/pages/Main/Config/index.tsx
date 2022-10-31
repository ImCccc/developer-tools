import { Drawer } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import useMobx from '@/stores';
import { observer } from 'mobx-react-lite';

import TableListConfig from '@/components/ComponentConfig/TableList';

const typeMapCompoment = {
  TableList: TableListConfig,
};

const Comp: React.FC<{
  selectedComp: Global.DropComponentProps | undefined;
}> = ({ selectedComp }) => {
  const DropData = useMobx('DropData');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!DropData.selectedId);
  }, [DropData.selectedId]);

  const onClose = () => {
    setOpen(false);
    DropData.selectedId = '';
  };

  useEffect(() => {
    console.log(selectedComp);
  }, [selectedComp]);

  const thisConfig = useMemo(() => {
    if (!selectedComp) return;
    const Component = typeMapCompoment[selectedComp.type];
    if (!Component) return;
    return <Component props={selectedComp.props} />;
  }, [selectedComp]);

  return (
    <Drawer
      open={open}
      title="配置组件属性"
      destroyOnClose
      placement="right"
      onClose={onClose}
    >
      {thisConfig}
    </Drawer>
  );
};

export default observer(Comp);
