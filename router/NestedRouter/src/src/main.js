import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Foo from './components/Foo.vue'
import nested from './components/Nested/Nested.vue'


// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/nested', component: nested },
        { path: '/foo', component: Foo },
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
