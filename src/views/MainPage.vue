<template>
  <article class="main" v-if="isLoading">
    <MainPageHero
      :name="heroMovie.title"
      :cast="heroMovie.crew"
      :image="heroMovie.image"
      :id="heroMovie.id"
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
  </article>
  <base-loader v-else></base-loader>
</template>

<script setup lang="ts">
import { getItems } from "@/service/api";
import { ref, type Ref } from "vue";
import type { ITop250 } from "@/models/ITop250";
import MainPageHero from "../components/MainPage/MainPageHero.vue";
import MainPageSection from "@/components/MainPage/MainPageSection.vue";
import { generateRandom } from "@/utils/getRandom";
import { RequestsCriteria } from "@/models/ERequestsCriteria";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";

const store = useAuthStore();
const { isLoading } = storeToRefs(store);
const { setLoading } = store;

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

const randomIndex = generateRandom(250);

try {
  setLoading(true);
  getItems(RequestsCriteria.TOP_250_MOVIES).then((result) => {
    heroMovie.value = result.items[randomIndex];
    top250Movies.value = result.items.slice(0, 4);
  });

  getItems(RequestsCriteria.TOP_250_SHOWS).then((result) => {
    top250TVShows.value = result.items.slice(0, 4);
  });
} catch (error) {
  window.alert(error);
} finally {
  setLoading(false);
}
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
