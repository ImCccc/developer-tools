import { useRef, useState } from 'react';
import { Button, message } from 'antd';
import { JSONclone } from '@/utils/util';
import SearchFields, {
  SearchFieldConfigProps,
} from '@/components/SearchFields';
import TableProps, { TableConfigProps } from '@/components/TableProps';
import ModalForm, { ModalFormConfigProps } from '@/components/ModalForm';
import MenuRoute, { MenuRouteConfigProps } from '@/components/MenuRoute';
import OperButtons, { BottonsConfigProps } from '@/components/OperButtons';
import TableColumns, { ColumnsConfigProps } from '@/components/TableColumns';
import { addPage } from '@/services';
import Breadcrumb from '@/components/Breadcrumb';

type ConfigProps = {
  menuRouteConfig: MenuRouteConfigProps;
  tableConfig: TableConfigProps;
  columnsConfig: ColumnsConfigProps;
  modalFormConfig: ModalFormConfigProps;
  bottonsConfig: BottonsConfigProps;
  searchFieldConfig: SearchFieldConfigProps;
};

const LOCALSTORAGE_KEY = '__config_key__';

const getDefaultConfig = () => {
  const defaultConfig: ConfigProps = {
    menuRouteConfig: {
      menuName: '',
      folderName: '',
      routePath: '',
    },
    tableConfig: {
      hasTableRef: true,
      serviceName: '',
      servicePath: '',
    },
    columnsConfig: {
      columnsTypes: '',
      columns: [{ title: '', dataIndex: '' }],
    },
    modalFormConfig: {
      correlationBtn: '',
      formFields: [],
    },
    bottonsConfig: [],
    searchFieldConfig: [{ key: '', label: '' }],
  };
  return defaultConfig;
};

const getConfigByLocalstorage = () => {
  const config = localStorage.getItem(LOCALSTORAGE_KEY);
  if (config) return JSON.parse(config) as ConfigProps;
  return getDefaultConfig();
};

const Comp: React.FC = () => {
  const defaultConfig = useRef<ConfigProps>(getConfigByLocalstorage());

  const [columnsConfig, setColumnsConfig] = useState<ColumnsConfigProps>(
    defaultConfig.current.columnsConfig,
  );

  const [menuRouteConfig, setMenuRouteConfig] = useState<MenuRouteConfigProps>(
    defaultConfig.current.menuRouteConfig,
  );

  const [searchFieldConfig, setSearchFields] = useState<SearchFieldConfigProps>(
    defaultConfig.current.searchFieldConfig,
  );

  const [bottonsConfig, setButtons] = useState<BottonsConfigProps>(
    defaultConfig.current.bottonsConfig,
  );

  const [tableConfig, setTableConfig] = useState<TableConfigProps>(
    defaultConfig.current.tableConfig,
  );

  const [modalFormConfig, setModalFormConfig] = useState<ModalFormConfigProps>(
    defaultConfig.current.modalFormConfig,
  );

  const getConfig = () => {
    const config: ConfigProps = {
      tableConfig,
      columnsConfig,
      modalFormConfig,
      bottonsConfig,
      menuRouteConfig,
      searchFieldConfig,
    };
    return config;
  };

  const cache = () => {
    const config = getConfig();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(config));
    message.success('缓存成功');
  };

  const reset = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    message.success('重置成功');
    const config = getDefaultConfig();
    setButtons(config.bottonsConfig);
    setTableConfig(config.tableConfig);
    setColumnsConfig(config.columnsConfig);
    setMenuRouteConfig(config.menuRouteConfig);
    setSearchFields(config.searchFieldConfig);
    setModalFormConfig(config.modalFormConfig);
  };

  const save = async () => {
    const config = JSONclone(getConfig());
    const columns = config.columnsConfig.columns;
    config.columnsConfig.columns = columns.map((v, i) => ({
      ...v,
      title: v.title || `title__${i}`,
      dataIndex: v.dataIndex || `dataIndex__${i}`,
    }));

    config.searchFieldConfig = config.searchFieldConfig.map((v, i) => ({
      ...v,
      key: v.key || `key__${i}`,
      label: v.label || `label__${i}`,
    }));

    console.log(JSON.stringify(config, null, 2));
    await addPage(config);
    message.success('页面新建成功!');
  };

  return (
    <div className="main-page">
      <Breadcrumb title="新增table" />
      <div className="scroll">
        <TableColumns
          columnsConfig={columnsConfig}
          onChange={(config) => setColumnsConfig(config)}
        />
        <MenuRoute
          menuRouteConfig={menuRouteConfig}
          onChange={(config) => setMenuRouteConfig(config)}
        />
        <ModalForm
          buttons={bottonsConfig}
          modalFormConfig={modalFormConfig}
          onChange={(config) => setModalFormConfig(config)}
        />
        <OperButtons
          buttons={bottonsConfig}
          onChange={(config) => setButtons(config)}
        />
        <SearchFields
          searchFields={searchFieldConfig}
          onChange={(config) => setSearchFields(config)}
        />
        <TableProps
          tableConfig={tableConfig}
          onChange={(config) => setTableConfig(config)}
        />
      </div>
      <div className="page-foot">
        <Button onClick={reset}>重置页面</Button>
        <Button onClick={cache}>暂存页面</Button>
        <Button onClick={save} type="primary">
          添加页面
        </Button>
      </div>
    </div>
  );
};

export default Comp;
