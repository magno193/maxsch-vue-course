export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 100);
  },
  increase(context, payload) {
    setTimeout(() => {
      context.commit('increase', payload);
    }, 200);
  },
};
