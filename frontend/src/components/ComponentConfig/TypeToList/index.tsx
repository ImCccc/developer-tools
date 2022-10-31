import { Button, Modal, Input } from 'antd';
import { ColumnsProps } from '@/components/TableColumns';
import { useState } from 'react';
const { TextArea } = Input;

type TypeToListProps = {
  onChange: (data: { columns: any[]; columnsTypes: string }) => void;
};

const placeholderTips = `输入列的ts类型, 严格按照例子的格式:  
  type smzxAppUpgrade =  {
    /** 应用版本id */
    'id': string;
    /** 应用版本名称 */
    'name': string;
    /** 创建毫秒时间戳 */
    'date_created': number;
  }`;

const tsTypeToColumn = (typeString: string) => {
  let columnsTypes = '';

  typeString = typeString.replace(/\s/g, '');

  let index = typeString.indexOf('{');
  if (index > -1) {
    columnsTypes = typeString.slice(0, index - 1);

    if (columnsTypes.startsWith('type')) {
      columnsTypes = columnsTypes.slice(4);
    }

    if (columnsTypes.startsWith('interface')) {
      columnsTypes = columnsTypes.slice(9);
    }

    typeString = typeString.slice(index + 1);
  }

  index = typeString.indexOf('}');
  if (index > -1) {
    typeString = typeString.slice(0, index);
  }

  const columnsArray = typeString.split(';');
  if (!columnsArray.length[columnsArray.length - 1]) {
    columnsArray.pop();
  }

  const columns = columnsArray.reduce((columns, str) => {
    const data = str.replace('/**', '').split('*/');
    // 得到注释 /** 应用版本id */ 中的 "应用版本id"
    const title = data[0];
    // 此时得到: 'version':number
    const column = (data.length > 1 ? data[1] : data[0])
      .replace(/'|"/g, '')
      .split(':');
    const dataIndex = column[0];
    columns.push({ title, dataIndex });
    return columns;
  }, [] as ColumnsProps[]);

  return { columnsTypes, columns };
};

const Comp: React.FC<TypeToListProps> = ({ onChange }) => {
  const [types, setTypes] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    if (types) {
      const { columns, columnsTypes } = tsTypeToColumn(types);
      if (columns && columns.length) onChange({ columns, columnsTypes });
    }
    setTypes('');
  };

  return (
    <>
      <Button
        ghost
        type="primary"
        onClick={() => setIsModalOpen(true)}
        style={{ position: 'absolute', right: '16px', top: '16px' }}
      >
        输入TS类型
      </Button>
      <Modal
        title="TS 类型转列"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <TextArea
          rows={10}
          value={types}
          placeholder={placeholderTips}
          onChange={(e) => setTypes(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default Comp;
