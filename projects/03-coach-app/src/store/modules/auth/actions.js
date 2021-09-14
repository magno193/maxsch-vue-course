export default {
  login() { },
  async signup({ commit }, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvo61tjQ1VGYEAubpzmE4YiY0F-rdAZao', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.warn(responseData);
      const error = new Error(responseData.message || 'Failed to authenticate.');
      throw error;
    }

    console.log(responseData);
    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
