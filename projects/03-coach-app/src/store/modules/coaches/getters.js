export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && !!state.coaches.length;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetched = state.lastFetched;
    if (!lastFetched) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    // Se passou 1 minuto, retorne true
    return (currentTimestamp - lastFetched) / 1000 > 60;
  }
};