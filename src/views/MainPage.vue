<template>
  <article class="main">
    <MainPageHero
      :name="heroMovie.title"
      :cast="heroMovie.crew"
      :image="heroMovie.image"
    />

    <MainPageSection
      :items="top250Movies"
      :title="'Top 250 TV movies'"
      :link="'/movies#movies'"
    />

    <MainPageSection
      :items="top250TVShows"
      :title="'Top 250 TV shows'"
      :link="'/movies#shows'"
    />

    <section class="row justify-content-center py-3">coming soon</section>
  </article>
</template>

<script setup lang="ts">
import { getItems, RequestsCriteria } from "@/service/api";
import { ref, type Ref } from "vue";
import type { ITop250 } from "@/models/ITop250";
import MainPageHero from "../components/MainPage/MainPageHero.vue";
import MainPageSection from "@/components/MainPage/MainPageSection.vue";

const top250Movies: Ref<ITop250[]> = ref([]);
const top250TVShows: Ref<ITop250[]> = ref([]);
const heroMovie: Ref<ITop250> = ref({
  id: "",
  image: "",
  rank: "",
  title: "",
  fullTitle: "",
  year: "",
  crew: "",
});

getItems(RequestsCriteria.TOP_250_MOVIES).then((result) => {
  heroMovie.value = result.items[0];
  top250Movies.value = result.items.slice(1, 5);
});

getItems(RequestsCriteria.TOP_250_SHOWS).then((result) => {
  top250TVShows.value = result.items.slice(0, 4);
});
</script>

<style>
article.main section:first-of-type {
  position: relative;
  height: 70vh;
  background-size: cover;
  position: relative;
  width: 100vw;
  top: -3.5rem;
  margin-bottom: -3.5rem;
  z-index: -1;
}

article.main section:first-of-type::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, var(--dark-grey), transparent);
}

article.main section:nth-of-type(even) {
  background-color: var(--dark-grey);
}

article.main section:nth-of-type(3) h3 {
  color: var(--black) !important;
}

div.main_main-movie__wrapper {
  position: absolute;
  top: 30vh;
  left: 10%;
}
</style>
