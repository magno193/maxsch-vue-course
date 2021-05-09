<template>
 <li>
   <h2>{{ name }}</h2>
   <button @click="toggleDetails">{{ detailsButtonText }}</button>
   <ul v-if="detailsAreVisible">
     <li><strong>Phone: </strong>{{ phoneNumber }}</li>
     <li><strong>Email: </strong>{{ emailAddress }}</li>
   </ul>
 </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress'],
  data() {
    return {
      detailsAreVisible: false,
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