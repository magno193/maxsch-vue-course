Vue.createApp({
  data() {
    return {
      inputClass: '',
      savedClass: '',
      toggleFlag: true,
      displayClass: '',
      inputColor: '',
      savedColor: ''
    }
  },
  methods: {
    saveClass() {
      this.savedClass = this.inputClass;
      this.inputClass = '';
    },
    toggleParagraph() {
      this.toggleFlag = !this.toggleFlag;
      this.toggleFlag
        ? (this.displayClass = 'visible')
        : (this.displayClass = 'hidden');
    },
    saveStyle() {
      this.savedColor = this.inputColor;
      this.inputColor = '';
    }
  }
}).mount("#assignment");