<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup() {
    const products = inject('products');

    const route = useRoute(); // equivalente ao this.$route
    const selectedProduct = computed(() =>
      products.value.find((prdt) => prdt.id === route.params.pid)
    );
    const title = selectedProduct.value.title;
    const price = selectedProduct.value.price;
    const description = selectedProduct.value.description;

    return { title, price, description };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>