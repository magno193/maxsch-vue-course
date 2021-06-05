export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId
    const { first, last, desc, rate, areas } = payload;
    const coachData = {
      firstName: first,
      lastName: last,
      description: desc,
      hourlyRate: rate,
      areas,
    };

    const response = await fetch(`https://coach-app-2f095-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    if (response.ok) {
      console.table(coachData)
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await fetch('https://coach-app-2f095-default-rtdb.firebaseio.com/coaches.json');
    const responseData = await response.json();

    if (response.ok) {
      // ... 
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

    context.commit('setCoaches', coaches);
  }
};