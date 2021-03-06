<template>
  <div>
    <base-dialog
      :show="!!errorMessage"
      title="An error occured!"
      @close="resetErrorMessage"
    >
      <p>{{ errorMessage }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters" />
    </section>
    <base-card>
      <section>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">
            Refresh
          </base-button>
          <base-button v-if="!isLoggedIn" link to="/auth?redirect=register">
            Login to Register as Coach
          </base-button>
          <base-button
            v-if="isLoggedIn && !isCoach && !isloading"
            link
            to="/register"
          >
            Register as a Coach
          </base-button>
        </div>
        <div v-if="isloading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          />
        </ul>
        <h3 v-else>No coaches found!</h3>
      </section>
    </base-card>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      isloading: false,
      errorMessage: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['isAuthenticated'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.activeFilters.backend && coach.areas.includes('backend'))
          return true;
        if (this.activeFilters.career && coach.areas.includes('career'))
          return true;

        return false;
      });
    },
    hasCoaches() {
      return !this.isloading && this.$store.getters['coaches/hasCoaches'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isloading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.errorMessage = error.message || 'Something went wrong';
      }
      this.isloading = false;
    },
    resetErrorMessage() {
      this.errorMessage = null;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>