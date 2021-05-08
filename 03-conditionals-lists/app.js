const app = Vue.createApp({
  data() {
    return { goalInputValue: '', goals: [] };
  },
  methods: {
    addGoal() {
      if (!this.goalInputValue) return;
      this.goals.push(this.goalInputValue);
      this.goalInputValue = '';
    }
  }
});

app.mount('#user-goals');
