import { Collapse } from 'antd';
import React, { ReactNode } from 'react';
const { Panel } = Collapse;

const Comp: React.FC<{
  title: string;
  children: ReactNode;
}> = ({ children, title }) => (
  <Collapse className="relative" defaultActiveKey={['1']} bordered={false}>
    <Panel header={title} key="1">
      {children}
    </Panel>
  </Collapse>
);

export default Comp;
