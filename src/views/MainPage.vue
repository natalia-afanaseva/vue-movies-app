<template>
  <section class="row"></section>
  <div class="main_main-movie__wrapper">
    <h1>Name</h1>
    <p>Casr and description</p>
    <button>Add to fav</button>
  </div>

  <section class="row justify-content-center py-3">
    <div class="col-12 col-lg-5">
      <h6>Explore Top 250 Movies</h6>
      <h3>Top 250 Movies</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa
        dignissimos libero molestias quasi expedita est voluptatum earum
        adipisci, quis quas corrupti ab! At fugit numquam quisquam ad blanditiis
        neque!
      </p>
    </div>
    <div class="col-12 col-lg-5">image</div>
  </section>

  <section class="row justify-content-center py-3">
    <div class="col-12 col-lg-10">
      <div class="row justify-content-between align-items-center">
        <h3>Latest movies</h3>
        <RouterLink to="/movies" class="button">See all</RouterLink>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 main_movie-card">
          <img src="../assets/seats.jpeg" />
          <div>
            <p class="light-grey-text fw-bold">
              Name <span class="red-text">(90 min)</span>
            </p>
            <p class="mb-0 black-text">Description</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="row justify-content-center py-3">coming soon</section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
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

.main_movie-card {
  height: 25rem;
}

.main_movie-card img {
  width: 100%;
  height: 75%;
  object-fit: cover;
}

.main_movie-card div {
  background-color: #f9fbfd;
  border: 1px solid #eee;
  border-top: 0;
  padding: 0.25rem;
}
</style>
