<template>
 <li>
   <h2>{{ friend.name }}</h2>
   <button @click="toggleDetails">{{ detailsButtonText }}</button>
   <ul v-if="detailsAreVisible">
     <li><strong>Phone: </strong>{{ friend.phone }}</li>
     <li><strong>Email: </strong>{{ friend.email }}</li>
   </ul>
 </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {        
        id: 'john',
        name: 'John doe',
        phone: '01 2345 6789',
        email: 'johndoe@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
  computed: {
    detailsButtonText() { return this.detailsAreVisible ? 'Hide Details' : 'Show Details' }
  }
}
</script>

<style>

</style>