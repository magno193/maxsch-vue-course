export default {
  contactCoach({ commit }, payload) {
    const { coachId, email, message } = payload;
    const newRequest = {
      id: new Date().toISOString(),
      coachId: coachId,
      userEmail: email,
      userMessage: message,
    };
    commit('addRequest', newRequest);
  },
};