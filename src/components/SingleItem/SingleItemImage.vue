<template>
  <section :style="{ backgroundImage: `url(${props.image})` }">
    <img :src="props.image" :alt="props.title" />
  </section>
</template>

<script setup lang="ts">
import type { IMovie } from "@/models/IMovie";
import { defineProps } from "vue";

const props = defineProps<Pick<IMovie, "image" | "title">>();
</script>
