<template>
  <article>
    <h1>Top 250 {{ hash }}</h1>
    <section class="row">
      <MovieCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :year="item.year"
        :name="item.title"
        :description="item.crew"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
import { getMovies, MoviesCriteria } from "@/service/api";
import { useRoute } from "vue-router";
import { ref, type Ref } from "vue";
import type { Top250DataDetail } from "@/models/IMovie";
import MovieCard from "../components/MainPage/MovieCard.vue";

const { hash } = useRoute();
const items: Ref<Top250DataDetail[]> = ref([]);

getMovies(
  hash === "movies"
    ? MoviesCriteria.TOP_250_MOVIES
    : MoviesCriteria.TOP_250_SHOWS
).then((result) => {
  items.value = result.items;
});
</script>

<style scoped></style>
