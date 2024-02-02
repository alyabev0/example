export class Pashex {
  #state = {};

  getState() {
    return this.#state;
  }

  changeState(newState) {
    this.#state = { ...newState };
  }

  createStore() {
    return {
      changeState: this.changeState,
      getState: this.getState,
    };
  }
}

export const pashexExamplar = new Pashex();
