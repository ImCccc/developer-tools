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

export const dryConfirm = (content: string) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      content,
      onOk() {
        resolve(true);
      },
      onCancel() {
        reject();
      },
    });
  });
};
