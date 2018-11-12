<template>
  <div id="app">
    <ul>
      <li @click="showHome">/home</li>
      <li @click="showFoo">/foo</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        methods: {
            showHome () {
                this.$router.push("/nested")
            },
            showFoo () {
                this.$router.push("/foo")
            }
        },

    }
</script>

<style>

</style>
