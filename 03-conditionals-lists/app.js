const app = Vue.createApp({
  data() {
    return { goalInputValue: '', goals: [] };
  },
  methods: {
    addGoal() {
      if (!this.goalInputValue) return;
      this.goals.push(this.goalInputValue);
      this.goalInputValue = '';
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
