import { Button, message } from 'antd';
import { useState, useRef, useCallback, useMemo } from 'react';
import TableList, {
  TableListColumns,
  TableListRef,
} from '@/components/TableList';
import TableSearch, { FieldsProps } from '@/components/TableSearch';
import ModalForm, {
  FormItemListProps,
  ImperativeHandleProps,
} from '@/components/ModalForm';
import {
  AppUpgradeServicePage,
  AppUpgradeServiceAdd,
} from '@/services/smzx/AppUpgradeService';

type ParamsProps = { product_id?: string };

const Comp: React.FC = () => {
  const tableRef = useRef<TableListRef>();
  const modalFormRef = useRef<ImperativeHandleProps>(null);
  const [params, setParams] = useState<ParamsProps>({});

  // 点击查询
  const onSearch = (data: ParamsProps) => {
    setParams({ ...data });
  };

  const onSubmit = useCallback(async (data: SMZX.smzxAppUpgrade) => {
    await AppUpgradeServiceAdd({ app_upgrade: data });
    message.success('上传版本成功!');
    tableRef.current?.refresh();
  }, []);

  const columns = useMemo<TableListColumns<SMZX.smzxAppUpgrade[]>>(() => {
    return [
      {
        title: '设备类型',
        dataIndex: 'product_id',
        render: (product_id) => product_id,
      },
      {
        title: '版本名',
        dataIndex: 'name',
      },
      {
        title: '版本号',
        dataIndex: 'version',
      },
      {
        title: '上传时间',
        dataIndex: 'date_created',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      {
        title: '更新说明',
        dataIndex: 'desc',
      },
      {
        title: '下载',
        align: 'center',
        dataIndex: 'app_url',
        render: (app_url) => (
          <a
            href={app_url}
            onClick={(e) => {
              if (!app_url) e.preventDefault();
              e.stopPropagation();
            }}
          >
            下载
          </a>
        ),
      },
    ];
  }, []);

  const formItemList: FormItemListProps = useMemo(() => {
    return [
      {
        name: 'name',
        label: '版本名称',
        rules: [{ required: true, message: '请输入版本名称!' }],
        props: { placeholder: '请输入版本名称' },
      },
      {
        name: 'version',
        label: '版本号',
        rules: [{ required: true, message: '请输入版本号!' }],
        props: { placeholder: '请输入版本号' },
      },
      {
        name: 'product_id',
        type: 'Select',
        label: '设备类型',
        rules: [{ required: true, message: '请选选择设备类型!' }],
        props: {
          placeholder: '请选选择设备类型',
          options: [],
        },
      },
      {
        name: 'desc',
        label: '更新说明',
        props: { placeholder: '请输入更新说明' },
      },
      {
        name: 'app_url',
        label: '上传应用',
        type: 'Upload',
        rules: [{ required: true, message: '请上传应用!' }],
        props: {
          placeholder: '请上传应用',
          params: {
            bucket: 'smzx',
            object: 'app_upgrade',
          },
        },
      },
    ];
  }, []);

  const fields: FieldsProps = useMemo(() => {
    return [
      {
        label: '设备类型',
        type: 'Select',
        key: 'product_id',
        options: [],
        placeholder: '请选择设备类型',
      },
    ];
  }, []);

  return (
    <div className="common-page">
      <TableSearch
        className="margin-space"
        fields={fields}
        onSearch={onSearch}
        renderButtons={() => (
          <Button onClick={() => modalFormRef.current?.showModal()}>
            新增版本
          </Button>
        )}
      />
      <ModalForm
        title="新增版本"
        ref={modalFormRef}
        onSubmit={onSubmit}
        formItemList={formItemList}
        formProps={{ labelCol: { span: 4 } }}
      ></ModalForm>
      <TableList
        onRef={tableRef}
        columns={columns}
        reqParams={params}
        service={AppUpgradeServicePage}
      />
    </div>
  );
};

export default Comp;
