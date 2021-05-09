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
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate() → (nothing on the screen)');
  },
  created() {
    console.log('created() → (nothing on the screen)');
  },
  beforeMount() {
    console.log('beforeMount() → (nothing on the screen)');
  },
  mounted() {
    console.log(`mount() → (It's on the screen)`);
  },
  beforeUpdate() {
    console.log('beforeUpdate() → (Data is updated)');
  },
  updated() {
    console.log('updated() → (Data is updated and on the screen)');
  },
  beforeUnmount() {
    console.log('beforeUnmount() → (only called when app.unmount())');
  },
  unmounted() {
    console.log('unmounted() → (only called when app.unmount())');
  }
});

app.mount('#app');
setTimeout(() => {
  app.unmount('#app');
}, 5000);
// /* ----------------------------------------------------------------------------- */
// const data = { message: 'Hello', longMessage: 'Hello! World!' };
// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//   }
// };
// const proxy = new Proxy(data, handler);
// console.log(proxy.longMessage);
// proxy.message = 'Hello!!!';
// console.log(proxy.longMessage);