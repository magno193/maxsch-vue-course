let timer;

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
  async auth({ commit, dispatch }, payload) {
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

    const expiresIn = responseData.expiresIn * 1000; // Para ms
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('COACH_token', responseData.idToken);
    localStorage.setItem('COACH_userId', responseData.localId);
    localStorage.setItem('COACH_tokenExpiration', expirationDate)

    timer = setTimeout(() => {
      dispatch('autoLogout');
    }, expiresIn)

    commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },
  tryLogin({ commit, dispatch }) {
    const token = localStorage.getItem('COACH_token');
    const userId = localStorage.getItem('COACH_userId');
    const tokenExpiration = localStorage.getItem('COACH_tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) return;

    timer = setTimeout(() => {
      dispatch('autoLogout');
    }, expiresIn)

    if (token && userId) {
      commit('setUser', {
        token,
        userId,
      });
    }
  },
  logout({ commit }) {
    localStorage.removeItem('COACH_token');
    localStorage.removeItem('COACH_userId');
    localStorage.removeItem('COACH_tokenExpiration');

    clearTimeout(timer);

    commit('setUser', {
      token: null,
      userId: null,
    });
  },
  autoLogout({ dispatch, commit }) {
    dispatch('logout');
    commit('setAutoLogout');
  }
};
