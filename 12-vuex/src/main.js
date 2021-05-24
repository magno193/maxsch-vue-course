import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, payload) {
      state.counter += payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 500);
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 1000);
    }
  }
});
const app = createApp(App);
app.use(store);

app.mount('#app');
