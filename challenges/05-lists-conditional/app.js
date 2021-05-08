Vue.createApp({
  data() {
    return {
      inputValue: '', tasks: [], flag: true
    }
  },
  methods: {
    addTask() {
      if (!this.inputValue) return;
      this.tasks.push(this.inputValue);
      this.inputValue = '';
    },
    toggleList() {
      this.flag = !this.flag;
    }
  },
  computed: {
    flagText() { return this.flag ? 'Show List' : 'Hide List' }
  }
}).mount('#assignment');