<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3 main_movie-card">
    <img :src="props.image" :alt="props.name" v-if="props.image" />
    <img src="../../assets/no-image.jpeg" alt="No image provided" v-else />
    <button v-if="isAuth" @click="handleFav" data-login="true">
      <DislikeSvg v-if="isMovieInFavourites(props.id)" />
      <LikeSvg v-else />
    </button>
    <RouterLink :to="`/movies/${props.id}`">
      <div>
        <p class="light-grey-text fw-bold ellipsis" :title="props.name">
          {{ props.name }}
          <span class="red-text" v-if="!!props.year">({{ props.year }})</span>
        </p>
        <p class="mb-0 black-text ellipsis" :title="props.description">
          {{ props.description }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useStore as useAuthStore } from "@/store/auth";
import { useStore as useFavStore } from "@/store/fav";
import LikeSvg from "../../assets/icons/ThumbUpSvg.vue";
import DislikeSvg from "../../assets/icons/ThumbDownSvg.vue";

const authStore = useAuthStore();
const favStore = useFavStore();

const { isAuth } = storeToRefs(authStore);

const { isMovieInFavourites } = storeToRefs(favStore);
const { addToFav, deleteFromFav } = favStore;

const props = defineProps({
  image: String,
  name: String,
  year: String,
  description: String,
  id: String,
});

function handleFav() {
  if (isMovieInFavourites.value(props.id)) {
    deleteFromFav(props.id);
  } else {
    addToFav(props.id);
  }
}
</script>

<style scoped>
.main_movie-card {
  height: 25rem;
  position: relative;
}

.main_movie-card button {
  position: absolute;
  left: 1rem;
}

.main_movie-card a {
  text-decoration: none;
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

.main_movie-card a div {
  background-color: #f9fbfd;
  border: 1px solid #eee;
  border-top: 0;
  padding: 0.25rem;
}
</style>
