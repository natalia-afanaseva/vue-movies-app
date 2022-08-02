<template>
  <article class="row" v-if="!isLoading">
    <SingleItemImage
      :image="(movie?.image as string)"
      :title="(movie?.title as string)"
    />

    <section class="mt-3">
      <h1>{{ movie?.title }}</h1>
      <p class="light-grey-text fs-6">
        {{ movie?.imDbRating }}
        <span class="red-text fw-bold">{{ movie?.runtimeMins }} min.</span>
      </p>
      <p class="light-grey-text">
        Release date: {{ getModifiedDate(movie?.releaseDate) }}
      </p>
      <p>
        <span class="fw-bold">Directors: </span>
        <span class="red-text">{{ movie?.stars }}</span>
      </p>
      <p class="light-grey-text">
        <span class="fw-bold">Genre: </span> <span>{{ movie?.genres }}</span>
      </p>
      <div>
        <span class="fw-bold">Cast:</span>

        <ul>
          <li v-for="(actor, index) in movie?.actorList" :key="actor.id">
            <RouterLink :to="`/actors/${actor.id}`"
              >{{ actor.name }}
              {{
                index < (movie?.actorList?.length ?? 1) - 1 ? ", " : ""
              }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h3 class="my-3">More like this</h3>
      <div class="row">
        <MovieCard
          v-for="m in movie?.similars"
          :key="m.id"
          :id="m.id"
          :image="m.image"
          :name="m.title"
        />
      </div>
    </section>
  </article>
  <base-loader v-else></base-loader>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { getItems } from "@/service/api";
import { ref, type Ref } from "vue";
import type { IMovie } from "@/models/IMovie";
import MovieCard from "@/components/MainPage/MovieCard.vue";
import SingleItemImage from "../components/SingleItem/SingleItemImage.vue";
import { RequestsCriteria } from "@/models/ERequestsCriteria";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import { getModifiedDate } from "@/utils/getModifiedDate";

const store = useAuthStore();
const { isLoading } = storeToRefs(store);
const { setLoading } = store;

const route = useRoute();
const { id } = route.params;

const movie: Ref<IMovie | null> = ref(null);

try {
  setLoading(true);
  getItems(RequestsCriteria.TITLE, id as string).then((result) => {
    movie.value = result;
  });
} catch (error) {
  window.alert(error);
} finally {
  setLoading(false);
}
</script>

<style scoped>
section:nth-of-type(odd) {
  background-color: var(--dark-grey);
}

section:nth-of-type(even) {
  color: var(--dark-grey) !important;
}

section:nth-of-type(even) h1,
section:nth-of-type(even) div,
section:nth-of-type(even) ul li a,
section:nth-of-type(even) p:not(.light-grey-text),
p span,
span {
  color: var(--dark-grey) !important;
}

section:first-of-type {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  text-align: center;
  background-position-y: 50%;
}

section:first-of-type img {
  /*width: 100%;*/
  max-height: 70vh;
  object-fit: contain;
  max-width: 90vw;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
}
</style>
