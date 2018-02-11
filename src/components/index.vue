<template>
  <div id="index">
    <top></top>
    <slide></slide>
    <goods></goods>
    <brand></brand>
    <hot></hot>
    <subclass></subclass>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './top/top.vue'
import slide from './slide/slide.vue'
import goods from './goods/goods.vue'
import brand from './brand/brand.vue'
import hot from './hot/hot.vue'
import subclass from './subclass/subclass.vue'
import bottom from './bottom/bottom.vue'
export default {
  name: 'index',
  components: { top, slide, goods, brand, hot, subclass, bottom }
}
</script>

<style scoped>
  body{
    margin:0;
    padding:0;
    background: #f4f4f4;
  }
</style>
