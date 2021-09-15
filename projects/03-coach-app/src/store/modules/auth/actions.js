export default {
  login({ dispatch }, payload) {
    return dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  signup({ dispatch }, payload) {
    return dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth({ commit }, payload) {
    const mode = payload.mode;
    let url = (mode === 'signup')
      ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvo61tjQ1VGYEAubpzmE4YiY0F-rdAZao'
      : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvo61tjQ1VGYEAubpzmE4YiY0F-rdAZao';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate.');
      throw error;
    }

    localStorage.setItem('COACH_token', responseData.idToken);
    localStorage.setItem('COACH_userId', responseData.localId);

    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  tryLogin({ commit }) {
    const token = localStorage.getItem('COACH_token');
    const userId = localStorage.getItem('COACH_userId');
    if (token && userId) {
      commit('setUser', {
        token,
        userId,
        tokenExpiration: null,
      });
    }
  },
  logout({ commit }) {
    commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
