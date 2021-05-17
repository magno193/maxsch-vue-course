<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="inputIsInvalid">
      <h2>Input is Invalid</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </teleport>
</template>
<script>
import ErrorAlert from "./ErrorAlert";
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const inputValue = this.$refs.goal.value;
      console.log(this.$refs);
      if (!inputValue) {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
  components: { ErrorAlert },
};
</script>