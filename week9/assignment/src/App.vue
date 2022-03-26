<script setup>
// javascript
import {reactive} from "vue";
import CameraRow from "./components/CameraRow.vue"
let cameras = 
      [{
        image: "./assets/p-104.jpg",
        name: "Polaroid Land Model 104",
        released: "1965",
        rarity: "common",
        filmType: "100 Series Pack Film",
        collected: true,
        id: 0
      }, {
        image: "./assets/p-swinger.jpg",
        name: "Polaroid Swinger Model 20",
        released: "1965",
        rarity: "very common",
        filmType: "20 Series Roll Film",
        collected: true,
        id: 1
      }, {
        image: "./assets/p-onestep.jpg",
        name: "Polaroid OneStep SX-70",
        released: "1977",
        rarity: "not common",
        filmType: "SX-70 Pack Film",
        collected: true,
        id: 2
      }, {
        image: "./assets/brownie.jpg",
        name: "Kodak Brownie Fiesta",
        released: "1962",
        rarity: "rare",
        filmType: "127 Film",
        collected: true,
        id: 3    
      }, {
        image: "./assets/argoflex.jpg",
        name: "Argus Argoflex Seventy-Five",
        released: "1949",
        rarity: "not common",
        filmType: "620 Film",
        collected: true,
        id: 4
      }, {
        image: "./assets/minolta.jpg",
        name: "Minolta 16 Model P",
        released: "1960",
        rarity: "not common",
        filmType: "16mm Film",
        collected: true,
        id: 5
      }, {
        image: "./assets/sun600.jpg",
        name: "Polaroid Sun 600",
        released: "1981",
        rarity: "very common",
        filmType: "600 Pack Film",
        collected: true,
        id: 6
      }, {
        image: "./assets/spectra.jpg",
        name: "Polaroid Spectra System SE",
        released: "1997",
        rarity: "very common",
        filmType: "1200 Pack Film",
        collected: true,
        id: 7
      }, {
        image: "./assets/instamatic.jpg",
        name: "Kodak Instamatic X-15",
        released: "1970",
        rarity: "rare",
        filmType: "126 Film",
        collected: true,
        id: 8
      }, {
        image: "./assets/teleinstamatic.jpg",
        name: "Kodak Tele-Instamatic 608",
        released: "1975",
        rarity: "common",
        filmType: "110 Film",
        collected: true,
        id: 9
      }, {
        image: "./assets/argus.jpg",
        name: "Argus C3",
        released: "1939",
        rarity: "rare",
        filmType: "35mm Film",
        collected: true,
        id: 10
      }];
      const newCameraObj = {
        image: "",
        name: "",
        released: "",
        rarity: "",
        filmType: "",
        collected: false
      };
      const state = reactive({cameras, newCameraObj})
      function addNewCamera() {
        state.cameras.push({
          image: state.newCameraObj.image,
          name: state.newCameraObj.name,
          released: state.newCameraObj.released,
          rarity: state.newCameraObj.rarity,
          filmType: state.newCameraObj.filmType,
          collected: state.newCameraObj.collected,
          id: state.cameras.length + 1,
        });
        state.newCameraObj.image = "";
        state.newCameraObj.name = "";
        state.newCameraObj.released = "";
        state.newCameraObj.rarity = "";
        state.newCameraObj.filmType = "";
        state.newCameraObj.collected = false;
      }
      function handleRowDelete(camera) {
        state.cameras = state.cameras.filter(item => {
          return item !== camera;
        });
      }
</script>

<template>
 <!-- html -->
  <div class="container">
    <h1>Vintage Camera Collection</h1>
    <div class="key">
      <div class="dot"></div>
      <span class="legendtext">rare</span>
    </div>
    <table class="table">
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Released</th>
        <th>Rarity</th>
        <th>Film Type</th>
        <th>Collected</th>
        <th>Actions</th> 
      </thead>
      <tbody>
      <CameraRow 
      v-for="camera in state.cameras" 
      v-bind:key="camera.id" 
      v-bind:camera="camera"
      v-on:delete-row="handleRowDelete"
      />
      </tbody>
    </table>
    <form v-on:submit.prevent="addNewCamera" class="new-camera-form">
      <fieldset>
        <legend>Add a camera to the collection</legend>
        <div>
          <label for="image">Image</label>
          <input id="image" type="text" v-model="newCameraObj.image">
        </div>
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" v-model="newCameraObj.name">
        </div>
        <div>
          <label for="released">Released</label>
          <input id="released" type="number" min="1900" max="2022" v-model="newCameraObj.released">
        </div>
        <div>
          <label for="rarity">Rarity</label>
          <input id="rarity" type="text" v-model="newCameraObj.rarity">
        </div>
        <div>
          <label for="film">Film Type</label>
          <input id="film" type="text" v-model="newCameraObj.film">
        </div>
        <div>
          <label for="collected">Collected</label>
          <input id="collected" type="checkbox" v-model="newCameraObj.collected">
        </div>
        <button type="submit">Add Item</button>
      </fieldset>
    </form>
  </div>
</template>

<style>
/* style */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  font-family: 'League Spartan', sans-serif;
  background-color: orange;
  text-align: center;
  font-size: 1.2rem;
}
h1 {
  padding-bottom: 30px;
  font-size: 70px;
  font-family: 'Goblin One', cursive;
  margin-bottom: 0;
}
/* LEGEND */
.key {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #ff0000;
  border-radius: 50%;
  display: inline-block;
}
.legendtext {
  padding-left: 10px;
  margin: auto 0;
}
.table {
  width: 100%;
}
thead, label {
  pointer-events: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 14px;
}
th.description {
  width: 30%;
}
td {
  padding: 20px;
  border-radius: 30px;
}
.rare {
  color: #ff0000;
}
img {
  width: 300px;
  border-radius: 30px;
}
/* FORM */
legend {
  padding-top: 30px;
  font-family: 'Goblin One', cursive;
}
.new-camera-form {
  margin: 30px 0;
  background-color: #53535344;
  border-radius: 30px;
  overflow: auto;
}
.new-camera-form fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
}
.new-camera-form div {
  margin: 30px;
  align-items: center;
}
.new-camera-form div label {
  width: 130px;
}
.new-camera-form input {
  width: 130px;
  display: block;
  border: none;
  border-radius: 10px;
  padding: 10px;
}
button {
  background-color: #c2c2c2;
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  cursor: pointer;
}
input[type="checkbox"] {
  width: 30px;
  height: 40px;
  border-radius: 10px;
  margin: auto;
}
input[type="number"] {
  width: 70px;
  margin: auto;
}
</style>
