<template>
  <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit" data-login="true">
      <SearchSvg />
    </button>
    <AppHeaderDropdown :items="[]" />
  </form>
</template>

<script setup lang="ts">
import SearchSvg from "../../assets/icons/SearchSvg.vue";
import AppHeaderDropdown from "./AppHeaderDropdown.vue";
</script>

<style scoped>
form {
  position: relative;
}
</style>
