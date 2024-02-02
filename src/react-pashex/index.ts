/* eslint-disable @typescript-eslint/no-this-alias */
import { useSyncExternalStore } from "react";

class ReactPashex {
  state = {};
  listeners = [];

  emitChange() {
    for (let listener of this.listeners) {
      listener();
    }
  }

  subscribe(listener) {
    this.listeners = [...this.listeners, listener];
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getState() {
    return this.state;
  }

  changeState(newState) {
    this.state = { ...newState };
    this.emitChange();
  }

  createStore() {
    const context = this;
    return {
      changeState: this.changeState.bind(context),
      getState: this.getState.bind(context),
      subscribe: this.subscribe.bind(context),
    };
  }
}

const reactPashex = new ReactPashex();
const nativeStore = reactPashex.createStore();

export const usePashexHook = () => {
  const store = useSyncExternalStore(
    nativeStore.subscribe,
    nativeStore.getState
  );

  return {
    state: store,
    changeState: nativeStore.changeState,
    getState: nativeStore.getState,
  };
};
