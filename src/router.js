import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'
import Single from './views/Single.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Products
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Single
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
