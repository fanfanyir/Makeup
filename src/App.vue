<template>
  <div id="app">
    <pay></pay>
    <router-view/>
  </div>
</template>

<script>
import pay from './components/pay/pay.vue'
export default {
  name: 'App',
  components: {pay}
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  /*color: #2c3e50;*/
}
  /*body{*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
</style>
