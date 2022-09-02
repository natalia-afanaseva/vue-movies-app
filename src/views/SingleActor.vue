<template>
  <article class="row" v-if="!isLoading">
    <SingleItemImage
      :image="(actor?.image as string)"
      :title="(actor?.name as string)"
    />

    <section class="mt-3">
      <h1>{{ actor?.name }}</h1>
      <p class="fs-6">
        {{ getModifiedDate(actor?.birthDate) }}
        <span v-if="actor?.deathDate">
          - {{ getModifiedDate(actor?.deathDate) }}</span
        >
      </p>
      <p class="light-grey-text">Awards: {{ actor?.awards }}</p>
    </section>

    <section>
      <h3 class="my-3">Known for:</h3>
      <div class="row">
        <MovieCard
          v-for="m in actor?.knownFor"
          :key="m.id"
          :id="m.id"
          :image="m.image"
          :name="m.title"
        />
      </div>
    </section>
  </article>
  <base-loader v-else></base-loader>
</template>

<script setup lang="ts">
import SingleItemImage from "../components/SingleItem/SingleItemImage.vue";
import { useRoute } from "vue-router";
import { getItems } from "@/service/api";
import { ref, type Ref, onUpdated } from "vue";
import type { IActor } from "@/models/IActor";
import MovieCard from "@/components/MainPage/MovieCard.vue";
import { RequestsCriteria } from "@/models/ERequestsCriteria";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import { getModifiedDate } from "@/utils/getModifiedDate";

const route = useRoute();
const { id } = route.params;

const store = useAuthStore();
const { isLoading } = storeToRefs(store);
const { setLoading } = store;

const actor: Ref<IActor | null> = ref(null);

onUpdated(() => {
  setLoading(true);
  getItems(RequestsCriteria.NAME, id as string)
    .then((result) => {
      actor.value = result;
    })
    .catch((error) => window.alert(error))
    .finally(() => setLoading(false));
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
  text-align: center;
  background-position-y: 50%;
}

section:first-of-type img {
  max-height: 70vh;
  object-fit: contain;
  max-width: 90vw;
}
</style>
