<script setup>
  import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <nav class="home-container">
    <RouterLink to="/">2019 Billboard Top 50</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
.home-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: #c8ff00;
}
body, #app {
  margin: 0;
  padding: 0;
}
nav a {
  color: black;
  text-decoration: none;
  padding: 10px;
}
</style>
