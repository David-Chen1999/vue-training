import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import Foo from './components/Foo.vue'
import nested from './components/Nested/Nested.vue'

import foo1 from './components/Nested/ChildFoo1.vue'
import foo2 from './components/Nested/ChildFoo2.vue'

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            redirect:'/nested/foo1'
        },
        { path: '/nested',
          component: nested,
          children:[
              {
                  path:'/nested/foo1',
                  component: foo1
              },
              {
                  path:'/nested/foo2',
                  component: foo2
              }
          ]
        },
        { path: '/foo',
          component: Foo
        },
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
