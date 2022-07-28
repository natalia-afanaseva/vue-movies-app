<template>
  <RouterLink
    :to="`/movies/${props.id}`"
    class="col-12 col-md-6 col-lg-4 col-xl-3 main_movie-card"
  >
    <img :src="props.image" :alt="props.name" />
    <div>
      <p class="light-grey-text fw-bold">
        {{ props.name }} <span class="red-text">({{ props.year }})</span>
      </p>
      <p class="mb-0 black-text">{{ props.description }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  image: String,
  name: String,
  year: String,
  description: String,
  id: String,
});
</script>

<style scoped>
.main_movie-card {
  height: 25rem;
}

.main_movie-card img {
  width: 100%;
  height: 75%;
  object-fit: cover;
  opacity: 0.75;
}

.main_movie-card img:hover {
  opacity: 1;
}

.main_movie-card div {
  background-color: #f9fbfd;
  border: 1px solid #eee;
  border-top: 0;
  padding: 0.25rem;
}
</style>
