import { allTypes } from '@/components/DragList';
import { Modal, ModalFuncProps } from 'antd';

export function updateObjectByString<T>(object: T, keys: string, value: any) {
  if (!object) return object;
  if (typeof object === 'string' || typeof object === 'number') return object;

  const cloneData = (
    object instanceof Array ? [...object] : { ...object }
  ) as T;

  const keysArr = keys.split('.');
  if (keysArr.length === 1) {
    cloneData[keys] = value;
    return cloneData;
  }

  let updataData = cloneData[keysArr[0]];
  const len = keysArr.length;
  for (let i = 1; i < len; i++) {
    const key = keysArr[i];
    if (i === len - 1) {
      if (updataData instanceof Object) {
        updataData[key] = value;
      } else {
        console.error('更新失败：原始对象上找不到属性', key);
        return object;
      }
    } else {
      updataData = updataData[key];
      if (updataData === undefined) {
        console.error('参数错误：', object, keys);
      }
    }
  }

  return cloneData;
}

export function JSONclone<T>(object: T) {
  return JSON.parse(JSON.stringify(object)) as T;
}

const _initConfig = (
  components: Global.Components,
  parant?: Global.DropComponentProps,
) => {
  components.forEach((options) => {
    const { children } = options;
    options.parent = parant;
    if (children) _initConfig(children, options);
  });
};

export const getPageConfig = (routeName: string) => {
  let defaultValue: Global.Components = [
    {
      id: '1',
      canDrag: false, // 能否拖动
      canDrop: true, // 能否放置拖动组件
      accept: allTypes,
      type: 'LayoutRow', // 组件类型
      props: {}, // 组件的属性
      children: [
        // {
        //   id: '1-1-1',
        //   canDrag: true, // 能否拖动
        //   canDrop: true, // 能否放置拖动组件
        //   accept: allTypes,
        //   type: 'LayoutRow', // 组件类型
        //   props: {}, // 组件的属性
        //   children: [
        //     {
        //       id: '1-1-1-2',
        //       canDrag: true,
        //       canDrop: false,
        //       type: 'Button',
        //       props: {},
        //     },
        //   ],
        // },
        {
          id: '1-2',
          canDrag: true,
          canDrop: false,
          type: 'TableList',
          props: {
            columns: [
              {
                title: '文本1',
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
            ],
          },
        },
      ],
    },
  ];
  _initConfig(defaultValue);

  const configStr = localStorage.getItem('PAGE-CACHE-' + routeName);
  if (!configStr) return defaultValue;

  try {
    defaultValue = JSON.parse(configStr);
    if (!defaultValue.length) return defaultValue;
    _initConfig(defaultValue);
  } catch (error) {}

  return defaultValue;
};

export const deleteConfirm = (title?: string, props?: ModalFuncProps) => {
  return new Promise<void>((resolve, reject) => {
    Modal.confirm({
      title: title || `确定要删除`,
      onOk: async () => resolve(),
      onCancel: () => reject(),
      ...props,
    });
  });
};

export const remToNumber = (value: number) => {
  const times = screen.width / 1920;
  return value * 10 * times;
};
