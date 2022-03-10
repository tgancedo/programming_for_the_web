Vue.createApp({
  data() {
    return {
      firstName: '',
      lastName: '',
      street: '',
      state: 'MN',
      colors: [
        {name: 'White', value: 'white'},
        {name: 'Beige', value: 'beige'},
        {name: 'Fawn (light, medium, dark)', value: 'fawn'},
        {name: 'Brown (light, medium, dark)', value: 'brown'},
        {name: 'brown'},
        {name: 'Bay Black', value: 'bay-black'},
        {name: 'True Black', value: 'true-black'},
        {name: 'Rose Gray (light, medium, dark)', value: 'rose-gray'},
        {name: 'Silver Gray (light, medium, dark)', value: 'silver-gray'}
      ],
      status: ''
    }
  }
}).mount('#alpacaForm')