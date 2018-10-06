<template>
    <ul class="list-unstyled">
        <cart-item v-for="(item, index) in cartItems" :item-index="index" :item="item" ></cart-item>
    </ul>
</template>

<script>
    import cartItem from './Item.vue';

    export default {
        name: 'Items',
        computed: {
            cartItems() {
                return this.$store.state.carts;
            }
        },
        components: {
            cartItem
        }
    }
</script>

<style scoped>
</style>