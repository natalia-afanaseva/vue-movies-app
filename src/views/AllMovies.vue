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
import { getItems, RequestsCriteria } from "@/service/api";
import { useRoute } from "vue-router";
import { ref, type Ref } from "vue";
import type { ITop250 } from "@/models/ITop250";
import MovieCard from "../components/MainPage/MovieCard.vue";

const { hash } = useRoute();
const items: Ref<ITop250[]> = ref([]);

getItems(
  hash === "movies"
    ? RequestsCriteria.TOP_250_MOVIES
    : RequestsCriteria.TOP_250_SHOWS
).then((result) => {
  items.value = result.items;
});
</script>
