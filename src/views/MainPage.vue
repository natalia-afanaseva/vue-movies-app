<template>
  <section class="row"></section>
  <div class="main_main-movie__wrapper">
    <h1>Name</h1>
    <p>Casr and description</p>
    <button>Add to fav</button>
  </div>

  <section class="row justify-content-center py-3">
    <div class="col-12 col-lg-10">
      <div class="row justify-content-between align-items-center mb-3">
        <h3>Top 250 TV shows</h3>
        <RouterLink to="/movies#movies" class="button">See all</RouterLink>
      </div>

      <div class="row">
        <MovieCard
          v-for="show in top250TVShows"
          :key="show.id"
          :id="show.id"
          :image="show.image"
          :year="show.year"
          :name="show.title"
          :description="show.crew"
        />
      </div>
    </div>
  </section>

  <section class="row justify-content-center py-3">
    <div class="col-12 col-lg-10">
      <div class="row justify-content-between align-items-center mb-3">
        <h3>Latest movies</h3>
        <RouterLink to="/movies#shows" class="button">See all</RouterLink>
      </div>

      <div class="row">
        <MovieCard
          v-for="movie in top250Movies"
          :key="movie.id"
          :id="movie.id"
          :image="movie.image"
          :year="movie.year"
          :name="movie.title"
          :description="movie.crew"
        />
      </div>
    </div>
  </section>
  <section class="row justify-content-center py-3">coming soon</section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { getMovies, MoviesCriteria } from "@/service/api";
import MovieCard from "@/components/MainPage/MovieCard.vue";
import { ref, type Ref } from "vue";
import type { Top250DataDetail } from "@/models/IMovie";

const top250Movies: Ref<Top250DataDetail[]> = ref([]);
const top250TVShows: Ref<Top250DataDetail[]> = ref([]);

getMovies(MoviesCriteria.TOP_250_MOVIES).then((result) => {
  top250Movies.value = result.slice(0, 4);
});

getMovies(MoviesCriteria.TOP_250_SHOWS).then((result) => {
  top250TVShows.value = result.slice(0, 4);
});

/*
{ title: "Top-250 Movies", link: "Top250Movies" },
        { title: "Most popular movies", link: "MostPopularMovies" },
        { title: "In theatres", link: "InTheatres" },
        { title: "Coming soon", link: "ComingSoon" },
*/
</script>

<style scoped>
section:first-of-type {
  position: relative;
  height: 70vh;
  background: url("../assets/seats.jpeg");
  background-size: cover;
  position: relative;
  width: 100vw;
  top: -3.5rem;
  margin-bottom: -3.5rem;
  z-index: -1;
}

section:first-of-type::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, var(--dark-grey), transparent);
}

section:nth-of-type(even) {
  background-color: var(--dark-grey);
}

section:nth-of-type(3) h3 {
  color: var(--black) !important;
}

div.main_main-movie__wrapper {
  position: absolute;
  top: 30vh;
  left: 10%;
}
</style>
