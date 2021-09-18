<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
  <section class="container">
    <h2>Como objeto</h2>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // ref é para um valor reativo
    const uName = ref('Alexandre');
    const uAge = ref('Idade');

    const user = ref({
      name: 'Alexandre',
      age: null,
    });

    const setAge = (year, month, day) => {
      return (
        new Date(
          Date.now() - new Date(year, month - 1, day).getTime()
        ).getUTCFullYear() - 1970
      );
    };
    setTimeout(() => {
      // .value é onde modificamos o valor reativo
      uName.value += ' Magno';
      uAge.value = setAge(1993, 12, 6);

      user.value.name += ' Magno';
      user.value.age = setAge(1993, 12, 6);
    }, 2000);

    return { userName: uName, age: uAge, user };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>