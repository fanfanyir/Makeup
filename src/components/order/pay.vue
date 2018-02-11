<template>
  <div id="pay">
    <orderbanner></orderbanner>
    <ordernav></ordernav>
    <orderpay></orderpay>
  </div>
</template>
<script>
import orderbanner from './order_banner/order_banner.vue'
import ordernav from './order_nav/order_nav.vue'
import orderpay from './order_pay/order_pay.vue'
export default{
  name: 'pays',
  data () {
    return {
    }
  },
  components: {
    orderbanner,
    ordernav,
    orderpay
  }
}
</script>
<style lang="scss" scoped>
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
