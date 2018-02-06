<template>
  <div id="get">
    <orderbanner></orderbanner>
    <ordernav></ordernav>
    <orderget></orderget>
  </div>
</template>
<script>
import orderbanner from './order_banner/order_banner.vue'
import ordernav from './order_nav/order_nav.vue'
import orderget from './order_get/order_get.vue'
export default{
  name: 'get',
  data () {
    return {
    }
  },
  components: {
    orderbanner,
    ordernav,
    orderget
  }
}
</script>
<style lang="scss" scoped>
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
