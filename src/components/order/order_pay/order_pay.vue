<template>
  <div id="orderpay">
    <div class="orderpaybox"  v-for='(payorder, index) in payorders' v-bind:key="payorder.order_id" @click="detial(payorder.order_id)">
      <p class="shoppay">
        <span><input class="selectH" type="checkbox" @click="see()"/> 美妆品牌店 ＞</span><span>等待买家付款</span>
      </p>
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
    <div id="footer" v-if="seen">
      <input type="button" value="取消订单" @click="adddel()"/>
      <input type="button" value="合并付款" @click="addpay()"/>
    </div>
  </div>
</template>

<script>
import bus from '../../../assets/Bus'
export default {
  name: 'orderpay',
  data () {
    return {
      index: '',
      seen: false,
      num: '2',
      att: [],
      payorders: []
    }
  },
  methods: {
    see: function () {
      let oCheck = document.getElementsByClassName('selectH')
      for (let i = 0; i < oCheck.length; i++) {
        if (oCheck[i].checked === true) {
          this.seen = true
          break
        } else {
          this.seen = false
        }
      }
    },
    del: function (index) {
      if (confirm('确认?')) {
        this.payorders.splice(index, 1)
      }
    },
    pay: function (index) {
      if (confirm('确认?')) {
        this.payorders.splice(index, 1)
      }
    },
    adddel: function () {
      let oCheck = document.getElementsByClassName('selectH')
      let aOrderpaybox = document.getElementsByClassName('orderpaybox')
      if (confirm('确认取消?')) {
        for (let i = 0; i < oCheck.length; i++) {
          if (oCheck[i].checked === true) {
            aOrderpaybox[i].style.display = 'none'
          }
        }
      }
    },
    addpay: function () {
      let oCheck = document.getElementsByClassName('selectH')
      let aOrderpaybox = document.getElementsByClassName('orderpaybox')
      if (confirm('确认付款?')) {
        for (let i = 0; i < oCheck.length; i++) {
          if (oCheck[i].checked === true) {
            aOrderpaybox[i].style.display = 'none'
          }
        }
      }
    },
    waitpay: function () {
      alert(222)
      this.$router.push({
        path: '/paydetail'
      })
    },
    detial: function (index) {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (response) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          bus.$emit('orderpay', response)
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
    //      var xhr = new XMLHttpRequest()
    //      xhr.onreadystatechange = function (data) {
    //        if (xhr.readyState === 4) {
    //          if (xhr.status >= 200 & xhr.status < 300 || xhr.status === 304) {
    //            alert('组件通讯开始啦')
    //            bus.$emit('userDefinedEvent', 'this messsge is from order_pay')
    //          } else {
    //          }
    //        }
    //      }
    //      xhr.open('post', 'http://gcx84u.natappfree.cc/orderDetails.htm', 'true')
    //      xhr.send(null)
    //    },
    price: function () {
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://7gdrgz.natappfree.cc/someOrder.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 5 + '&' + 'user_sex=' + 1)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(typeof JSON.parse(JSON.parse(xhr.responseText)))
          this.payorders = JSON.parse(JSON.parse(xhr.responseText))
          console.log(this.payorders)
        } else {
          console.log('error')
        }
      }
    //      this.$http({
    //        method: 'GET',
    //        url: 'http://gd3k7g.natappfree.cc/someOrder.htm?user_id=1&user_sex=1',
    //        dataType: 'json',
    //        async: false,
    //        xhrFields: {withCredentials: true}
    //      }).then(function (response) {
    //        alert(345)
    //        this.payorders = JSON.parse(JSON.parse(response.data))
    //        console.log(this.payorders)
    //      }, function () {
    //        console.log('请求失败')
    //      })
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
  #orderpay{
    .orderpaybox{
      margin-bottom: 40px;
    }
    background: #ffffff;
    padding: 10px;
    padding-bottom: 80px;
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
    #footer{
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
        border: 1px #ff0000 solid;
        color: #ff0000;
        border-radius: 15px;
        margin: 20px;
      }
    }
  }
</style>
