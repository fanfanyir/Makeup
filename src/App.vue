<template>
  <div id="app">
    <!--<index></index>-->
    <!--<shopping></shopping>-->
    <!--<test></test>-->
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<person></person>-->
    <!--<manage></manage>-->
    <!--<changepw></changepw>-->
    <!--<changenum></changenum>-->
    <!--<feet></feet>-->
    <!--<usercollect></usercollect>-->
    <!--实现跳转<router-view/>-->
    <!--<chooseadress></chooseadress>-->
    <!--<addaddress></addaddress>-->
    <!--<detailstotal></detailstotal>-->
    <!--<detailsheader></detailsheader>-->
    <!--<pay></pay>-->
    <router-view/>
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
  </div>
</template>
<script>
import index from './components/index.vue'
import shopping from './components/shopping/shopping.vue'
import login from './components/login'
import register from './components/register'
import person from './components/person'
import manage from './components/manage'
import changepw from './components/change-pw'
import changenum from './components/change-num'
import feet from './components/feet'
import usercollect from './components/usercollect'
import goodlist from './components/goodslist/goodlist.vue'
import orderbanner from './components/order/order_banner/order_banner.vue'
import orderend from './components/order/end.vue'
import orderget from './components/order/get.vue'
import ordermsg from './components/order/msg.vue'
import orderpay from './components/order/pay.vue'
import orderpaydetail from './components/order/order_pay/order_paydetail/orderpaydetail.vue'
import ordergetdetail from './components/order/order_get/order_getdetail/ordergetdetail.vue'
import ordermsgdetail from './components/order/order_msg/order_msgdetail/ordermsgdetail.vue'
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address.vue'
import addaddress from './components/add_address/Add_Address'
import detailstotal from './components/details/details'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    index,
    shopping,
    register,
    login,
    person,
    manage,
    changepw,
    changenum,
    feet,
    goodlist,
    orderbanner,
    orderend,
    orderget,
    ordermsg,
    orderpay,
    orderpaydetail,
    ordergetdetail,
    ordermsgdetail,
    usercollect,
    detailstotal,
    pay,
    Chooseadress,
    addaddress
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
  justify-content: center;
    /*color: #2c3e50;*/
}
</style>
