<template>
    <b-container class="bv-example-row products">
        <b-row>
            <Product v-for="product in products" :product="product"></Product>
        </b-row>
    </b-container>
</template>

<script>
    import Product from './Product.vue';

    export default {
      name: 'Products',
      computed: {
        products() {
          return this.$store.state.products;
        }
      },
      components: {
        Product
      }
    }
</script>

<style scoped>
</style>
