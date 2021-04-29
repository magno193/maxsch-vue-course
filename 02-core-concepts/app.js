const app = Vue.createApp({
  data() {
    return {
      course: {
        link: 'https://vuejs.org/',
        goalTextA: 'Finish the course and learn Vue!',
        goalTextB: 'Master Vue and build amazing apps!'
      }
    }
  },
  methods: {
    courseGoal() {
      let random = Math.random();
      return random < 0.5 ? this.course.goalTextA : this.course.goalTextB;
    }
  }
});

app.mount('#user-goal');