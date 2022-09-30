import React, { useCallback, useRef, useState } from 'react';
import { message } from 'antd';
import ModalForm from '@/components/ModalForm';
import TableList, {
  TableListRef,
  TableListColumns,
} from '@/components/TableList';
import {
  BroadcastServiceDel,
  BroadcastServiceGet,
  BroadcastServicePage,
  BroadcastServiceUpdate,
} from '@/services/smzx/BroadcastService';

// 新增表格格式
const formItemList = [
  {
    name: 'code',
    label: '播报类型',
    rules: [{ required: true, message: '请输入播报类型!' }],
    props: {
      placeholder: '请输入播报类型',
    },
  },
  {
    name: 'content',
    label: '播报模板',
    rules: [{ required: true, message: '请输入播报模板!' }],
    props: {
      placeholder: '请输入播报模板',
    },
  },
  {
    name: 'name',
    label: '播报人',
    rules: [{ required: true, message: '请输入播报人!' }],
    props: {
      placeholder: '请输入播报人',
    },
  },
];

const Comp: React.FC = () => {
  // 筛选值
  const [filterValue] = useState<Record<string, any>>({});
  // 编辑播报弹框
  const editModalFormRef = useRef<{ showModal: () => void }>(null);
  // 弹窗表单初始值
  const [initialValues, setInitialValues] = useState({});
  // 子组件的ref，可以调用子组件的方法
  const tableRef = useRef<TableListRef>();

  // 表格列
  const columns: TableListColumns<SMZX.smzxBroadcast> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '播报类型',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '播报模板',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '播报人',
      dataIndex: 'name',
      key: 'name',
    },
    {
      operList: [
        {
          label: '编辑',
          callback: async (row) => {
            const { broadcast } = await BroadcastServiceGet({ id: row.id });
            setInitialValues(broadcast);
            editModalFormRef.current?.showModal();
          },
        },
        {
          label: '删除',
          callback: (row) => BroadcastServiceDel({ id: row.id }),
        },
      ],
    },
  ];

  // 提交编辑播报表单
  const edit = useCallback(async (data: any) => {
    // 编辑播报
    const res = await BroadcastServiceUpdate({ broadcast: data });
    if (res) {
      message.success('修改成功');
      // 刷新表格
      tableRef.current?.refresh();
    } else {
      message.warning('修改失败');
    }
  }, []);

  return (
    <div className="common-page">
      <ModalForm
        title="编辑播报"
        onSubmit={edit}
        ref={editModalFormRef}
        formItemList={formItemList}
        initialValues={initialValues}
        formProps={{ labelCol: { span: 4 } }}
      />
      <TableList
        columns={columns}
        onRef={tableRef}
        reqParams={filterValue}
        service={BroadcastServicePage}
        pagination={{ showQuickJumper: true }}
      />
    </div>
  );
};

export default Comp;
