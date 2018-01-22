<template>
  <div id="index">
    <top></top>
    <banner></banner>
    <goods></goods>
    <brand></brand>
    <hot></hot>
    <subclass></subclass>
  </div>
</template>

<script type="text/javascript">
import top from './top/top.vue'
import banner from './banner/banner.vue'
import goods from './goods/goods.vue'
import brand from './brand/brand.vue'
import hot from './hot/hot.vue'
import subclass from './subclass/subclass.vue'

export default {
  data () {
  },
  components: { top, banner, goods, brand, hot, subclass }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
    background: #f4f4f4;
  }
</style>
