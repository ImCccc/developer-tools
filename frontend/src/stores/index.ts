import { makeAutoObservable } from 'mobx';
export type StoreType = typeof stores;

class DropData {
  // 拖动到目标元素,目标元素的 id
  dropComponentId = '';

  // 选择某个组件时,组件的 id
  selectedComponentId = '';

  constructor() {
    makeAutoObservable(this);
  }

  get selectedId() {
    return this.selectedComponentId;
  }

  set selectedId(id: string) {
    this.selectedComponentId = id;
  }

  get id() {
    return this.dropComponentId;
  }

  set id(id: string) {
    this.dropComponentId = id;
  }
}

const stores = {
  DropData: new DropData(),
};

export default function useMobx<T extends keyof StoreType>(storeName: T) {
  return stores[storeName];
}
