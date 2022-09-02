<template>
  <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="inputValue"
    />
    <button class="btn btn-outline-success" type="submit" data-login="true">
      <SearchSvg />
    </button>
    <AppHeaderDropdown
      :items="searchResults"
      v-if="debouncedInput.length > 0"
    />
  </form>
</template>

<script setup lang="ts">
import SearchSvg from "../../assets/icons/SearchSvg.vue";
import AppHeaderDropdown from "./AppHeaderDropdown.vue";
import { searchItems } from "@/service/api";
import { ref, computed, onUpdated } from "vue";
import type { SearchResult } from "@/models/ISearchResults";
import { useAuthStore } from "@/store/auth";

const store = useAuthStore();
const { setLoading } = store;

const debouncedInput = ref("");
const timeout = ref<null | number>(null);
const searchResults = ref([] as SearchResult[]);

const inputValue = computed({
  get() {
    return debouncedInput.value;
  },
  set(val: string) {
    if (timeout.value) clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
      debouncedInput.value = val;
    }, 500);
  },
});

onUpdated(() => {
  setLoading(true);
  searchItems(debouncedInput.value)
    .then((res) => {
      searchResults.value = res;
    })
    .catch((e) => {
      window.alert(`${e}. Please try again later.`);
    })
    .finally(() => setLoading(false));
});
</script>

<style scoped>
form {
  position: relative;
}
</style>
