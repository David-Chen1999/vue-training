import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Foo from './components/Foo.vue'
import HelloWorld from './components/HelloWorld.vue'


// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/foo', component: Foo },
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
