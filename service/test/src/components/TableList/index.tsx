/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Table, TableProps, ButtonProps, Button, message } from 'antd';
import type { ColumnType } from 'antd/lib/table';
import dayjs from 'dayjs';
import { deleteConfirm, remToNumber } from '@/utils/util';

export type TableListColumns<T> = (ColumnType<T> & {
  operList?: {
    confirmKey?: string;
    buttonProps?: ButtonProps;
    label: string;
    callback: (row: T) => any;
  }[];

  /** 填时间格式，例如"yyyy-mm-dd" */
  timeFormat?:
    | 'YYYY/MM/DD'
    | 'YYYY-MM-DD'
    | 'YYYY/MM/DD HH:mm'
    | 'YYYY-MM-DD HH:mm'
    | 'YYYY/MM/DD HH:mm:ss'
    | 'YYYY-MM-DD HH:mm:ss';
})[];

export type TableListProps<T> = {
  // 表格列
  columns: TableListColumns<T>;
  // api
  service: (...args: any) => Promise<any>;
  // 筛选值
  reqParams?: Record<string, any>;
  // 用于暴露方法
  onRef?: React.MutableRefObject<TableListRef | undefined>;
  // 数据处理
  formatData?: (data: Record<string, any>) => Record<string, any>;
} & TableProps<any>;

// 暴露给父组件的方法
export type TableListRef = {
  refresh: () => void;
};

// 表格组件
const TableList: React.FC<TableListProps<any>> = ({
  columns,
  service,
  reqParams,
  onRef,
  formatData,
  ...props
}) => {
  // 表格数据
  const [data, setData] = useState<any[]>([]);
  // 数据总数
  const [total, setTotal] = useState<number>(0);
  // 当前页
  const [current, setCurrent] = useState<number>(1);
  // 每页条数
  const [pageSize, setPageSize] = useState<number>(20);
  // table的ref
  const tableRef = useRef<HTMLDivElement>(null);
  // table的scroll
  const [scroll, setScroll] = useState<{ y?: number }>({});
  // loading
  const [loading, setLoading] = useState<boolean>(false);

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
      setScroll({ y: tableBodyHeight - 10 });
    }
  }, []);

  // 获取表格数据API
  const getData = useCallback(
    async (page: number, _pageSize: number) => {
      setLoading(true);
      try {
        let result = await service({
          page_index: page,
          page_size: _pageSize,
          ...reqParams,
        });
        setLoading(false);
        // 如果用户用了数据处理
        if (formatData) result = formatData(result);
        setLoading(false);
        setData(result.list);
        setTotal(result.total);
        setCurrent(page);
      } catch (error) {
        setLoading(false);
      }
    },
    [reqParams, formatData, service],
  );

  // 获取列表数据（初始化时 和 筛选值改变后触发）
  useEffect(() => {
    getData(1, pageSize);
  }, [getData, pageSize]);

  // 暴露刷新表格数据的方法
  useImperativeHandle(onRef, () => {
    return {
      refresh: () => getData(current, pageSize),
    };
  });

  // 接收分页的 props
  let paginationProps = {};
  if (props.pagination) {
    paginationProps = props.pagination;
  }

  // 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
  const onChange = async (_page: number, _pageSize: number) => {
    // 如果 pageSize 变了
    if (pageSize !== _pageSize) {
      // 返回第一页
      await getData(1, _pageSize);
      setCurrent(1);
      setPageSize(_pageSize);
      return;
    }
    await getData(_page, _pageSize);
    setCurrent(_page);
  };

  // 计算column
  const _column = useMemo(() => {
    for (const column of columns) {
      const { ellipsis, timeFormat, render, operList } = column;
      column.ellipsis = ellipsis !== false;
      // 格式化时间
      if (timeFormat && !render) {
        column.render = (date) =>
          +date > 10000 ? dayjs(+date).format(timeFormat) : '';
      }

      // 操作列表
      if (operList && !render) {
        column.align = column.align || 'center';
        column.title = column.title || '操作';
        column.render = (_, row) =>
          operList.map(({ label, callback, confirmKey, buttonProps }) => {
            const isDelete = label.includes('删除');

            const operClick = async () => {
              if (!isDelete) return callback(row);
              await deleteConfirm(
                `确定要删除${confirmKey ? `"${row[confirmKey]}"` : ''}?`,
              );
              try {
                await callback(row);
                message.success('删除成功!');
                getData(current, pageSize);
              } catch (error) {}
            };

            return (
              <Button
                type="link"
                key={label}
                danger={isDelete}
                {...buttonProps}
                onClick={operClick}
              >
                {label}
              </Button>
            );
          });
      }
    }
    return columns;
  }, [columns, current, getData, pageSize]);

  return (
    <Table
      rowKey="id"
      scroll={scroll}
      {...props}
      pagination={{
        pageSize,
        ...paginationProps,
        current,
        total,
        onChange,
      }}
      ref={tableRef}
      dataSource={data}
      columns={_column}
      loading={loading}
    />
  );
};

export default TableList;
