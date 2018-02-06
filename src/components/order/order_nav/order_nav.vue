<template>
  <div id="ordernav">
    <div  id="ordernav1">
      <ul id="nav1">
        <li class="tab"><a @click="waitpay('all')">全部</a></li>
        <li class="tab"><a @click="waitpay('pay')">待付款</a></li>
        <li class="tab"><a @click="waitpay('get')">待收货</a></li>
        <li class="tab"><a @click="waitpay('msg')">待评价</a></li>
        <li class="tab"><a @click="waitpay('end')">已完成</a></li>
      </ul>
    </div>
    <!--<keep-alive>-->
      <!--<main1 :is="currentTab"></main1>-->
    <!--</keep-alive>-->
  </div>
</template>

<script>
export default{
  name: 'ordernav',
  data () {
    return {
    }
  },
  methods: {
    waitpay: function (name) {
      switch (name) {
        case 'msg':
          this.$router.push({path: '/allmsg'})
          break
        case 'get':
          this.$router.push({path: '/allget'})
          break
        case 'pay':
          this.$router.push({path: '/allpay'})
          break
        case 'end':
          this.$router.push({path: '/allend'})
          break
        case 'all':
          this.$router.push({path: '/allall'})
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
      }
    }
  }
</style>
