<template>
  <div id="app">
    <ul>
      <li><router-link to="/foo/David/17">/David</router-link></li>
      <li><router-link to="/foo/Lucy/16">/Lucy</router-link></li>
      <li><router-link to="/static">/Static</router-link></li>
      <li><router-link to="/dynamic/1">/dynamic</router-link></li>
    </ul>
    <router-view para='P1'></router-view>
  </div>
</template>

<style>

</style>
