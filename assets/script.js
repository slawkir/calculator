const vueApp = Vue.createApp({
  data() {
    return {
      result: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operators: ['+','-','*','/',]
    }
  },
  methods: {
    input: function (char) { 
      if (typeof this.result === 'number') { 
        this.result = '';
      }
      this.result += char;
    },
    reset: function () {
      this.result = '';
    }, 
    calc: function () { 
      this.result = eval(this.result);
      console.log(typeof this.result);
    }
  }
});

vueApp.mount('#app');