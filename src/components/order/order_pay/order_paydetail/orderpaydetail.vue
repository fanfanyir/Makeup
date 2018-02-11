<template>
  <div id="orderpaydetail">
    <div id="detailbanner">
      <img id="left" src="../../../../assets/order/左箭头2.png" @click="waitpay()">
      <p>{{msg}}</p>
      <input id="order_more" type="button" value="●●●"/>
    </div>
    <div id="order_status">
      <img src="../../../../assets/order/待付款.png">
      <p>等待买家付款</p>
      <p>剩{{day}}天{{hour}}小时自动关闭</p>
    </div>
    <div id="address">
      <img src="../../../../assets/order/微信图片_20180118203836.png" id="address_picture"/>
      <div class="right">
        <p>
          <span>收货人：{{paylists[0].address.address_name}}</span>
          <span>{{paylists[0].address.address_tel}}</span>
        </p>
        <p>收货地址：{{paylists[0].address.address_add}}</p>
      </div>
    </div>
    <div class="orderdetailbox">
      <p class="shops"><span>美妆品牌店 ＞</span></p>
      <div class="boxdetail" v-for='porshop in paylists[0].pro_shops' v-bind:key="porshop.pro_shop_id">
        <div class="imgboxdetail clearfix" @click="jumpzmy()">
          <img :src="porshop.pro_shop_pic"/>
          <p id="decrisptdetail">{{porshop.pro_shop_orders.pro_shop_desc}}</p>
          <div id="pricedetail">
            <span>￥{{porshop.pro_shop_orders.pro_shop_order_price}}</span>
            <span>￥{{porshop.pro_shop_orders.pro_shop_order_oldprice}}</span>
            <span>x{{porshop.pro_shop_orders.pro_shop_order_number}}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="enddetial">
      <span>运费</span>
      <span id="sendprice">￥8.05</span>
    </p>
    <p class="enddetial">
      <span>实付款（含运费）</span>
      <span id="enddetail">{{paylists[0].order_money}}</span>
    </p>
    <div id="mess">
      <span>买家留言：</span>
      <div id="intext">{{paylists[0].order_message}}</div>
    </div>
    <div id="tryend">
      <p id="codedetail">订单编号： {{paylists[0].order_id}}</p>
      <p id="builddetail">创建时间： {{paylists[0].order_time}}</p>
    </div>
    <div id="footer">
      <input type="button" value="朋友代付"/>
      <input type="button" value="取消订单" @click="del1(payorder)"/>
      <input type="button" value="付款" @click="del2(payorder)"/>
    </div>
  </div>
</template>

<script>
import bus from '../../../../assets/Bus'
export default{
  name: 'orderpaydetail',
  data () {
    return {
      day: '2',
      hour: '23',
      msg: '订单详情',
      //      order_id: '116736578494628937',
      //      build: '2018-01-18 20:32:03',
      //      order_money: '2579.00',
      //      order_message: '我有故事你有酒吗',
      paylists: []
    }
  },
  methods: {
    //    ad: function () {
    //      let oAend = document.getElementById('enddetail')
    //      oAend.innerHTML = '￥' + (parseFloat(oAend.innerHTML) + 8.05)
    //    },
    del1: function (index) {
      if (confirm('确认取消?')) {
        this.payorders.splice(index, 1)
      }
    },
    del2: function (index) {
      if (confirm('确认付款?')) {
        this.payorders.splice(index, 1)
      }
    },
    jumpzmy: function () {
      this.$router.push({path: '/details?' + 'user_id=' + this.$route.query.user_id})
    },
    waitpay: function () {
      this.$router.push({path: '/pay?' + 'user_id=' + this.$route.query.user_id})
    }
  },
  mounted: function () {
    //    this.ad()
    let that = this
    bus.$on('orderpay', (text) => {
      // console.log(text)
      console.log(typeof JSON.parse(text))
      // console.log('组件通讯成功啦')
      that.paylists = JSON.parse(text)
    })
  }
}
</script>
<style lang="scss" scoped>
  input{
    border: none;
    outline: none;
    background: transparent;
  }
  #orderpaydetail {
    padding-bottom: 80px;
    #detailbanner {
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
      #left {
        width: 50px;
        height: 50px;
      }
      p {
        color: #ffffff;
        width: 400px;
        text-align: center;
        font-size: 30px;
      }
      #order_more {
        font-size: 25px;
        color: #ffffff;
      }
    }
    #order_status{
      margin-top: 80px;
      height: 200px;
      position: relative;
      img{
        height: 200px;
        width: 100%;
      }
      p{
        position: absolute;
        top:55px;
        left: 50px;
        line-height: 40px;
        color: #ffffff;
      }
      P:nth-child(1){
        font-size: 25px;
      }
      p:nth-last-child(1){
        top:90px;
      }
    }
    #address{
      background: #ffffff;
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      padding: 20px 5px;
      justify-content: flex-start;
      #address_picture{
        margin:10px;
        margin-left: 5px;
        width: 80px;
        height: 80px;
      }
      .right{
        display: flex;
        flex-direction: column;
        p:nth-child(1){
          display: flex;
          justify-content: space-between;
          line-height: 50px;
        }
      }
    }
    .orderdetailbox {
      margin: 20px;
      .shops {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
      }
      .boxdetail {
        width: 100%;
        .imgboxdetail {
          background: #f6f6f9;
          margin-bottom: 10px;
          width: 100%;
          height: 160px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 130px;
            height: 130px;
          }
          #decrisptdetail {
            position: relative;
            top: -20px;
            width: 300px;
          }
          #pricedetail {
            width: 100px;
            display: flex;
            flex-direction: column;
            padding-right: 0;
            position: relative;
            top: -30px;
            span {
              display: inline-block;
              position: absolute;
              right: 0;
            }
            span:nth-child(1) {
              top: -30px;
            }
            span:nth-last-child(2) {
              color: #aeaaaa;
              text-decoration: line-through;
            }
            span:nth-last-child(1) {
              color: #aeaaaa;
              top: 30px;
            }
          }
        }
      }
    }
    .enddetial{
      padding: 10px 25px;
      display: flex;
      justify-content: space-between;
    }
    #enddetail{
      color: #ff0000;
    }
    #mess{
      margin: 10px;
      display: flex;
      flex-direction: row;
      padding:0 10px;
      span{
        display: flex;
        flex-wrap: nowrap;
      }
      #intext{
        width: 480px;
        height: 110px;
        padding: 5px;
        border: 1px #eaeeee solid;
      }
    }
    #tryend{
      padding: 20px;
      p{
        line-height: 40px;
      }
    }
    #footer{
      border-top:0.5px #f3f3f4 solid;
      position: fixed;
      height: 80px;
      background: #ffffff;
      right:0;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      input{
        font-size: 20px;
        width: 130px;
        height:50px ;
        border-radius: 30px;
        margin: 10px;
      }
      input:nth-last-child(1){
        border: 1px #ff0000 solid;
        color: #ff0000;
      }
    }
  }
</style>
