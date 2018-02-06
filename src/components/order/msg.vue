<template>
  <div id="msg">
    <orderbanner></orderbanner>
    <ordernav></ordernav>
    <ordermsg></ordermsg>
  </div>
</template>
<script>
import orderbanner from './order_banner/order_banner.vue'
import ordernav from './order_nav/order_nav.vue'
import ordermsg from './order_msg/order_msg.vue'
export default{
  name: 'msg',
  data () {
    return {
    }
  },
  components: {
    orderbanner,
    ordernav,
    ordermsg
  }
}
</script>
<style lang="scss" scoped>
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
