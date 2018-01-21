d<template>
  <div id="app">
    <banner></banner>
    <router-view/>
  </div>
</template>

<script>
import banner from './components/goodslist_banner/banner.vue'
export default {
  name: 'App',
  components: {banner}
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}
</style>
