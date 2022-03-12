const vm = Vue.createApp({
  data() {
    return {
      newCameraObj: {
        image: "",
        name: "",
        released: "",
        rarity: "",
        filmType: "",
        collected: false
      },
      cameras: 
      [{
        image: "assets/p-104.jpg",
        name: "Polaroid Land Model 104",
        released: "1965",
        rarity: "common",
        filmType: "100 Series Pack Film",
        collected: true
      }, {
        image: "assets/p-swinger.jpg",
        name: "Polaroid Swinger Model 20",
        released: "1965",
        rarity: "very common",
        filmType: "20 Series Roll Film",
        collected: true
      }, {
        image: "assets/p-onestep.jpg",
        name: "Polaroid OneStep SX-70",
        released: "1977",
        rarity: "not common",
        filmType: "SX-70 Pack Film",
        collected: true
      }, {
        image: "assets/brownie.jpg",
        name: "Kodak Brownie Fiesta",
        released: "1962",
        rarity: "rare",
        filmType: "127 Film",
        collected: true    
      }, {
        image: "assets/argoflex.jpg",
        name: "Argus Argoflex Seventy-Five",
        released: "1949",
        rarity: "not common",
        filmType: "620 Film",
        collected: true
      }]
    }
  },
  methods: {
    submitHandler: () => {
      console.log("submitted");
      vm.cameras = vm.cameras.concat(vm.newCameraObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newCameraObj = {
        image: "",
        name: "",
        released: "",
        rarity: "",
        filmType: "",
        collected: false
      };
    }
  }
}).mount("#cameraList");