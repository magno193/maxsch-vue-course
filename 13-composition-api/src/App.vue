<template>
  <section class="container">
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <h2>Inputs</h2>
    <p>Utilizando <code>computed</code></p>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
      <div>{{ fullName }}</div>
    </div>
    <button @click="changeAge">Change age</button>
    <h4>Age: {{ age }}</h4>
  </section>
  <hr />
  <section class="container">
    <h2>
      <code>{{ user }}</code>
    </h2>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.age }}</h3>
    <button @click="toggleSection">Toggle section 2 {{ section }}</button>
  </section>
  <hr />
  <section class="container" v-show="section">
    <h2><code>toRefs</code></h2>
    <h3>{{ userName }}</h3>
    <h3>{{ userAge }}</h3>
  </section>
</template>

<script>
import { reactive, ref, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/Userdata.vue';
export default {
  components: { UserData },
  setup() {
    const user = reactive({
      name: 'Alexandre',
      age: null,
    });
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };
    const age = ref(27);
    provide('userAge', age);
    const changeAge = () => {
      age.value = Math.floor(Math.random() * 100);
    };

    const fullName = computed(() => `${firstName.value} ${lastName.value}`); // readonly
    watch([firstName, age], (newValues, oldValues) => {
      console.log(newValues);
      console.log(oldValues);
    });

    const setAge = (year, month, day) => {
      return (
        new Date(
          Date.now() - new Date(year, month - 1, day).getTime()
        ).getUTCFullYear() - 1970
      );
    };

    const section = ref(true);
    const toggleSection = () => {
      section.value = !section.value;
    };

    setTimeout(() => {
      // reactive permite acessar o objeto diretamente
      user.name += ' Magno';
      user.age = setAge(1993, 12, 6);
    }, 2000);

    // Propriedades com reatividadee
    const userRefs = toRefs(user);

    return {
      user,
      userName: userRefs.name,
      userAge: userRefs.age,
      section,
      toggleSection,
      fullName,
      firstName,
      lastName,
      age,
      changeAge,
      lastNameInput,
      setLastName,
    };
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
hr {
  margin: 0.5rem;
}
</style>