<template>
  <pre>{{ fullName }}</pre>
  <pre>{{ age }}</pre>
  <slot></slot>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const fullName = computed(() => `${props.firstName} ${props.lastName}`);
    console.log(context);
    return { fullName };
  },
};
</script>