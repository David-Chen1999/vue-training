<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li><router-link to="/nested/foo1">/foo1</router-link></li>
    <li><router-link to="/nested/foo2">/foo2</router-link></li>
    <router-view></router-view>
  </div>
</template>

<script>
  import foo1 from "./ChildFoo1.vue"
  import foo2 from "./ChildFoo2.vue"
  import VueRouter from 'vue-router'

  let childRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      { path: '/', component: foo1 },
      { path: '/nested/foo1', component: foo1 },
      { path: '/nested/foo2', component: foo2 },
  ]})

export default {
  name: 'HelloWorld',
  router: childRouter,
  props: {
    msg: String
  }

}
</script>


