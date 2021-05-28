export default {
  registerCoach(context, payload) {
    const { first, last, desc, rate, areas } = payload;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: first,
      lastName: last,
      description: desc,
      hourlyRate: rate,
      areas,
    };
    context.commit('registerCoach', coachData);
  }
};