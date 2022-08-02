<template>
  <article v-if="!isLoading">
    <h1>Your favorites</h1>
    <section class="row" v-if="userFav.length > 0">
      <MovieCard
        v-for="m in userFav"
        :key="m.id"
        :id="m.id"
        :image="m.image"
        :name="m.title"
      />
    </section>
    <h3 class="text-red" v-else>You don't have favorite movies yet.</h3>
  </article>
  <base-loader v-else></base-loader>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFavStore } from "@/store/fav";
import { useAuthStore } from "@/store/auth";
import { getItems } from "@/service/api";
import { ref } from "vue";
import type { IMovie } from "@/models/IMovie";
import MovieCard from "@/components/MainPage/MovieCard.vue";
import { RequestsCriteria } from "@/models/ERequestsCriteria";

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);
const { setLoading } = authStore;

const userFav = ref<IMovie[]>([]);

const favStore = useFavStore();

const { favoriteMovies } = storeToRefs(favStore);

try {
  setLoading(true);
  favoriteMovies.value.forEach((id) => {
    getItems(RequestsCriteria.TITLE, id).then((res: IMovie) =>
      userFav.value.push(res)
    );
  });
} catch (error) {
  window.alert(error);
} finally {
  setLoading(false);
}
</script>

<style scoped>
article {
  min-height: 100vh;
}
h1 {
  color: var(--dark-grey) !important;
}
</style>
