import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { ColumnType } from 'antd/lib/table';
import { remToNumber } from '@/utils/util';
import { Table, TableProps, Button } from 'antd';

export type TableListColumns<T> = (ColumnType<T> & {
  operList?: { label: string }[];
  timeFormat?: 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss';
})[];

export type TableListProps<T> = {
  columns: TableListColumns<T>;
} & TableProps<any>;

const service = (column: TableListColumns<any>) => {
  const list = [];
  const total = 200;
  for (let i = 0; i < total; i++) {
    list.push(
      column.reduce(
        (data, cur) => {
          data[cur.dataIndex as string] = `数据-${i + 1}`.slice(0, 10);
          return data;
        },
        { id: 'id' + Math.random() },
      ),
    );
  }
  return { list, total };
};

// 表格组件
const TableList: React.FC<TableListProps<any>> = ({ columns }) => {
  // 表格数据
  const [data, setData] = useState<any[]>([]);

  // 数据总数
  const [total, setTotal] = useState<number>(0);

  // 当前页
  const [current, setCurrent] = useState<number>(1);

  // 每页条数
  const [pageSize, setPageSize] = useState<number>(5);

  // table的ref
  const tableRef = useRef<HTMLDivElement>(null);

  // table的scroll
  const [scroll, setScroll] = useState<{ y?: number }>({});

  // 计算column
  const _column = useMemo(() => {
    const cols = columns || [
      {
        title: '文本',
        dataIndex: 'test1',
      },
      {
        title: '时间',
        dataIndex: 'test2',
        timeFormat: 'YYYY-MM-DD',
      },
      {
        operList: [{ label: '编辑' }, { label: '删除' }],
      },
    ];
    for (const column of cols) {
      const { timeFormat, operList } = column;
      if (timeFormat) {
        column.render = () =>
          timeFormat === 'YYYY-MM-DD' ? '2020-09-09' : '2020-09-09 12:00:00';
      }
      // 操作列表
      if (operList) {
        column.align = 'center';
        column.title = '操作';
        column.render = () =>
          operList.map((item: any) => (
            <Button
              type="link"
              key={item.label}
              danger={item.label.includes('删除')}
            >
              {item.label}
            </Button>
          ));
      }
    }

    return cols;
  }, [columns]);

  const getData = useCallback(
    (page: number) => {
      const result = service(_column);
      // console.log(result);
      setData(result.list);
      setTotal(result.total);
      setCurrent(page);
    },
    [_column],
  );

  const onChange = (_page: number, _pageSize: number) => {
    if (pageSize !== _pageSize) {
      getData(1);
      setCurrent(1);
      setPageSize(_pageSize);
    } else {
      getData(_page);
      setCurrent(_page);
    }
  };

  const pagination = { pageSize, total, current, onChange };

  useEffect(() => getData(1), [getData]);

  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      const clientHeight = document.body.clientHeight;
      const tableHeaderHeight = remToNumber(6);
      const tablePaginationHeight = remToNumber(8);
      const tableBodyHeight =
        clientHeight -
        table.offsetTop -
        tableHeaderHeight -
        tablePaginationHeight;
      setScroll({ y: tableBodyHeight - 50 });
    }
  }, []);
  return (
    <Table
      rowKey="id"
      size="small"
      scroll={scroll}
      ref={tableRef}
      dataSource={data}
      columns={_column}
      pagination={pagination}
      style={{ border: '1px solid #ccc' }}
    />
  );
};

export default TableList;
