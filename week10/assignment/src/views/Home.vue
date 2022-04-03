<script setup>
// This is the home page where we bring in data from books.json and BookRow.vue
import BookList from "../data/books.json";
import BookRow from "../components/BookRow.vue"
</script>

<template>
<!-- This is where we introduce the home page info via BookRow.vue -->
  <div class="home-container">
    <h1>Tati's Graphic Design Books</h1>
    <p>These are some books that taught me how to be a more thoughtful designer. Feel free to browse through my bookshelf for inspiration.</p>
    <div class="bookrow-container">
      <div class="triangle"></div>
      <BookRow v-for="(item,index) in BookList" :key="index" :item="item" />
      <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped>
/* This is where we style the homepage */
.home-container {
  display: block;
  margin: 0;
  justify-content: center;
}
h1 {
  font-size: 50px;
}
.home-container h1, p {
  text-align: center;
  margin: 20px;
}
.bookrow-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.bookrow-container a {
  text-decoration: none;
  color: black;
}
.circle {
  width: 200px;
  height: 200px;
  background: #000000;
  border-radius: 50%;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 200px solid #000000;
}
</style>