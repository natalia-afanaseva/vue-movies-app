<template>
  <article v-if="isLoading">
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
  <base-loader v-else></base-loader>
</template>

<script setup lang="ts">
import { getItems } from "@/service/api";
import { useRoute } from "vue-router";
import { ref, type Ref } from "vue";
import { storeToRefs } from "pinia";
import type { ITop250 } from "@/models/ITop250";
import MovieCard from "../components/MainPage/MovieCard.vue";
import { RequestsCriteria } from "@/models/ERequestsCriteria";
import { useAuthStore } from "@/store/auth";

const { hash } = useRoute();
const items: Ref<ITop250[]> = ref([]);

const store = useAuthStore();
const { isLoading } = storeToRefs(store);
const { setLoading } = store;

try {
  setLoading(true);
  getItems(
    hash === "movies"
      ? RequestsCriteria.TOP_250_MOVIES
      : RequestsCriteria.TOP_250_SHOWS
  ).then((result) => {
    items.value = result.items;
  });
} catch (error) {
  setLoading(false);
  window.alert(error);
} finally {
  setLoading(false);
}
</script>
