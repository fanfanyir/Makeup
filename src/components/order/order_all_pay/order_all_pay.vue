<template>
  <div id="orderallpay">
    <div class="orderallpaybox"  v-for='(payorder, index) in payorders' v-bind:key="payorder.order_id" @click="detial(payorder.order_id)">
      <p class="shoppay"><span>美妆品牌店 ＞</span><span>等待买家付款</span></p>
      <div class="boxpay" v-for='paylist in payorder.pro_shops' v-bind:key="paylist.pro_shop_orders.pro_shop_order_id">
        <div class="imgboxpay clearfix" @click="waitpay()">
          <img :src="paylist.pro_shop_pic"/>
          <p id="decrisptpay">{{paylist.pro_shop_desc}}</p>
          <div id="pricepay">
            <span>￥{{paylist.pro_shop_orders.pro_shop_order_price}}</span>
            <span>￥{{paylist.pro_shop_orders.pro_shop_order_oldprice}}</span>
            <span>x{{paylist.pro_shop_orders.pro_shop_order_number}}</span>
          </div>
        </div>
      </div>
      <div id="okendpay">
        <p id="resultendpay">
          <span>共{{num}}件商品</span>
          <span>合计：￥{{payorder.order_money}}(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendpay">
          <input type="button" value="联系卖家"/>
          <input type="button" value="取消订单" @click="del(index)"/>
          <input type="button" value="付款" @click="pay(index)"/>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../../../assets/Bus'
export default{
  name: 'orderallpay',
  data () {
    return {
      index: '',
      seen: false,
      num: '2',
      att: [],
      payorders: []
    }
    //    return {
    //      num: '2',
    //      sendend: '19999.00',
    //      payorders: [{
    //        order_id: 'payorder1'
    //      },
    //      {
    //        order_id: 'payorder2'
    //      }],
    //      paylists: [{
    //        pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
    //        pro_shop_order_id: 'pay1',
    //        pro_shop_desc: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
    //        pro_shop_price: '999.00',
    //        pro_shop_oldprice: '1999.00',
    //        pro_shop_order_number: '2'
    //      },
    //      {
    //        pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
    //        pro_shop_order_id: 'pay2',
    //        pro_shop_desc: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
    //        pro_shop_price: '999.00',
    //        pro_shop_oldprice: '1999.00',
    //        pro_shop_order_number: '2'
    //      }]
    //    }
  },
  methods: {
    del: function (index) {
      if (confirm('确认删除?')) {
        this.payorders.splice(index, 1)
      }
    },
    pay: function (index) {
      if (confirm('确认付款?')) {
        this.payorders.splice(index, 1)
      }
    },
    price: function () {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://qeicvd.natappfree.cc/someOrder.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 5 + '&' + 'user_sex=' + 1)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(typeof JSON.parse(JSON.parse(xhr.responseText)))
          that.payorders = JSON.parse(JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
    },
    detial: function (index) {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(JSON.parse(xhr.responseText))
          bus.$emit('orderpay', JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://7gdrgz.natappfree.cc/orderDetails.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('order_id=' + index)
      //      console.log(index)
      //      this.$http({
      //        method: 'get',
      //        url: 'http://gd3k7g.natappfree.cc/orderDetails.htm?order_id=9',
      //        dataType: 'json',
      //        // data: {'order_id': index},
      //        async: false,
      //        xhrFields: {withCredentials: true}
      //      }).then(function (response) {
      //        bus.$emit('loadSuccess', response)
      //      }, function () {
      //        console.log('请求失败')
      //      })
    },
    waitpay: function () {
      this.$router.push({
        path: '/paydetail?' + 'user_id=' + this.$route.query.user_id
      })
    }
  },
  mounted: function () {
    this.price()
  }
}
</script>
<style lang="scss" scoped>
  input{
    border: none;
    outline: none;
    background: transparent;
  }
  #orderallpay{
    .orderallpaybox{
      margin-bottom: 40px;
    }
    background: #ffffff;
    padding: 10px;
    .shoppay{
      margin:10px 0;
      display: flex;
      justify-content: space-between;
      span:nth-last-child(1){
        color: #ff0000;
      }
    }
    .boxpay{
      width: 100%;
      .imgboxpay{
        background: #f6f6f9;
        margin-bottom: 10px;
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
          width: 130px;
          height: 130px;
        }
        input{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        #decrisptpay{
          position: relative;
          top:-20px;
          width: 300px;
        }
        #pricepay{
          width: 100px;
          display: flex;
          flex-direction: column;
          padding-right: 0;
          position: relative;
          top:-30px;
          span{
            display: inline-block;
            position: absolute;
            right: 0;
          }
          span:nth-child(1){
            top:-30px;
          }
          span:nth-last-child(2){
            color: #aeaaaa;
            text-decoration: line-through;
          }
          span:nth-last-child(1){
            color: #aeaaaa;
            top:30px;
          }
        }
      }
    }
    #okendpay{
      width: 100%;
      height: 100px;
      position: relative;
      #resultendpay{
        position: absolute;
        right: 0;
      }
      #focendpay{
        position: absolute;
        right: 0;
        top:50px;
        input{
          font-size: 20px;
          width: 130px;
          height:50px ;
          border: 1px #000000 solid;
          text-align: center;
          border-radius: 15px;
          margin:5px 10px;
        }
        input:nth-last-child(1){
          border: 1px #ff0000 solid;
          color: #ff0000;
        }
      }
    }
  }
</style>
