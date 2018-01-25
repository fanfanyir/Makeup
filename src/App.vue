<template>
  <div id="app">
    <banner></banner>
    <navv></navv>
    <div id="marginn">
      <waterfall1></waterfall1>
    </div>
    <router-view/>
  </div>
</template>

<script>
import banner from './components/goodslist/goodslist_banner/banner.vue'
import navv from './components/goodslist/goodslist_nav/nav.vue'
import waterfall1 from './components/goodslist/waterfall/waterfall_b.vue'
export default {
  name: 'App',
  components: {
    banner,
    navv,
    waterfall1
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
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
