import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  state: () => ({
    userId: null,
    token: null,
    didAutoLogout: false,
  }),
  mutations,
  actions,
  getters,
};
