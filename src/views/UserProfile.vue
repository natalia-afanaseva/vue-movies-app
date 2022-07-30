<template>
  <article>
    <h1>Your favorites</h1>
    <section class="row">
      <MovieCard
        v-for="m in userFav"
        :key="m.id"
        :id="m.id"
        :image="m.image"
        :name="m.title"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStore } from "@/store/fav";
import { getItems, RequestsCriteria } from "@/service/api";
import { ref } from "vue";
import type { IMovie } from "@/models/IMovie";
import MovieCard from "@/components/MainPage/MovieCard.vue";

const userFav = ref<IMovie[]>([]);

const store = useStore();

const { favoriteMovies } = storeToRefs(store);

favoriteMovies.value.forEach((id) => {
  getItems(RequestsCriteria.TITLE, id).then((res: IMovie) =>
    userFav.value.push(res)
  );
});
</script>

<style scoped>
article {
  min-height: 100vh;
}
h1 {
  color: var(--dark-grey) !important;
}
</style>
