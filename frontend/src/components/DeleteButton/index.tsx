import { Button } from 'antd';
const Comp: React.FC<{ onClick: () => void; disabled?: boolean }> = ({
  onClick,
  disabled,
}) => (
  <Button danger type="link" disabled={disabled} onClick={onClick}>
    删除
  </Button>
);

export default Comp;
