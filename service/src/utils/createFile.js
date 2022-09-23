const Space_2 = "  ";
const Space_4 = "    ";
const Space_6 = "      ";
const Space_8 = "        ";
const PAGE_TPL = `
import { useState, useMemo, __useRef_import__ } from 'react';
import { __service__ } from '@/services/__path__';
import TableList, { TableListColumns, __TableListRef_import__ } from '@/components/TableList';
import TableSearch, { FieldsProps } from '@/components/TableSearch';
__ModalForm_import__
__Button_import__

type ParamsProps = { 
  [key: string]: any 
};

const Comp: React.FC = () => {
  __TableListRef_use__
  __modalFormRef_use__
  const [tableParams, setTableParams] = useState<TableParamsProps>({});

  const columns = useMemo<TableListColumns<__columnsTypes__[]>>(
    () => __columnsTpl__,
    [],
  );

  // 点击查询
  const onSearch = (params: TableParamsProps) => {
    setTableParams({ ...params });
  };
  
  const searchFields: FieldsProps = useMemo(() => {
    return __searchFields__;
  }, []);

  __formItemList__

  __onModalSubmit__

  return (
    <div className="common-page">
      <TableSearch
        className="margin-space"
        fields={searchFields}
        onSearch={onSearch}
        __renderButtons__
      />
      <TableList
        __onRef__
        columns={columns}
        reqParams={tableParams}
        service={__service__}
      />
      __ModalForm__
    </div>
  );
};

export default Comp;`;

// 生成查询条件的模板
const getSearchFieldsTpl = (searchFields) => {
  if (!searchFields || !searchFields.length) return;
  let tpl = searchFields.map((field) => {
    const { key, label, type } = field;
    let operTips = type === "Input" ? "输入" : "选择";
    const itemProps = [
      `${Space_6}{`,
      `${Space_8}key: '${key}',`,
      `${Space_8}label: '${label}',`,
      `${Space_8}type: '${type || "Input"}',`,
      `${Space_8}placeholder: '请${operTips}${label}',`,
    ];

    // 下拉单选选
    if (type === "Select") {
      itemProps.push(`${Space_8}options: [],`);
    }

    // 下拉多选
    if (type === "Multiple") {
      itemProps.push(`${Space_8}options: [],`);
      itemProps.push(`${Space_8}compProps: { mode: 'multiple' },`);
    }

    itemProps.push(`${Space_6}}`);
    return itemProps.join("\n");
  });

  return `[\n${tpl.join(",\n")}\n${Space_4}]`;
};

// 生成弹窗表单的模板
const getFormItemListTpl = (formFields) => {
  if (!formFields || !formFields.length) return;
  let tpl = formFields.map((field) => {
    const { name, label, isRequired, type } = field;
    let operTips = "输入";
    let compProps = `{ placeholder: '请输入${label}' }`;
    if (type === "Select") {
      operTips = "选择";
      compProps = `{ placeholder: '请选择${label}', options: [ ] }`;
    } else if (type === "Upload") {
      operTips = "上传";
      compProps = `{ placeholder: '请上传${label}', params: {  } }`;
    }
    const itemProps = [
      `${Space_6}{`,
      `${Space_8}type: '${type || "Input"}',`,
      `${Space_8}name: '${name}',`,
      `${Space_8}label: '${label}',`,
      `${Space_8}props: ${compProps},`,
    ];
    if (isRequired) {
      itemProps.push(
        `${Space_8}rules: [{ required: true, message: '请${operTips}${label}!' }],`
      );
    }
    itemProps.push(`${Space_6}}`);
    return itemProps.join("\n");
  });
  return `const formItemList: FormItemListProps = useMemo(() => {
    return [\n${tpl.join(",\n")}\n${Space_4}];
  }, []);`;
};

// 动态生成table列模板
const getColumnTpl = (columns) => {
  if (!columns || !columns.length) return;
  const tpls = columns.map((col) => {
    const { type, dataIndex, title, timeFormat, buttons } = col;
    if (type === "render") {
      return `
      {
        title: '${title}',
        dataIndex: '${dataIndex}',
        render: (${dataIndex}) => ${dataIndex},
      },`;
    }

    if (type === "date") {
      return `
      {
        title: '${title}',
        dataIndex: '${dataIndex}',
        timeFormat: '${timeFormat || "YYYY-MM-DD HH:mm:ss"}',
      },`;
    }

    if (type === "oper") {
      const btnTpl = buttons.map(
        (btn) => `
          {
            label: '${btn.label}',
            callback: (row) => { console.log(row, 'todo.....') },
          },`
      );
      return `
      { 
        operList: [${btnTpl.join("")}\n${Space_8}] 
      },`;
    }

    return `
      {
        title: '${title}',
        dataIndex: '${dataIndex}'
      },`;
  });
  return `[${tpls.join("")}\n${Space_4}]`;
};

