<template>
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <router-link to="/products" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Products</a></router-link>
                <router-link to="/about" activeClass="active" tag="li" class="nav-item"><a class="nav-link">About</a></router-link>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-form class="p-2 filter-products">
                    <!-- <b-form-select size="sm" class="mr-sm-2" @change="filterProducts" v-model="selected" :options="options" /> -->
                    <b-form-select  size="sm" class="mr-sm-2" @change="filterProducts" v-model="selected">
                        <option value="-1">Filter by Category</option>
                        <option v-for="option in options" :value="option">{{ option }}</option>
                    </b-form-select>
                </b-form>

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
        data () {
            return {
                selected: '-1',
            }
        },
        created() {
            this.$store.state.filterProducts = this.$store.state.products;

            if ( this.$route.query.category ) {
                this.selected = this.$route.query.category;
                this.filterProducts( this.$route.query.category );
            }
        },
        computed: {
            totalCartAmount() {
                return this.$store.getters.totalCartAmount;
            },
            options() {
                return this.$store.getters.uniqueCategories;
            },
            totalCartItems() {
                return this.$store.state.carts.length;
            }
        },
        methods: {
            filterProducts( categoryName ) {
                let products = this.$store.state.products;

                this.$router.push( { path: 'products', query: { category: categoryName }} );
                this.$store.state.filterProducts = ( categoryName === '-1' ) ? products : products.filter( product => product.category === categoryName );
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

    .p-2.filter-products{
        margin-top: 5px;
    }
</style>