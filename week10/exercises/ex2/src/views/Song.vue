<script setup>
  import { useRoute } from 'vue-router';
  import MusicList from "../data/music-list.json"

  const route = useRoute();
  console.log(route.params.slug);
  const song = MusicList.find(song => {
    return song.slug === route.params.slug
  })
</script>

<template>
  <div class="song-detail-container">
    <div class="song-detail" :class="{
      rising: song.rank > song.position.positionLastWeek,
      falling: song.rank < song.position.positionLastWeek,
      same: song.rank === song.position.positionLastWeek
      }">
      <h1>{{ song.rank }}</h1>
      <h2>{{ song.title }}</h2>
      <img :src="song.cover" :alt="song.title">
      <p>{{song.artist}}</p>
      <p></p>
    </div>
  </div>
</template>

<style>
h1, h2, p {
  margin: 20px;
}
.song-detail-container {
  display: flex;
  justify-content: center;
}
.song-detail {
  display: block;
  text-align: center;
  width: 500px;
  color: white;
}
.song-detail img {
  width: 100%;
}
.song-detail.rising {
  color: #acdb00;
}
.song-detail.falling {
  color: #ff5e00;
}
.song-detail.same {
  color: #00b7ff;
}
</style>