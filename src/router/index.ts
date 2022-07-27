import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/movies/:movieId",
      name: "single-movie",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SingleMovie.vue"),
    },
    {
      path: "/actors/:actorId",
      name: "single-actor",
      component: () => import("../views/SingleActor.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/AllMovies.vue"),
    },
    {
      path: "/*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;