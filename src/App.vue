<template>
  <AppHeader />

  <main class="container-fluid"><RouterView /></main>

  <AppFooter />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
/*
font-family: 'Montserrat', sans-serif;
font-family: 'Raleway', sans-serif;

TODO:
- search bar;
- add to fav;
- auth?
- loader
- error
- responsiveness
*/
</style>
