import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const Comp: React.FC<{ onClick: () => void; disabled?: boolean }> = ({
  onClick,
  disabled,
}) => (
  <Button size="small" type="primary" disabled={disabled} onClick={onClick}>
    <PlusOutlined />
  </Button>
);

export default Comp;
