<template>
  <base-dialog
    :show="!!errorMessage"
    title="An error has occurred"
    @close="handleError"
  >
    {{ errorMessage }}
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
      </header>
      <div v-if="isLoading">
        <base-spinner />
      </div>
      <ul v-else-if="hasRequests && !isLoading">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.userMessage"
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem';
export default {
  name: 'RequestsReceived',
  components: { RequestItem },
  computed: {
    ...mapGetters('requests', ['requests', 'hasRequests']),
  },
  data: () => ({
    isLoading: true,
    errorMessage: null,
  }),
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.errorMessage =
          error.message || 'Something failed. Please try again later.';
      }
      this.isLoading = false;
    },
    handleError() {
      this.errorMessage = null;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>