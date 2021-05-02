Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  methods: {
    addToResult(value) {
      this.result += value;
    }
  },
  computed: {
    resultMessage() {
      if (this.result === 37) return this.resultMessage = 37;
      return this.result < 37 ? 'Not there yet' : 'Too much!';
    }
  },
  watch: {
    result() {
      this.result > 37 && (setTimeout(() => { this.result = 0 }, 5000));
    }
  }
}).mount('#assignment');
