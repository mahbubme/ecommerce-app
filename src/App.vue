<template>
  <div id="app">
    <b-container class="bv-example-row header">
        <app-header></app-header>
    </b-container>
    <router-view/>
  </div>
</template>

<script>
    import Header from './views/Header.vue';

    export default {
        created() {
            this.$store.dispatch("fetchProducts").then(() => {
                let products     = this.$store.state.products,
                    categoryName = this.$route.query.category;

                this.$store.state.filterProducts = this.$store.state.products;

                if ( categoryName ) {
                    this.$store.state.filterProducts = ( categoryName === '-1' ) ? products : products.filter( product => product.category === categoryName );
                }
            })
        },
        watch: {
            '$route' (to, from) {
                if ( to.name === 'home' ) {
                    this.$store.state.filterProducts = this.$store.state.products;
                }
            }
        },
        components: {
            appHeader: Header
        }
    }
</script>

<style>
    body, h1, h2, h3, h4, h5, h6, p, span, a{
        font-family: 'Roboto', sans-serif;
    }

    .header{
        margin-bottom: 30px;
    }
</style>
