import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
        { id: 1, title: "Edwin", isExclusive: true, category: "shirt", price: "34.95", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/ED/32/2O/01/JA/11/ED322O01J-A11@12.jpg" },
        { id: 2, title: "Jack Will's", isExclusive: false, category: "shirt", price: "69.95", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/JA/G2/2D/00/1K/11/JAG22D001-K11@10.jpg" },
        { id: 3, title: "Jost shoulder bag with strap", isExclusive: false, category: "bag", price: "179.95", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/JO/55/2H/02/JM/11/JO552H02J-M11@12.jpg" },
        { id: 4, title: "Crimson red sweater", isExclusive: false, category: "sweater", price: "85.65", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/JA/G2/2Q/00/1G/11/JAG22Q001-G11@10.jpg" },
        { id: 5, title: "Keds sneakers", isExclusive: true, category: "shoes", price: "75.00", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/PK/11/2O/00/9A/11/PK112O009-A11@6.jpg" },
        { id: 6, title: "Another shirt", isExclusive: false, category: "shirt", price: "40.20", img: "https://mosaic01.ztat.net/vgs/media/pdp-reco-2x/JA/G2/2D/00/1C/11/JAG22D001-C11@10.1.jpg" }
    ],

    carts: [],
  },
  getters: {
    exclusiveProducts( state ) {
        return state.products.filter( x => x.isExclusive );
    },
    totalCartAmount(state) {
        let total = 0;
        state.carts.map( p => { total += parseFloat(p.price) } );
        return total.toFixed(2);
    }
  },
  mutations: {
    addToCart(state, payload) {
        state.carts.push(payload);
    },
    removeCartItem(state, payload) {
        state.carts.splice(payload, 1);
    }
  },
  actions: {

  }
})
