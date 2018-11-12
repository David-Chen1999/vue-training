<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li><router-link to="/nested/foo1">/foo1</router-link></li>
    <li><router-link to="/nested/foo2">/foo2</router-link></li>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }

}
</script>


