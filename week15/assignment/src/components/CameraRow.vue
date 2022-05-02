<script setup>
// javascript
const props = defineProps(["camera"]);
const triggerCamera = (camera) => {
  console.log("you clicked", camera.name);
}
function play() {
  var audio = document.getElementById('sound');
  audio.play();
  console.log(document.getElementById('sound'));
}
</script>

<template>
 <!-- html -->
  <tr class ="camera-row">
    <td><img v-bind:src="props.camera.image" v-bind:alt="props.camera.name"></td>
    <td>{{camera.name}}</td>
    <td>{{camera.released}}</td>
    <td :class="{rare: camera.rarity.toLowerCase().includes('rare')}">{{camera.rarity}}</td>
    <td>{{camera.filmType}}</td>
    <td>{{camera.collected}}</td>
    <td><button type="button" v-on:click="$emit('deleteRow', props.camera)">Delete</button></td>
    <td><button type="button" v-on:click="play()">Play</button><audio id="sound" v-bind:src="props.camera.sound"></audio></td>
    
  </tr>
</template>

<style scoped>
/* style */
.camera-row:nth-child(odd) {
  background: #ffffff;
}
.camera-row:nth-child(even) {
  background: #000;
  color: #ffffff;
}
.camera-row:hover {
  background-color: #53535344;
}
button {
  background-color: #c2c2c2;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}
</style>