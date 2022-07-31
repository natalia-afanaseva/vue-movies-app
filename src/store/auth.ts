import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({ _isAuth: false, _isLoading: false }),
  getters: {
    isAuth: (state) => state._isAuth,
    isLoading: (state) => state._isLoading,
  },
  actions: {
    setAuth() {
      if (this._isAuth) {
        this._isAuth = false;
      } else {
        this._isAuth = true;
      }
    },
    setLoading(arg: boolean) {
      this._isLoading = arg;
    },
  },
});
