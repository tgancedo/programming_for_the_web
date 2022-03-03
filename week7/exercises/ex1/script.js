Vue.createApp({
  data() {
    return {
      llamas: "https://en.wikipedia.org/wiki/Llama",
      llamasTitle: "Llamas are cool",
      alpacas: "https://en.wikipedia.org/wiki/Alpaca",
      alpacasTitle: "Alpacas are cooler",
      baseStyle: {
        color: "red",
      },
      overRideStyle: {
        color: "purple"
      },
      isActive: true
    }
  }
}).mount('#app')