export default {
  contactCoach(context, payload) {
    const { coachId, email, message } = payload;
    const newRequest = {
      id: new Date().toISOString(),
      coachId: coachId,
      userEmail: email,
      userMessage: message,
    };
    context.commit('addRequest', newRequest);
  },
};