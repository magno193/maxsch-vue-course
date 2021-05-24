<template>
  <h3>{{ $store.state.counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>