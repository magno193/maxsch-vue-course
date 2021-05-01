Vue.createApp({
  data() {
    return {
      inputValue: '',
      savedValue: '',
      input: ''
    }
  },
  methods: {
    showAlert() {
      alert('Clicked!');
    },
    handleKeydown({ target }) {
      this.inputValue = target.value;
    },
    handleInputEnter() {
      this.savedValue = this.inputValue;
    }
  },

}).mount('#assignment');
