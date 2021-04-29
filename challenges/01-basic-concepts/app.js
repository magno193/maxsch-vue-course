const app = Vue.createApp({
  data() {
    return {
      me: { name: 'Alexandre Ferreira', age: 27, number: Math.random().toFixed(1) },
      randomImage: 'https://picsum.photos/200',
    }
  },
})

app.mount('#assignment');