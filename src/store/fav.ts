import { defineStore } from "pinia";

export const useStore = defineStore("fav", {
  state: () => ({ _favoriteMovies: ["tt1375666"] as string[] }),
  getters: {
    favoriteMovies: (state) => state._favoriteMovies,
    isMovieInFavourites: (state) => {
      return (id: string | undefined) => {
        if (!id) return false;

        return state._favoriteMovies.includes(id);
      };
    },
  },
  actions: {
    addToFav(movieId: string | undefined) {
      if (!movieId) return;
      if (!this._favoriteMovies.includes(movieId)) {
        this._favoriteMovies.push(movieId);
      }
    },
    deleteFromFav(movieId: string | undefined) {
      if (!movieId) return;
      if (!this._favoriteMovies.includes(movieId)) return;

      this._favoriteMovies = this._favoriteMovies.filter(
        (id) => id !== movieId
      );
    },
  },
});
