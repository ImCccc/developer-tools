import { Drawer } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import useMobx from '@/stores';
import { observer } from 'mobx-react-lite';
import TableListConfig from '@/components/ComponentConfig/TableList';

const typeMapCompoment = {
  TableList: TableListConfig,
};

const Comp: React.FC<{
  onChange: (config: any) => void;
  selectedComp: Global.DropComponentProps | undefined;
}> = ({ selectedComp, onChange }) => {
  const DropData = useMobx('DropData');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!DropData.selectedId);
  }, [DropData.selectedId]);

  const onClose = () => {
    setOpen(false);
    DropData.selectedId = '';
  };

  const thisConfig = useMemo(() => {
    if (!selectedComp) return;
    const Component = typeMapCompoment[selectedComp.type];
    if (!Component) return;
    return <Component onChange={onChange} selectedComp={selectedComp} />;
  }, [onChange, selectedComp]);

  return (
    <Drawer
      width={''}
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
