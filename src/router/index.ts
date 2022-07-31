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
      path: "/movies/:id",
      name: "single-movie",
      component: () => import("../views/SingleMovie.vue"),
    },
    {
      path: "/actors/:id",
      name: "single-actor",
      component: () => import("../views/SingleActor.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/AllMovies.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/UserProfile.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
