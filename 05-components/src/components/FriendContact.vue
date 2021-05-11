<template>
 <li>
   <h2>{{ name }} {{ favoriteText }}</h2>
   <button @click="toggleFavorite">Toggle Favorite</button>
   <button @click="toggleDetails">{{ detailsButtonText }}</button>
   <ul v-if="detailsAreVisible">
     <li><strong>Phone: </strong>{{ phoneNumber }}</li>
     <li><strong>Email: </strong>{{ emailAddress }}</li>
   </ul>
 </li>
</template>

<script>
export default {
  /* Simple way */ 
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: function(value) {
        return value === '1' || value === '0'
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
        return;
      }
      this.friendIsFavorite = '1';
    },
  },
  computed: {
    detailsButtonText() { return this.detailsAreVisible ? 'Hide Details' : 'Show Details' },
    favoriteText() { return this.friendIsFavorite === '1' ? '(Favorite)' : ''}
  }
}
</script>

<style>

</style>