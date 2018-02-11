<template>
  <div id="ordermsgdetail">
    <div id="detailbanner">
      <img id="left" src="../../../../assets/order/左箭头2.png" @click="waitpay()">
      <p>{{msg}}</p>
      <input id="order_more" type="button" value="●●●"/>
    </div>
    <div id="order_status">
      <img src="../../../../assets/order/交易成功.png">
      <p>交易成功</p>
    </div>
    <div id="address">
      <img src="../../../../assets/order/微信图片_20180118203836.png" id="address_picture"/>
      <div class="right">
        <p>
          <span>收货人：{{str[0].address_name}}</span>
          <span>{{str[0].address_tel}}</span>
        </p>
        <p>收货地址：{{str[0].address_add}}</p>
      </div>
    </div>
    <div class="orderdetailbox">
      <p class="shops"><span>美妆品牌店 ＞</span></p>
      <div class="boxdetail" v-for='paylist in paylists' v-bind:key="paylist.pro_shop_order_id">
        <div class="imgboxdetail clearfix" @click="jump()">
          <img :src="paylist.pro_shop_pic"/>
          <p id="decrisptdetail">{{paylist.pro_shop_desc}}</p>
          <div id="pricedetail">
            <span>￥{{paylist.pro_shop_price}}</span>
            <span>￥{{paylist.pro_shop_oldprice}}</span>
            <span>x{{paylist.pro_shop_order_number}}</span>
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
      <span id="enddetail">{{order_money}}</span>
    </p>
    <div id="mess">
      <span>买家留言：</span>
      <div id="intext">{{order_message}}</div>
    </div>
    <div id="tryend">
      <p id="codedetail">订单编号： {{order_id}}</p>
      <p id="builddetail">创建时间： {{build}}</p>
    </div>
    <div id="footer">
      <input type="button" value="卖了换钱" @click="del1(payorder)"/>
      <input type="button" value="评价" @click="del2(payorder)"/>
    </div>
  </div>
</template>

<script>
// import bus from '../../../../assets/Bus'
export default{
  name: 'ordermsgdetail',
  data () {
    return {
      msg: '订单详情',
      order_id: '116736578494628937',
      build: '2018-01-18 20:32:03',
      order_money: '1999.00',
      order_message: '我有故事你有酒吗',
      str: [
        {'address_name': '王建飞', 'address_add': '陕西省 西安市 长安区 西安邮电大学 西安邮电大学', 'address_tel': '18325783902'
        }
      ],
      paylists: [{
        pro_shop_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKz0gOBpnFmpUVU09QhKCBBBV87RRBSx1Huqm2Iuk1nKir3qQz',
        pro_shop_order_id: 'pay1',
        pro_shop_desc: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
        pro_shop_price: '999.00',
        pro_shop_oldprice: '1999.00',
        pro_shop_order_number: '2'
      },
      {
        pro_shop_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKz0gOBpnFmpUVU09QhKCBBBV87RRBSx1Huqm2Iuk1nKir3qQz',
        pro_shop_order_id: 'pay1',
        pro_shop_desc: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
        pro_shop_price: '999.00',
        pro_shop_oldprice: '1999.00',
        pro_shop_order_number: '2'
      }]
    }
  },
  methods: {
    jump: function () {
      this.$router.push({path: '/details?' + 'user_id=' + this.$route.query.user_id})
    },
    waitpay: function () {
      this.$router.push({path: '/msg?' + 'user_id=' + this.$route.query.user_id})
    },
    del2: function (payorder) {
      prompt('请您评价')
    }
  }
  //  mounted: function () {
  //    let that = this
  //    bus.$on('ordermsg', (text) => {
  //      // console.log(text)
  //      console.log(typeof JSON.parse(text))
  //      // console.log('组件通讯成功啦')
  //      that.paylists = JSON.parse(text)
  //    })
  //  }
}
</script>
<style lang="scss" scoped>
  input{
    border: none;
    outline: none;
    background: transparent;
  }
  #ordermsgdetail {
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
        top:60px;
        left: 50px;
        line-height: 40px;
        color: #ffffff;
        font-size: 25px;
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
