<template>
  <div id="goodlist">
    <banner></banner>
    <navv></navv>
    <div id="marginn">
      <waterfall1></waterfall1>
    </div>
  </div>
</template>
<script>
import banner from './goodslist_banner/banner.vue'
import navv from './goodslist_nav/nav.vue'
import waterfall1 from './waterfall/waterfallb.vue'
export default{
  name: 'goodlist',
  data () {
    return {
    }
  },
  components: {
    banner,
    navv,
    waterfall1
  }
}
</script>
<style lang="scss" scoped>
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
