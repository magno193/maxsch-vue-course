const app = Vue.createApp({
  data() {
    return {
      course: {
        link: 'https://vuejs.org/',
        goalTextA: 'Finish the course and learn Vue!',
        goalTextB: 'Master Vue and build amazing apps!'
      },
      counter: 10,
      me: { name: '' },
      confirmedName: ''
    }
  },
  methods: {
    courseGoal() {
      let random = Math.random();
      return random < 0.5 ? this.course.goalTextA : this.course.goalTextB;
    },
    increment(num) {
      !num && (num = 1);
      this.counter += num;
    },
    decrement() {
      this.counter > 0 && this.counter--;
    },
    setName({ target }, lastName,) {
      this.me.name = `${target.value} ${lastName}`;
    },
    confirmName() {
      this.confirmedName = this.me.name;
    }
    ,
    submitForm() {
      alert('Submitted!')
    }
  }
});

app.mount('#user-goal');