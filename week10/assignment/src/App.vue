<script setup>
// This vue sets up the app for all pages
import { RouterView } from 'vue-router';
</script>

<template>
<!-- This is the nav link where users can go back home on any page -->
<nav class="nav-container">
  <RouterLink to ="/">Bookshelf</RouterLink>
</nav>
  <RouterView />
</template>

<style>
/* This style is for the navigation bar */
.nav-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: #000000;
}
body, #app {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}
nav a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
}
</style>
