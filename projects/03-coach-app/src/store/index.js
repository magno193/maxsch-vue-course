import { createStore } from 'vuex';
import coachesModule from './modules/coaches';
import registersModule from './modules/registers';

const store = createStore({
  modules: {
    coaches: coachesModule,
    registers: registersModule,
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId
    },
  },
});

export default store;