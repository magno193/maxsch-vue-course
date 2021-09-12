export default {
  async contactCoach({ commit }, payload) {
    const { coachId, email, message } = payload;
    const newRequest = {
      userEmail: email,
      userMessage: message,
    };

    const response = await fetch(`https://coach-app-2f095-default-rtdb.firebaseio.com/requests/${coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    })
    const responseData = response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name; // name é id gerado automaticamente pelo o firebase
    newRequest.coachId = coachId;

    commit('addRequest', newRequest);
  },
};