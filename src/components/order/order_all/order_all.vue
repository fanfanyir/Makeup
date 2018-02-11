<template>
  <div id="orderall">
    <orderbanner></orderbanner>
    <ordernav></ordernav>
    <div id="orderall1">
      <orderallpay></orderallpay>
      <orderget></orderget>
      <ordermsg></ordermsg>
      <orderend></orderend>
    </div>
  </div>
</template>

<script>
import orderbanner from '../order_banner/order_banner.vue'
import ordernav from '../order_nav/order_nav.vue'
import orderallpay from '../order_all_pay/order_all_pay'
import orderget from '../order_get/order_get'
import ordermsg from '../order_msg/order_msg'
import orderend from '../order_end/order_end'
export default{
  name: 'orderall',
  data () {
    return {
      currentTab: ''
    }
  },
  components: {
    orderallpay,
    orderget,
    ordermsg,
    orderend,
    orderbanner,
    ordernav
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    }
  }
}
</script>
<style lang="scss" scoped>
  #orderall1{
    width: 100%;
    background: #ffffff;
  }
</style>
