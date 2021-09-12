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
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = responseData.name; // name é id gerado automaticamente pelo o firebase
    newRequest.coachId = coachId;

    commit('addRequest', newRequest);

  },
  async fetchRequests({ rootGetters, commit }) {
    const coachId = rootGetters.userId
    const response = await fetch(`https://coach-app-2f095-default-rtdb.firebaseio.com/requests/${coachId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId,
        userEmail: responseData[key].userEmail,
        userMessage: responseData[key].userMessage,
      }
      requests.push(request);
    }

    commit('setRequests', requests);
  }
};