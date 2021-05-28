import { createStore } from 'vuex';
import coachesModule from './modules/coaches';
import registersModule from './modules/registers';

const store = createStore({
  modules: {
    coaches: coachesModule,
    registers: registersModule,
  },
});

export default store;