<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <router-link to="/" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Products</a></router-link>
                <router-link to="/about" activeClass="active" tag="li" class="nav-item"><a class="nav-link">About</a></router-link>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <div class="p-2">
                  <b-btn id="popoverButton-sync" variant="primary">${{ totalCartAmount }} ({{ totalCartItems }})</b-btn>
                </div>
                <div class="p-2">
                    <b-popover target="popoverButton-sync" placement="bottomleft">
                        <template v-if="totalCartItems != 0">
                            <cart-items/>
                        </template>
                        <template v-else>
                            <p>Your shopping cart is empty</p>
                        </template>
                    </b-popover>
                </div>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    import cartItems from '@/components/cart/Items.vue'

    export default {
        computed: {
            totalCartAmount() {
                return this.$store.getters.totalCartAmount;
            },
            totalCartItems() {
                return this.$store.state.carts.length;
            }
        },
        components: {
            cartItems
        }
    }
</script>

<style>
    div.popover{
        width: 276px;
    }

    div.popover-body{
        padding: 1.5rem 2.0rem;
    }
</style>