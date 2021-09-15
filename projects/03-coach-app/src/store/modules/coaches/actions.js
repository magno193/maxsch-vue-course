export default {
  async registerCoach({ commit, rootGetters }, payload) {
    const userId = rootGetters.userId
    const { first, last, desc, rate, areas } = payload;
    const coachData = {
      firstName: first,
      lastName: last,
      description: desc,
      hourlyRate: rate,
      areas,
    };

    const token = rootGetters.token;
    const response = await fetch(`https://coach-app-2f095-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    if (!response.ok) {
      const responseData = await response.json();
      const error = new Error(responseData.message || 'Failed to update');
      throw error;
    }

    commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches({ commit, getters }, payload) {
    if (!payload.forceRefresh && !getters.shouldUpdate) return;

    const response = await fetch('https://coach-app-2f095-default-rtdb.firebaseio.com/coaches.json');
    const responseData = await response.json();

    if (!response.ok) {
      const responseData = await response.json();
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    commit('setCoaches', coaches);
    commit('setFetchTimestamp');
  }
};