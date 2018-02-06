<template>
  <div id="app">
    <!--<index></index>-->
    <!--<shopping></shopping>-->
    <!--<test></test>-->
    <!--<div id="zyf_goodslist">-->
    <!--<goodlist></goodlist>-->
    <!--</div>-->
    <!--<div id="zyf_order">-->
    <!--<orderbanner></orderbanner>-->
    <!--</div>-->
    <!--<div id="zyf_detial">-->
    <!--<orderpaydetail></orderpaydetail>-->
    <!--<ordergetdetail></ordergetdetail>-->
    <!--<ordermsgdetail></ordermsgdetail>-->
    <!--</div>-->
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue'
import shopping from './components/shopping/shopping.vue'
import goodlist from './components/goodslist/goodlist.vue'
import orderbanner from './components/order/order_banner/order_banner.vue'
import orderend from './components/order/end.vue'
import orderget from './components/order/get.vue'
import ordermsg from './components/order/msg.vue'
import orderpay from './components/order/pay.vue'
import orderpaydetail from './components/order/order_pay/order_paydetail/orderpaydetail.vue'
import ordergetdetail from './components/order/order_get/order_getdetail/ordergetdetail.vue'
import ordermsgdetail from './components/order/order_msg/order_msgdetail/ordermsgdetail.vue'
export default {
  name: 'App',
  components: {
    index,
    shopping,
    goodlist,
    orderbanner,
    orderend,
    orderget,
    ordermsg,
    orderpay,
    orderpaydetail,
    ordergetdetail,
    ordermsgdetail
  }
}
</script>
<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
    /*color: #2c3e50;*/
  }
</style>
