<script setup>
// This is where we setup params to create map routes with different ids
import BookList from '../data/books.json';
import { useRoute } from 'vue-router';
// Dynamic Routing below
const route = useRoute();
const paramId = route.params.id * 1;
console.log('the id is', paramId);
const item = BookList.find(item => {
  return item.id === paramId;
});
</script>

<template>
<!-- This is the info that displays in the detail page -->
  <div class="detail-container">
    <div class="book-image">
        <img :src="item.image" :alt="item.name" />
    </div>
    <div class="book-detail">
      <h1>{{item.title}}</h1>
      <h2>{{item.author}}</h2>
      <p>{{item.yearPublished}}</p>
      <p>{{item.description}}</p>
    </div>
  </div>
</template>

<style scoped>
/* This is where we style the detail page */
h1, h2, p {
  line-height: 1.2rem;
  padding-left: 20px;
  margin-top: 5px;
}
img {
  width: 400px;
}
.detail-container {
  display: flex;
  justify-content: center;
  margin: 100px;
  padding: 0px;
}
.book-detail {
  align-items: center;
}
</style>