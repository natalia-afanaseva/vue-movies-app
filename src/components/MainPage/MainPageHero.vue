<template>
  <section class="row"></section>
  <div class="main_main-movie__wrapper" :style="style">
    <h1>{{ props.name }}</h1>
    <p>{{ props.cast }}</p>
    <button>Add to fav</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  name: String,
  cast: String,
  image: String,
});

const style = ref({ background: `url(${props.image})` });
</script>
