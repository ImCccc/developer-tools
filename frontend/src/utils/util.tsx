import { allTypes } from '@/components/DragList';
import { Modal } from 'antd';

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
        {
          id: '1-3',
          canDrag: true,
          canDrop: false,
          type: 'Input',
          props: {},
        },
        {
          id: '1-1-1',
          canDrag: true, // 能否拖动
          canDrop: true, // 能否放置拖动组件
          accept: allTypes,
          type: 'LayoutRow', // 组件类型
          props: {}, // 组件的属性
          children: [
            {
              id: '1-1-1-2',
              canDrag: true,
              canDrop: false,
              type: 'Button',
              props: {},
            },
          ],
        },
        {
          id: '1-2',
          canDrag: true,
          canDrop: false,
          type: 'Input',
          props: {},
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

export const dryConfirm = (content: string) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      content,
      onOk: () => resolve(true),
      onCancel: () => reject(),
    });
  });
};
