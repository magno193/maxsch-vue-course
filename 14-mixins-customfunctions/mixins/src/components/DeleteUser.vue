<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.mixin';
import UserAlert from '../components/UserAlert.vue';

export default {
  components: {
    UserAlert,
  },
  data: () => ({
    alertTitle: 'Delete user?',
    alertIsVisible: true, // sobreescreve mixin
  }),
  mixins: [alertMixin],
};
</script>