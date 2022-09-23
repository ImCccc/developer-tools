import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, InputRef, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonProps } from '@/components/OperButtons';

export type ButtonListProps = {
  buttons: ButtonProps[];
  onChange: (buttons: ButtonProps[]) => void;
};

const Comp: React.FC<ButtonListProps> = ({ buttons, onChange }) => {
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleInputConfirm = () => {
    if (inputValue) {
      if (buttons.find((v) => v.label === inputValue)) {
        message.error('按钮重名了');
        return;
      }
      const cloneData = [...buttons];
      cloneData.push({ label: inputValue });
      onChange(cloneData);
    }
    setInputValue('');
  };

  return (
    <>
      {buttons.map(({ label }, index) => (
        <Tag
          className="dry-tag"
          key={label}
          closable
          onClose={() => {
            const cloneData = [...buttons];
            cloneData.splice(index, 1);
            onChange(cloneData);
          }}
        >
          {label}
        </Tag>
      ))}
      {inputVisible && (
        <Input
          ref={inputRef}
          style={{ width: 78 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleInputConfirm}
          onBlur={() => {
            handleInputConfirm();
            setInputVisible(false);
          }}
        />
      )}
      {!inputVisible && (
        <Tag
          color="geekblue"
          className="dry-tag"
          onClick={() => setInputVisible(true)}
        >
          <PlusOutlined />
          <span>添加</span>
        </Tag>
      )}
    </>
  );
};

export default Comp;
