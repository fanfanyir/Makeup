<template>
  <div id="end">
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
      <!--<keep-alive>-->
      <!--<main1 :is="currentTab"></main1>-->
      <!--</keep-alive>-->
    </div>
    <orderend></orderend>
  </div>
</template>
<script>
import orderbanner from './order_banner/order_banner.vue'
import orderend from './order_end/order_end.vue'
export default{
  name: 'end',
  data () {
    return {
    }
  },
  components: {
    orderbanner,
    orderend
  },
  methods: {
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
  #marginn{
    position: relative;
    margin-top: 150px;
  }
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
        li:nth-child(5) a{
          color:#ff0000;
        }
      }
    }
  }
</style>
