import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Foo from './components/Foo.vue'

function dynamicPropsFn(route) {
    const now = new Date()
    return {
        name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
}

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/foo/:name/:age',
          props:true,
          component: Foo
        },

        { path: '/static',
          component: Foo,
          props: { name: 'world' }
        },
        { path: '/dynamic/:years',
            component: Foo,
            props: dynamicPropsFn
        },
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
