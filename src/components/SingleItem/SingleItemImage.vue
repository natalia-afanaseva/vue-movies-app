<template>
  <section :style="{ backgroundImage: `url(${props.image})` }">
    <img :src="props.image" :alt="props.title" />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  image: String,
  title: String,
});
</script>

<style scoped>
img {
  max-height: 70vh;
  object-fit: contain;
}
</style>
