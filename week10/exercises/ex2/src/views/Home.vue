<script setup>
  import { RouterLink } from 'vue-router'
  import MusicList from "../data/music-list.json"
  console.log("Music List", MusicList);
</script>
<template>
  <div class="song-container">
    <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
    <RouterLink :to=" '/song/' + song.slug">{{song.title}}</RouterLink>
  </div>
</div>
  
</template>

<style>
body {
  background: black;
  font-size: 40px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.song-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}
.song-list-item {
  width: auto;
  padding: 10px;
  margin: 10px;
  border: 2px solid #acdb00;
  border-radius: 10px;
}
.song-list-item:hover {
  background: #acdb00;
}
.song-list-item a {
  color: #acdb00;
  text-decoration: none;
}
.song-list-item:hover a {
  color: #000000;
  text-decoration: none;
}
</style>