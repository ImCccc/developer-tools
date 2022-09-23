import './index.less';
const Comp: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="breadcrumb">
      <span className="link">主页</span>
      <span className="space">/</span>
      <span>{title}</span>
    </div>
  );
};

export default Comp;
