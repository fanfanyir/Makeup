<template>
  <div id="app">
    <banner></banner>
    <navv></navv>
    <waterfall></waterfall>
    <router-view/>
  </div>
</template>

<script>
import banner from './components/goodslist/goodslist_banner/banner.vue'
import navv from './components/goodslist/goodslist_nav/nav.vue'
import waterfall from './components/goodslist/waterfall/waterfall.vue'
export default {
  name: 'App',
  components: {
    banner,
    navv,
    waterfall
  }
}
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
    /*color: #2c3e50;*/
  }
</style>
