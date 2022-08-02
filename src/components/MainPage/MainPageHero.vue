<template>
  <section class="row" :style="style"></section>
  <div class="main_main-movie__wrapper">
    <h1>{{ props.name }}</h1>
    <p>{{ props.cast }}</p>
    <RouterLink :to="`/movies/${props.id}`" class="button"
      >Learn more</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  name: String,
  cast: String,
  image: String,
  id: String,
});

console.log(props);

const style = ref({ backgroundImage: `url(${props.image})` });
</script>

<style scoped>
section {
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
</style>
