import { Modal, ModalFuncProps } from 'antd';

const { confirm } = Modal;

export const remToNumber = (value: number) => {
  const times = screen.width / 1920;
  return value * 10 * times;
};

export const initFontSize = () => {
  try {
    const body = document.body;
    const html = body.parentElement || (body.parentNode as any);
    html.style.fontSize = `${(screen.width / 1920) * 10}px`;
  } catch (error) {}
};

export function arrayToArrayTree<
  T extends {
    [key: string]: any;
  }[],
>(arr: T) {
  if (!arr || !arr.length) {
    return arr;
  }

  const ids = arr.map((v) => v.key);

  return arr.filter((cur) => {
    cur.children = arr.filter((item) => item.parantId === cur.key);
    const curPid = cur.parantId;
    if (!curPid && curPid !== 0) return true;

    if (!ids.includes(curPid)) {
      console.warn(`找不到parentId：`, curPid, cur);
      return true;
    }

    return false;
  }) as T;
}

export const deleteConfirm = (title?: string, props?: ModalFuncProps) => {
  return new Promise<void>((resolve, reject) => {
    confirm({
      title: title || `确定要删除`,
      onOk: async () => resolve(),
      onCancel: () => reject(),
      ...props,
    });
  });
};
