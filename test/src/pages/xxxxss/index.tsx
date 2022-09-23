
  import { useState, useMemo, useRef } from 'react';
  import { AppUpgradeServicePage } from '@/services/smzx/AppUpgradeService';
  import TableList, { TableListColumns, TableListRef } from '@/components/TableList';
  import TableSearch, { FieldsProps } from '@/components/TableSearch';
  import ModalForm, { FormItemListProps, ImperativeHandleProps } from '@/components/ModalForm';
  import { Button } from 'antd';

  type ParamsProps = any; // todo.......

  const Comp: React.FC = () => {
    const tableRef = useRef<TableListRef>();
    const modalFormRef = useRef<ImperativeHandleProps>(null);

    const [params, setParams] = useState<ParamsProps>({});

    const columns = useMemo<TableListColumns<SMZX.smzxAppUpgrade[]>>(
      () =>     [
      {
        title: '版本名',
        dataIndex: 'name'
      },
    
      {
        title: '设备类型',
        dataIndex: 'product_id',
        render: (product_id) => product_id,
      },
      
      {
        title: '上传时间',
        dataIndex: 'date_created',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      
      { 
        operList: [
          
          {
            label: '删除',
            callback: (row) => { console.log(row, 'todo.....') },
          },
        
          {
            label: '编辑',
            callback: (row) => { console.log(row, 'todo.....') },
          },
        
        ] 
      },
      ],
      [],
    );

    // 点击查询
    const onSearch = (data: ParamsProps) => {
      setParams({ ...data });
    };
    
    const searchFields: FieldsProps = useMemo(() => {
      return [
      {
        key: 'xxx12222',
        label: '输入框',
        type: 'Input',
        placeholder: '请输入输入框',
      },
      {
        key: 'multiple',
        label: '下拉框多选',
        type: 'Multiple',
        placeholder: '请选择下拉框多选',
        options: [],
        compProps: { mode: 'multiple' },
      },
      {
        key: 'xxx3',
        label: '日期',
        type: 'DatePicker',
        placeholder: '请选择日期',
      },
      {
        key: 'xxx4',
        label: '日期范围',
        type: 'RangePicker',
        placeholder: '请选择日期范围',
      }
    ];
    }, []);

    const formItemList: FormItemListProps = useMemo(() => {
    return [
      {
        type: 'Input',
        name: 'name',
        label: '版本名称',
        props: { placeholder: '请输入版本名称' },
        rules: [{ required: true, message: '请输入版本名称!' }],
      },
      {
        type: 'Select',
        name: 'name',
        label: '版本名称',
        props: { placeholder: '请选择版本名称', options: [ ] },
        rules: [{ required: true, message: '请选择版本名称!' }],
      },
      {
        type: 'Upload',
        name: 'app_url',
        label: '上传应用',
        props: { placeholder: '请上传上传应用', params: {  } },
        rules: [{ required: true, message: '请上传上传应用!' }],
      }
    ];
  }, []);
    const onModalSubmit = async (row: SMZX.smzxAppUpgrade) => {
          console.log(row, 'todo......')
        };

    return (
      <div className="common-page">
        <TableSearch
          className="margin-space"
          fields={searchFields}
          onSearch={onSearch}
          
    renderButtons={() => (<>
      <Button onClick={() => modalFormRef.current?.showModal()}>
        新增
      </Button>
      <Button onClick={() => { console.log('todo.....') }}>删除</Button>
    </>)}
  
        />
        <TableList
          onRef={tableRef}
          columns={columns}
          reqParams={params}
          service={AppUpgradeServicePage}
        />
        <ModalForm
          title="新增xxx"
          ref={modalFormRef}
          formItemList={formItemList}
          onSubmit={onModalSubmit}
          formProps={{ labelCol: { span: 4 } }}
        ></ModalForm>
      </div>
    );
  };
   default Comp;
