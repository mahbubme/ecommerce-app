<template>
    <b-media tag="li">
        <b-img thumbnail rounded slot="aside" :src="item.img" alt="item.title" class="cart-product-img" />
        <h5 class="mt-0 mb-1 cart-item-title"><router-link :to="{ name: 'product', params: { id: item.id }}">{{ item.title }}</router-link></h5>
        <span class="cart-item-quantity">
            1 x
            <span class="cart-item-price">${{ item.price }}</span>
        </span>
        <span class="remove-product-from-cart" @click="removeCartItem">X</span>
    </b-media>
</template>

<script>
    export default {
        props: ['item', 'itemIndex'],
        computed: {
            itemQuantityInCart() {
                return this.$store.state.carts;
            }
        },
        methods: {
            removeCartItem() {
                this.$store.commit('removeCartItem', this.itemIndex);
            }
        }
    }
</script>

<style>
    li.media{
        padding: 10px 0;
        position: relative;
    }

    .cart-product-img{
        max-width: 64px;
        max-height: 64px;
    }

    .remove-product-from-cart{
        position: absolute;
        top: 20px;
        left: -20px;
        cursor: pointer;
        font-weight: 700;
    }

    .cart-item-title{
        line-height: 0.8;
    }

    .cart-item-title a{
        font-size: 12px;
    }

    .cart-item-quantity{
        font-size: 12px;
    }
</style>