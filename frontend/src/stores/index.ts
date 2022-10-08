import { makeAutoObservable } from 'mobx';

class DropId {
  dropComponentId = '';

  constructor() {
    makeAutoObservable(this);
  }

  get id() {
    return this.dropComponentId;
  }

  set id(id: string) {
    this.dropComponentId = id;
  }
}

export default new DropId();
