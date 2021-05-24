<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    // login() {
    //   this.$store.dispatch('login');
    // },
    // logout() {
    //   this.$store.dispatch('logout');
    // },
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters({
      isAuth: 'userIsAuthenticated',
    }),
  },
};
</script>