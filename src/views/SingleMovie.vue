<template>
  <article class="row">
    <SingleItemImage
      :image="(movie?.image as string)"
      :title="(movie?.title as string)"
    />

    <section class="mt-3">
      <h1>{{ movie?.title }}</h1>
      <p class="light-grey-text fs-6">
        {{ movie?.imDbRating }}
        <span class="red-text fw-bold">{{ movie?.runtimeMins }}</span>
      </p>
      <p class="light-grey-text">Release date: {{ movie?.releaseDate }}</p>
      <p class="fw-bold">
        Directors: <span class="red-text">{{ movie?.stars }}</span>
      </p>
      <p class="light-grey-text">
        Genre: <span>{{ movie?.genres }}</span>
      </p>
      <div>
        Cast:
        <ul>
          <li v-for="actor in movie?.actorList" :key="actor.id">
            <RouterLink :to="`/actors/${actor.id}`">{{
              actor.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h3>More like this</h3>
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
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { getItems, RequestsCriteria } from "@/service/api";
import { ref, type Ref } from "vue";
import type { IMovie } from "@/models/IMovie";
import MovieCard from "@/components/MainPage/MovieCard.vue";
import SingleItemImage from "../components/SingleItem/SingleItemImage.vue";

const route = useRoute();
const { id } = route.params;

const movie: Ref<IMovie | null> = ref(null);

getItems(RequestsCriteria.TITLE, id as string).then((result) => {
  movie.value = result;
});
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
p span {
  color: var(--dark-grey) !important;
}

section:first-of-type {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
}

img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}
</style>
