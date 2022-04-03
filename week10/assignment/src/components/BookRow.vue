<script setup>
// This is where we bring in the row script from the previous assignment
import { RouterLink } from 'vue-router';
const props = defineProps(["item", "index"]);
console.log("the item", props.item);
</script>

<template>
<!-- This is displayed in the home.vue but we list out the properties here -->
  <RouterLink :to="'/collection/' + item.id">
  <div class="book-item">
    <h2>{{item.title}}</h2>
    <h3>{{item.author}}</h3>
  </div>
  </RouterLink>
</template>

<style scoped>
/* This is where we style the books rows on the homepage */
h2, h3 {
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin: 20px;
}
.book-item {
  background: #ff5e00;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
}
.book-item:hover {
  background: #d4d4d4;
  transition: all 0.2s ease;
}
</style>