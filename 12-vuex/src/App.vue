<template>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter />
    <FavoriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // Action can use async code
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
  computed: {
    ...mapGetters({
      isAuth: 'userIsAuthenticated',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>