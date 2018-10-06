import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'typeface-roboto/index.css'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
