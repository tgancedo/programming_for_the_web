Vue.createApp({
  data() {
    return {
      cameras: 
      [{
        name: "Polaroid Land Model 104",
        released: "1965",
        rarity: "common",
        filmType: "100 Series Pack Film",
        description: "This was my grandfather's go-to family vacation camera. Its biggest features are the folding bellows and automatic exposure."
      }, {
        name: "Polaroid Swinger Model 20",
        released: "1965",
        rarity: "very common",
        filmType: "20 Series Roll Film",
        description: "Meet the Swinger. Known for being a hip camera among the youth thanks to its catchy jingle sung by Barry Manilow."
      }, {
        name: "Polaroid OneStep SX-70",
        released: "1977",
        rarity: "not common",
        filmType: "SX-70 Pack Film",
        description: "One of the most iconic instant film cameras. It's appearance may seem familiar as it was the inspiration for the original instagram logo."
      }, {
        name: "Kodak Brownie Fiesta",
        released: "1962",
        rarity: "rare",
        filmType: "127 Film",
        description: "Looking at the bottom of the camera, it says it was fabricated in Spain. The camera functions are in Spanish so it makes me think that my grandfather purchased this when they were in Spain!"
      }, {
        name: "Argus Argoflex Seventy-Five",
        released: "1949",
        rarity: "not common",
        filmType: "620 Film",
        description: "This pseudo twins lens reflex camera is made out of bakelite, an early form of plastic from the Art Deco era."
      }]
    }
  }
}).mount("#cameraList");