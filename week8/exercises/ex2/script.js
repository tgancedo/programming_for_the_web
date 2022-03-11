let vm = Vue.createApp({
  data() {
    return {
        firstNum: null,
        secondNum: null,
        operation: 'add',
        total: null
    }
  },
  methods: {
    calculate: (num1, num2) => {
      switch (vm.operation) {
        case 'add':
          vm.total = num1 + num2;
          break;
        case 'subtract':
          vm.total = num1 - num2;
          break;
        case 'multiply':
          vm.total = num1 * num2;
          break;
        case 'divide':
          vm.total = num1 / num2;
          break;
        default:
          window.alert('unexpected operator');
          break;
      }
      this.firstNum = this.secondNum = null;
    }
  }
}).mount("#calcApp")