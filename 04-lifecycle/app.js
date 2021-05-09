const app = Vue.createApp({
  data() {
    // Vue turns the data object as a reactive data object, using the JavaScript Proxy resource.
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
/* ----------------------------------------------------------------------------- */
const data = { message: 'Hello', longMessage: 'Hello! World!' };
const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
  }
};
const proxy = new Proxy(data, handler);
console.log(proxy.longMessage);
proxy.message = 'Hello!!!';
console.log(proxy.longMessage);