<template>
  <div id="app">
<<<<<<< HEAD
    <!--<div id="zyf_goodslist">-->
      <!--<banner></banner>-->
      <!--<navv></navv>-->
      <!--<div id="marginn">-->
        <!--<waterfall1></waterfall1>-->
      <!--</div>-->
    <!--</div>-->
    <div id="zyf_order">
      <orderbanner></orderbanner>
      <ordernav></ordernav>
    </div>
    <!--<div id="zyf_detial">-->
      <!--<orderdetail></orderdetail>-->
    <!--</div>-->
=======
    <!--<chooseadress></chooseadress>-->
    <!--<addaddress></addaddress>-->
    <!--<detailstotal></detailstotal>-->
    <!--<detailsheader></detailsheader>-->
    <!--<pay></pay>-->
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import banner from './components/goodslist/goodslist_banner/banner.vue'
import navv from './components/goodslist/goodslist_nav/nav.vue'
import waterfall1 from './components/goodslist/waterfall/waterfallb.vue'
import orderbanner from './components/order/order_banner/order_banner.vue'
import orderdetail from './components/order/order_detail/orderdetail.vue'
import ordernav from './components/order/order_top/order_nav.vue'
export default {
  name: 'App',
  components: {
    banner,
    navv,
    waterfall1,
    orderbanner,
    ordernav,
    orderdetail
  }
}
</script>
<style lang scoped>
=======
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address'
import addaddress from './components/add_address/Add_Address'
import detailstotal from './components/details/details'
export default {
  name: 'App',
  components: {
    detailstotal,
    pay,
    Chooseadress,
    addaddress
  }
}
</script>

<style>
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
<<<<<<< HEAD
    /*color: #2c3e50;*/
  }
  #marginn{
    position: relative;
    margin-top: 150px;
=======
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
  }
</style>
