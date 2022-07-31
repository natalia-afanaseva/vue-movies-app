<template>
  <header :class="route.fullPath !== '/' ? 'dark-grey-bg' : ''">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"
          ><span>Cinema</span>tique</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end align-items-baseline"
          >
            <li
              class="nav-item"
              v-for="navLink in navLinks[isAuth ? 'isAuth' : 'notIsAuth']"
              :key="navLink.name"
            >
              <RouterLink
                :to="navLink.link"
                class="nav-link"
                :class="navLink.link === route.path ? 'active' : ''"
              >
                <HomeSvg v-if="navLink.name === 'Movies'" />
                <UserSvg v-if="navLink.name === 'Profile'" />
              </RouterLink>
            </li>
            <button data-login="true" @click="handleAuth" class="me-2">
              <LogoutSvg v-if="isAuth" />
              <LoginSvg v-else />
            </button>
          </ul>
          <AppHeaderSearchBar />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import { navLinks } from "../utils/constants";
import AppHeaderSearchBar from "./AppHeader/AppHeaderSearchBar.vue";

import LoginSvg from "../assets/icons/LoginSvg.vue";
import LogoutSvg from "../assets/icons/LogoutSvg.vue";
import HomeSvg from "../assets/icons/HomeSvg.vue";
import UserSvg from "../assets/icons/UserSvg.vue";

const route = useRoute();
const store = useAuthStore();

const { isAuth } = storeToRefs(store);
const { setAuth } = store;

function handleAuth() {
  setAuth();
}
</script>

<style scoped>
nav {
  background-color: transparent !important;
  border-bottom: 1.5px solid var(--white);
}

.navbar-brand,
a.nav-link {
  color: var(--white) !important;
}

.navbar-brand span {
  color: var(--red) !important;
}
</style>
