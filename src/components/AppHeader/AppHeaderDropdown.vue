<template>
  <ul class="list-group" v-if="props.items.length > 0 && !isLoading">
    <li class="list-group-item" v-for="item in props.items" :key="item.id">
      <RouterLink :to="`/movies/${item.id}`">{{ item.title }}</RouterLink>
    </li>
  </ul>
  <ul class="list-group" v-else>
    <li class="list-group-item">No results.</li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";

const store = useAuthStore();
const { isLoading } = storeToRefs(store);

const props = defineProps<{ items: { title: string; id: string }[] }>();
</script>

<style scoped>
ul {
  position: absolute;
  top: 2.25rem;
  width: 75%;
  left: -1%;
}

ul li a {
  text-decoration: none;
  color: var(--dark-grey) !important;
}

ul li a:hover {
  text-decoration: underline;
}
</style>