// 生成查询条件上的按钮模板
const getButtonsTpl = (buttons, correlationBtn) => {
  if (!buttons || !buttons.length) return "";
  let btnTpl = buttons.map((btn) => {
    const { label } = btn;
    if (label === correlationBtn) {
      return `<Button onClick={() => modalFormRef.current?.showModal()}>
        ${Space_6}${label}
        ${Space_4}</Button>
        ${Space_4}`;
    }
    return `<Button onClick={() => { console.log('todo.....') }}>${label}</Button>`;
  });
  return `renderButtons={() => (
          <>
            ${btnTpl.join("")}
          </>
        )}`;
};

// 格式化配置, 生成所需的模板
const getConfig = (allConfig) => {
  const {
    tableConfig,
    bottonsConfig,
    columnsConfig,
    modalFormConfig,
    searchFieldConfig,
  } = allConfig;

  return {
    columnConfig: {
      columnsTypes: columnsConfig.columnsTypes,
      columnsTpl: getColumnTpl(columnsConfig.columns),
    },
    tableConfig: {
      hasTableRef: false,
      serviceName: "",
      servicePath: "",
      ...tableConfig,
    },
    bottonsConfig: {
      buttonsTpl: getButtonsTpl(bottonsConfig, modalFormConfig.correlationBtn),
    },
    modalFormConfig: {
      formItemListTpl: getFormItemListTpl(modalFormConfig.formFields),
    },
    searchFieldConfig: {
      searchFields: getSearchFieldsTpl(searchFieldConfig),
    },
  };
};

const getPageTsx = (allConfig) => {
  const config = getConfig(allConfig);
  let str = PAGE_TPL;

  const {
    tableConfig,
    columnConfig,
    bottonsConfig,
    modalFormConfig,
    searchFieldConfig,
  } = config;

  const { buttonsTpl } = bottonsConfig;
  const { searchFields } = searchFieldConfig;
  const { formItemListTpl } = modalFormConfig;
  const { columnsTypes, columnsTpl } = columnConfig;
  const { hasTableRef, serviceName, servicePath } = tableConfig;

  if (hasTableRef) {
    str = str
      .replaceAll("__TableListRef_import__", "TableListRef")
      .replaceAll("__onRef__", "onRef={tableRef}")
      .replaceAll("__useRef_import__", "useRef")
      .replaceAll(
        "__TableListRef_use__",
        "const tableRef = useRef<TableListRef>();"
      );
  }

  if (serviceName) {
    str = str.replaceAll("__service__", serviceName);
  }
  if (servicePath) {
    str = str.replaceAll("__path__", servicePath);
  }

  if (formItemListTpl) {
    str = str
      .replaceAll("__formItemList__", formItemListTpl)
      .replaceAll(
        "__ModalForm_import__",
        `import ModalForm, { FormItemListProps, ImperativeHandleProps } from '@/components/ModalForm';`
      )
      .replaceAll(
        "__modalFormRef_use__",
        `const modalFormRef = useRef<ImperativeHandleProps>(null);`
      )
      .replaceAll(
        "__ModalForm__",
        `<ModalForm
        title="新增xxx"
        ref={modalFormRef}
        formItemList={formItemList}
        onSubmit={onModalSubmit}
        formProps={{ labelCol: { span: 4 } }}
      ></ModalForm>`
      )
      .replaceAll(
        "__onModalSubmit__",
        `const onModalSubmit = async (row: ${columnsTypes}) => {\n${Space_4}console.log(row, 'todo......');\n  };`
      );
  }

  if (buttonsTpl) {
    str = str
      .replaceAll("__renderButtons__", buttonsTpl)
      .replaceAll("__Button_import__", `import { Button } from 'antd';`);
  }

  str = str.replaceAll("__columnsTpl__", columnsTpl);
  if (columnsTypes) {
    str = str.replaceAll("__columnsTypes__", columnsTypes);
  }

  str = str.replaceAll("__searchFields__", searchFields);

  return str.replace(/__\w*__/g, "");
};

module.exports = { getPageTsx };
