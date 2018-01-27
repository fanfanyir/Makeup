<template>
  <div id="orderall">
    <orderallpay></orderallpay>
    <orderget></orderget>
    <ordermsg></ordermsg>
    <orderend></orderend>
  </div>
</template>

<script>
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
    orderend
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    }
  }
}
</script>
<style lang="scss" scoped>
  #orderall{
    width: 100%;
    background: #ffffff;
  }
</style>
