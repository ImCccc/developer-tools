const mockConfig = {
  columnConfig: {
    columnsTypes: 'SMZX.smzxAppUpgrade',
    columnsTpl: `[
      {
        title: '设备类型',
        dataIndex: 'product_id',
      },
      {
        title: '上传时间',
        dataIndex: 'date_created',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
      },
    ]`,
  },

  tableConfig: {
    hasTableRef: true,
    service: 'AppUpgradeServicePage',
    servicePath: 'smzx/AppUpgradeService',
  },

  bottonsConfig: {
    buttonsTpl: `
      renderButtons={() => (
        <>
          <Button onClick={() => modalFormRef.current?.showModal()}>
            新增版本
          </Button>
          <ModalForm
            title="新增版本"
            ref={modalFormRef}
            onModalSubmit={onModalSubmit}
            formProps={{ labelCol: { span: 4 } }}
            formItemList={formItemList}
          ></ModalForm>
        </>
      )}
    `,
    formItemListTpl: `
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
          }
        ];
      }, []);
    `,
  },

  searchFieldConfig: {
    searchFields: `[
      {
        label: '设备类型',
        type: 'Select',
        key: 'product_id',
        options: [],
        placeholder: '请选择设备类型',
      },
    ]`,
  },
};

const allConfig = {
  menuRouteConfig: {
    menuName: '管理',
    folderName: 'xxxxss',
    routePath: '/routePath/xxxx',
  },
  columnsConfig: {
    columnsTypes: 'SMZX.smzxAppUpgrade',
    columns: [
      {
        title: '版本名',
        dataIndex: 'name',
      },
      {
        title: '设备类型',
        dataIndex: 'product_id',
        type: 'render',
      },
      {
        title: '上传时间',
        dataIndex: 'date_created',
        type: 'date',
        timeFormat: 'YYYY-MM-DD HH:mm:ss',
      },
      {
        title: '操作',
        type: 'oper',
        buttons: [{ label: '删除' }, { label: '编辑' }],
      },
    ],
  },
  tableConfig: {
    hasTableRef: true,
    serviceName: 'AppUpgradeServicePage',
    servicePath: 'smzx/AppUpgradeService',
  },
  bottonsConfig: [{ label: '新增' }, { label: '删除' }],
  modalFormConfig: {
    correlationBtn: '新增',
    formFields: [
      {
        name: 'name',
        label: '版本名称',
        isRequired: true,
      },
      {
        name: 'name',
        label: '版本名称',
        isRequired: true,
        type: 'Select',
      },
      {
        name: 'app_url',
        label: '上传应用',
        isRequired: true,
        type: 'Upload',
      },
    ],
  },
  searchFieldConfig: [
    {
      label: '输入框',
      type: 'Input',
      key: 'xxx12222',
    },
    {
      label: '下拉框多选',
      type: 'Multiple',
      key: 'multiple',
    },
    {
      label: '日期',
      type: 'DatePicker',
      key: 'xxx3',
    },
    {
      label: '日期范围',
      type: 'RangePicker',
      key: 'xxx4',
    },
  ],
};

// console.log(getButtonsTpl(allConfig.bottonsConfig, modalFormConfig.correlationBtn));
// console.log(getColumnTpl(allConfig.columnsConfig.columns));
// console.log(getSearchFieldsTpl(allConfig.searchFieldConfig));
// console.log(getFormItemListTpl(allConfig.bottonsConfig));
