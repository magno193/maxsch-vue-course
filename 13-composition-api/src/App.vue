<template>
  <section class="container">
    <h2>
      <code>{{ user }}</code>
    </h2>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.age }}</h3>
  </section>
  <section class="container">
    <h2><code>toRefs</code></h2>
    <h3>{{ userName }}</h3>
    <h3>{{ userAge }}</h3>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const user = reactive({
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
      // reactive permite acessar o objeto diretamente
      user.name += ' Magno';
      user.age = setAge(1993, 12, 6);
    }, 2000);

    // Propriedades com reatividadee
    const userRefs = toRefs(user);

    return { user, userName: userRefs.name, userAge: userRefs.age };
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