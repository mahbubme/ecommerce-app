<template>
  <div class="home">
    <Products msg="All Products"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/products/Products.vue'

export default {
  name: 'products',
  components: {
    Products
  }
}
</script>
