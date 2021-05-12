<template>
  <form @submit.prevent="submitUser">
    <input type="text" v-model="nameValue" placeholder="Your name">
    <input type="number" v-model="ageValue" placeholder="Your age">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nameValue: '',
      ageValue: '',
      userData: {
        name: '',
        age: ''
      }
    }
  },
  methods: {
    submitUser(){
      if (this.nameValue && this.ageValue) {
        this.userData = {
          name: this.nameValue,
          age: this.ageValue
        };
        this.$emit('submit-user', this.userData);
      }
    }
  },
  emits: ['submit-user']
}
</script>
