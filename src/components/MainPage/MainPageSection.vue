<template>
  <section class="row justify-content-center py-3">
    <div class="col-12 col-lg-10">
      <div class="row justify-content-between align-items-center mb-3">
        <div class="col-12 col-sm-6">
          <h3>{{ props.title }}</h3>
        </div>
        <div class="col-12 col-sm-6 text-end">
          <RouterLink :to="props.link" class="button">See all</RouterLink>
        </div>
      </div>

      <div class="row">
        <MovieCard
          v-for="item in props.items"
          :key="item.id"
          :id="item.id"
          :image="item.image"
          :year="item.year"
          :name="item.title"
          :description="item.crew"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from "./MovieCard.vue";
import { defineProps } from "vue";
import type { ITop250 } from "@/models/ITop250";

const props = defineProps<{ items: ITop250[]; title: string; link: string }>();
</script>
