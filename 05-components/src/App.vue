<template>
<section>
  <h2>Friends list</h2>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      {{friend.name}} - {{friend.email}} - {{friend.phone}}
    </li>  
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'john',
          name: 'John doe',
          phone: '01 2345 6789',
          email: 'johndoe@localhost.com',
        },
        {
          id: 'doe',
          name: 'Doe John',
          phone: '98 7654 3210',
          email: 'doejohn@localhost.com',
        },
      ]
    };
  },
};
</script>
