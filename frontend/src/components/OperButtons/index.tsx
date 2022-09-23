import Tip from '@/components/Tip';
import ConfigLayout from '@/components/ConfigLayout';
import ButtonList from '@/components/ButtonList';

export type ButtonProps = {
  label: string;
};

export type BottonsConfigProps = ButtonProps[];

type OperButtonsProps = {
  buttons: BottonsConfigProps;
  onChange: (buttons: BottonsConfigProps) => void;
};

const Comp: React.FC<OperButtonsProps> = ({ buttons, onChange }) => (
  <ConfigLayout title="顶部按钮配置">
    <div className="main-item">
      <div className="main-label">
        <Tip url="/imgs/6.jpg" />
        <span>所有按钮:</span>
      </div>
      <div className="main-col flex flex-center">
        <ButtonList
          buttons={buttons}
          onChange={(buttons) => onChange(buttons)}
        />
      </div>
    </div>
  </ConfigLayout>
);

export default Comp;
