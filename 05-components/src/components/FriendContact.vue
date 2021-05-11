<template>
 <li>
   <h2>{{ name }} {{ favoriteText }}</h2>
   <button @click="toggleFavorite">Toggle Favorite</button>
   <button @click="toggleDetails">{{ detailsButtonText }}</button>
   <ul v-if="detailsAreVisible">
     <li><strong>Phone: </strong>{{ phoneNumber }}</li>
     <li><strong>Email: </strong>{{ emailAddress }}</li>
   </ul>
   <button @click="$emit('delete-contact', id)">Delete</button>
 </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
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
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) return true;
      console.warn('Id is missing');
      return false;             
    },
    'delete-contact': function(id) {
      if (id) return true;
      console.warn('Id is missing');
      return false;             
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }
  },
  computed: {
    detailsButtonText() { return this.detailsAreVisible ? 'Hide Details' : 'Show Details' },
    favoriteText() { return this.isFavorite ? '(Favorite)' : ''}
  }
}
</script>

<style>

</style>