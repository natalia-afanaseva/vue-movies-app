import { defineStore } from "pinia";

export const useStore = defineStore("auth", {
  state: () => ({ _isAuth: false }),
  getters: {
    isAuth: (state) => state._isAuth,
  },
  actions: {
    setAuth() {
      if (this._isAuth) {
        this._isAuth = false;
      } else {
        this._isAuth = true;
      }
    },
  },
});
