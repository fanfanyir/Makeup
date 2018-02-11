<template>
  <div id="orderall">
    <orderbanner></orderbanner>
    <div id="ordernav">
      <div  id="ordernav1">
        <ul id="nav1">
          <li><a @click="waitpay('all')">全部</a></li>
          <li><a @click="waitpay('pay')">待付款</a></li>
          <li><a @click="waitpay('get')">待收货</a></li>
          <li><a @click="waitpay('msg')">待评价</a></li>
          <li><a @click="waitpay('end')">已完成</a></li>
        </ul>
      </div>
    </div>
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
    orderbanner
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    },
    waitpay: function (name) {
      switch (name) {
        case 'msg':
          this.$router.push({path: '/allmsg?' + 'user_id=' + this.$route.query.user_id})
          break
        case 'get':
          this.$router.push({path: '/allget?' + 'user_id=' + this.$route.query.user_id})
          break
        case 'pay':
          this.$router.push({path: '/allpay?' + 'user_id=' + this.$route.query.user_id})
          break
        case 'end':
          this.$router.push({path: '/allend?' + 'user_id=' + this.$route.query.user_id})
          break
        case 'all':
          this.$router.push({path: '/allall?' + 'user_id=' + this.$route.query.user_id})
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #ordernav {
    #ordernav1 {
      position: relative;
      margin-top: 150px;
      width: 100%;
      z-index: 5;
      background: #ffffff;
      #nav1 {
        top: 80px;
        width: 100%;
        background: #ffffff;
        position: fixed;
        border-bottom: 1px #cccccc solid;
        /*height: 80px;*/
        display: flex;
        font-size: 25px;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        li:nth-last-child(1) {
          width: 40%;
        }
        li:nth-child(1) a{
          color:#ff0000;
        }
      }
    }
  }
  #orderall1{
    width: 100%;
    background: #ffffff;
  }
</style>
