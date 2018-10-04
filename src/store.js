import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        filterProducts: [],
        carts: []
    },
    getters: {
        exclusiveProducts( state ) {
            return state.products.filter( x => x.isExclusive );
        },
        totalCartAmount(state) {
            let total = 0;
            state.carts.map( p => { total += parseFloat(p.price) } );
            return total.toFixed(2);
        },
        uniqueCategories(state) {
            let categories = [];
            state.products.map( p => { categories.push(p.category) } );
            return [...new Set( categories )];
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.carts.push(payload);
        },
        removeCartItem(state, payload) {
            state.carts.splice(payload, 1);
        },
        getProducts(state, payload) {
            state.products = payload;
        }
    },
    actions: {
        fetchProducts({ commit }) {
            return new Promise((resolve, reject) => {
                Vue.http.get("https://api.myjson.com/bins/100mm1")
                .then((response) => {
                    commit("getProducts", response.body);
                    resolve();
                })
                .catch((error => {
                    console.log(error.statusText);
                }));
            });
        }
    }
})
