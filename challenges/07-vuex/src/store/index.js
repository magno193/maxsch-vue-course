import { createStore } from 'vuex';
import cartModule from './modules/cart.js';
import productsModule from './modules/product.js';

export default createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
  }
});