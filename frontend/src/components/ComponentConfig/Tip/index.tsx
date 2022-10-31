import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import './index.less';

const Comp: React.FC<{
  msg?: string;
  url?: string;
}> = ({ url, msg }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {msg ? (
        <Tooltip placement="top" title={msg}>
          <QuestionCircleOutlined
            onClick={() => url && setShow(true)}
            className="tip-icon"
          />
        </Tooltip>
      ) : (
        <QuestionCircleOutlined
          onClick={() => url && setShow(true)}
          className="tip-icon"
        />
      )}
      {url && (
        <div
          onClick={() => setShow(false)}
          className={classNames('dry-modal', { hide: !show })}
        >
          <img src={url} />
        </div>
      )}
    </>
  );
};

export default Comp;
