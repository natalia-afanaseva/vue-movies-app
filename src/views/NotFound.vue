<template>
  <article class="row">
    <section class="col align-items-center justify-content-center">
      <h1>Oops!</h1>
      <p>Page not found.</p>
    </section>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped>
article {
  min-height: 100vh;
}

section {
  display: flex;
  flex-direction: column;
}

article h1,
article p {
  color: var(--dark-grey) !important;
  text-align: center;
}
</style>
