<template>
  <main>
    <section class="container">
      <ActiveUser :username="user.name" :userage="user.age" />
      <UserData @submit-user="submitUser" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'No name, register one',
        age: 0
      }
    };
  },
  methods: {
    submitUser(userData) {
      this.user.name = userData.name;
      this.user.age = +userData.age;
    }
  }
}
</script>

<style>
#app .container {
  display: flex;
  margin: 0 auto;
  max-width: 780px;
  justify-content: space-evenly;
  border: 1px #ccc solid;
  border-radius: 8px;
}

#app form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>