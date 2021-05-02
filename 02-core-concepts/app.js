Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  methods: {
    selectBox(box) {
      switch (box) {
        case 'A':
          this.boxA = !this.boxA;
          break;
        case 'B':
          this.boxB = !this.boxB;
          break;
        case 'C':
          this.boxC = !this.boxC;
          break;
      }
    }
  }
}).mount('#styling');
