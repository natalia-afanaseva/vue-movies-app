<template>
  <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      v-model="inputValue"
      @input="debouncedSearch"
    />
    <button class="btn btn-outline-success" type="submit" data-login="true">
      <SearchSvg />
    </button>
    <AppHeaderDropdown :items="searchResults" v-if="inputValue.length > 0" />
  </form>
</template>

<script setup lang="ts">
import SearchSvg from "../../assets/icons/SearchSvg.vue";
import AppHeaderDropdown from "./AppHeaderDropdown.vue";
import { searchItems } from "@/service/api";
import { ref } from "vue";
import type { SearchResult } from "@/models/ISearchResults";
import { useAuthStore } from "@/store/auth";

const store = useAuthStore();
const { setLoading } = store;

const searchResults = ref([] as SearchResult[]);

const debounce = ref<number | undefined>(undefined);
const inputValue = ref("");

const debouncedSearch = async (event: Event) => {
  setLoading(true);
  const target = event.target as HTMLInputElement;
  inputValue.value = target.value;

  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    if (target.value.length > 0) {
      handleSearch(target.value);
    }
  }, 500);
};

const handleSearch = async (value: string) => {
  setLoading(true);
  try {
    const result = await searchItems(value);
    searchResults.value = result;
  } catch (error) {
    window.alert(`${error}. Please try again later.`);
  } finally {
    setLoading(false);
  }
};
</script>

<style scoped>
form {
  position: relative;
}
</style>
