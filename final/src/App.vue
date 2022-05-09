<script setup>
function play(element) {
  var audio = document.getElementById(element);
  audio.play();
}
</script>

<template>
<div class="container">
  <h1>Tati's Camera Collection</h1>
  <p>The intention behind this app is to preserve design history with not only pictures but also sound! My camera collection has been gathered from various sources like my grandfather's attic, garage sales, and ebay. Analog cameras are a lost art. This is my tribute to honoring the design and thoughtfulness behind its mechanics. Below is a key indicating which of the cameras are rare.</p>
  <div class="key">
    <div class="dot"></div>
    <span class="legendtext">rare</span>
  </div>
</div>
<table class="table">
  <thead>
    <th>Image</th> 
    <th>Name</th>
    <th>Released</th>
    <th>Rarity</th>
    <th>Film Type</th>
    <th>Sound</th> 
  </thead>
  <tbody>
    <!-- The play function passes an id parameter that matches the audio id. Each audio file imported needs to have its own unique id for it to work.-->
    <tr class="camera-row">
      <td><img src="./assets/p-104.jpg"></td>
      <td>Polaroid Land Model 104</td>
      <td>1965</td>
      <td>common</td>
      <td>100 Series Pack Film</td>
      <td>
        <button v-on:click="play('audio1')">PLAY</button>
        <audio id="audio1" src="./104.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="/assets/p-swinger.jpg"></td>
      <td>Polaroid Swinger Model 20</td>
      <td>1965</td>
      <td>very common</td>
      <td>20 Series Roll Film</td>
      <td>
        <button v-on:click="play('audio2')">PLAY</button>
        <audio id="audio2" src="./swinger.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/p-onestep.jpg"></td>
      <td>Polaroid OneStep SX-70</td>
      <td>1977</td>
      <td>not common</td>
      <td>SX-70 Pack Film</td>
      <td>
        <button v-on:click="play('audio3')">PLAY</button>
        <audio id="audio3" src="./one-step.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/brownie.jpg"></td>
      <td>Kodak Brownie Fiesta</td>
      <td>1962</td>
      <td class="rare">rare</td>
      <td>127 Film</td>
      <td>
        <button v-on:click="play('audio4')">PLAY</button>
        <audio id="audio4" src="./brownie.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/argoflex.jpg"></td>
      <td>Argus Argoflex Seventy-Five</td>
      <td>1949</td>
      <td>not common</td>
      <td>620 Film</td>
      <td>
        <button v-on:click="play('audio5')">PLAY</button>
        <audio id="audio5" src="./argus-75.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/minolta.jpg"></td>
      <td>Minolta 16 Model P</td>
      <td>1960</td>
      <td>not common</td>
      <td>16mm Film</td>
      <td>
        <button v-on:click="play('audio6')">PLAY</button>
        <audio id="audio6" src="./minolta.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/sun600.jpg"></td>
      <td>Polaroid Sun 600</td>
      <td>1981</td>
      <td>very common</td>
      <td>600 Pack Film</td>
      <td>
        <button v-on:click="play('audio7')">PLAY</button>
        <audio id="audio7" src="./600.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/spectra.jpg"></td>
      <td>Polaroid Spectra System SE</td>
      <td>1997</td>
      <td>very common</td>
      <td>1200 Pack Film</td>
      <td>
        <button v-on:click="play('audio8')">PLAY</button>
        <audio id="audio8" src="./spectra.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/instamatic.jpg"></td>
      <td>Kodak Instamatic X-15</td>
      <td>1970</td>
      <td class="rare">rare</td>
      <td>126 Film</td>
      <td>
        <button v-on:click="play('audio9')">PLAY</button>
        <audio id="audio9" src="./15.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/teleinstamatic.jpg"></td>
      <td>Kodak Tele-Instamatic 608</td>
      <td>1975</td>
      <td>common</td>
      <td>110 Film</td>
      <td>
        <button v-on:click="play('audio10')">PLAY</button>
        <audio id="audio10" src="./608.mp3"></audio>
      </td>
    </tr>

    <tr class="camera-row">
      <td><img src="./assets/argus.jpg"></td>
      <td>Argus C3</td>
      <td>1939</td>
      <td class="rare">rare</td>
      <td>35mm Film</td>
      <td>
        <button v-on:click="play('audio11')">PLAY</button>
        <audio id="audio11" src="./argus-c3.mp3"></audio>
      </td>
    </tr>

  </tbody>
</table>
</template>

<style>
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
.container p {
  margin: auto 0;
  padding-bottom: 20px;
  line-height: 22px;
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
/* TABLE */
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
  border-radius: 15px;
}
td:first-child {
  width: 400px;
}
.rare {
  color: #ff0000;
}
img {
  width: 100%;
  border-radius: 0px;
}
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
/* Responsive table */
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
h1 {
  font-size: 40px;
}
/* Force table to not be like tables anymore */
table, thead, tbody, th, td, tr { 
	display: block; 
  border-radius: 0px;
}
/* Hide table headers (but not display: none;, for accessibility) */
thead th { 
	position: absolute;
	top: -9999px;
	left: -9999px;
}
tr { 
  border: 1px solid orange;
  border-radius: 10px; 
}	
td { 
/* Behave like a "row" */
	border: none;
	border-bottom: 1px solid orange; 
	position: relative;
	padding-left: 50%; 
}
td:before { 
/* Now like a table header */
	position: absolute;
	left: 6px;
	width: 50%; 
	padding-right: 10px; 
	white-space: nowrap;
}
td:first-child {
  width: 100%;
}
/* Label the data */
td:nth-of-type(1):before { content: "Image"; }
td:nth-of-type(2):before { content: "Name"; }
td:nth-of-type(3):before { content: "Released"; }
td:nth-of-type(4):before { content: "Rarity"; }
td:nth-of-type(5):before { content: "Film Type"; }
td:nth-of-type(6):before { content: "Sound"; }
}
</style>
