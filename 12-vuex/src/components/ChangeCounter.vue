<template>
  <button @click="incre">Add 2</button>
  <button @click="incrs({ value: 11 })">Add 22</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      incre: 'increment',
      incrs: 'increase',
    }),
  },
};
</script>