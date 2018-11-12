<template>
  <div id="app">
    <h1>Hello {{name}}, Age:{{age}}</h1>

    <h2>{{$attrs}}</h2>
  </div>
</template>

<script>
    export default {
        props:{
            name:{
                type:String,
                default:'World!'
            },
            age:{
                type:Number,
                default:18
            }
        }

    }
</script>

<style>

</style>
