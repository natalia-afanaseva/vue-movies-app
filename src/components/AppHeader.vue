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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
            <li
              class="nav-item"
              v-for="navLink in navLinks"
              :key="navLink.name"
            >
              <RouterLink
                :to="navLink.link"
                class="nav-link"
                :class="navLink.link === route.path ? 'active' : ''"
              >
                {{ navLink.name }}
              </RouterLink>
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { navLinks } from "../utils/constants";

const route = useRoute();
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
