<template>
  <div id="orderbanner">
    <div id="orderbannerone">
      <img id="left" src="../../../assets/order/左箭头2.png" @click="change()">
      <div id="top_search">
        <p>{{msg}}</p>
        <img id="search" src="../../../assets/order/搜索1.png"/>
      </div>
      <input id="order_more" type="button" value="●●●"/>
    </div>
    <!--<keep-alive>-->
      <!--<ordernav></ordernav>-->
    <!--</keep-alive>-->
  </div>
</template>

<script>
export default{
  name: 'orderbanner',
  data () {
    return {msg: '我的订单'}
  },
  components: {
  },
  methods: {
    change: function () {
      this.$router.push({path: '/manage?' + 'user_id=' + this.$route.query.user_id})
    }
  }
}
</script>
<style lang="scss" scoped>
  input{
    border: none;
    outline: none;
    background: transparent;
  }
  #orderbannerone{
    top: 0;
    z-index: 5;
    position: fixed;
    width: 100%;
    height: 80px;
    background: #ff0000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    #left,#search{
      width:50px;
      height: 50px;
    }
    #top_search{
      p{
        color: #ffffff;
        width: 400px;
        text-align: center;
        font-size: 30px;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #order_more{
      font-size: 25px;
      color: #ffffff;
    }
  }
</style>
