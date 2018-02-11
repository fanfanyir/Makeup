<template>
  <div id="orderpay">
    <div class="orderpaybox"  v-for='(payorder, index) in payorders' v-bind:key="payorder.order_id">
      <p class="shoppay">
        <span><input class="selectH" type="checkbox" @click="see()"/> 美妆品牌店 ＞</span><span>等待买家付款</span>
      </p>
      <div class="boxpay" v-for='paylist in payorder.pro_shops' v-bind:key="paylist.pro_shop_orders.pro_shop_order_id">
        <div class="imgboxpay clearfix" @click="waitpay(payorder.order_id)">
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
          <span>合计：￥<span class="money">{{payorder.order_money}}</span>(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendpay">
          <input type="button" value="联系卖家"/>
          <input type="button" value="取消订单" @click="del(index,payorder.order_id)"/>
          <input type="button" value="付款" @click="pay(index,payorder.order_id)"/>
        </p>
      </div>
    </div>
    <div id="footer" v-if="seen">
      <input type="button" value="取消订单" @click="adddel()"/>
      <input type="button" value="合并付款" @click="addpay()"/>
    </div>
    <paypic v-if="shows"></paypic>
  </div>
</template>

<script>
import bus from '../../../assets/Bus'
import Paypic from '../../paypic/paypic.vue'
export default {
  components: {Paypic},
  name: 'orderpay',
  data () {
    return {
      index: '',
      seen: false,
      num: '2',
      shows: false,
      att: [],
      payorders: [],
      pay_order_id: ''
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
    del: function (index, orderid) {
      if (confirm('确认取消?')) {
        let str = {}
        str[0] = orderid
        this.payorders.splice(index, 1)
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://nrpi25.natappfree.cc/cancleOrder.htm', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send('cancle_order_id=' + JSON.stringify(str))
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert('一个订单已取消')
          } else {
            console.log('error')
          }
        }
      }
    },
    pay: function (index, orderid) {
      if (confirm('确认付款?')) {
        this.shows = !this.shows
        this.$nextTick(() => {
          let aMoney = document.getElementsByClassName('money')[0]
          console.log(aMoney.innerHTML)
          bus.$emit('sendPri', parseFloat(aMoney.innerHTML))
        })
        let str = {}
        str[0] = orderid
        this.payorders.splice(index, 1)
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://nrpi25.natappfree.cc/sureOrder.htm', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send('sure_order_id=' + JSON.stringify(str))
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert('一个订单已确认付款')
          } else {
            console.log('error')
          }
        }
      }
    },
    adddel: function () {
      let oCheck = document.getElementsByClassName('selectH')
      let aOrderpaybox = document.getElementsByClassName('orderpaybox')
      if (confirm('确认取消?')) {
        let str = {}
        for (let i = 0; i < oCheck.length; i++) {
          if (oCheck[i].checked === true) {
            aOrderpaybox[i].style.display = 'none'
            str[i] = this.payorders[i].order_id
          }
        }
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://nrpi25.natappfree.cc/cancleOrder.htm', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send('cancle_order_id=' + JSON.stringify(str))
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert('多个订单已取消')
          } else {
            console.log('error')
          }
        }
      }
    },
    addpay: function () {
      let oCheck = document.getElementsByClassName('selectH')
      let aOrderpaybox = document.getElementsByClassName('orderpaybox')
      if (confirm('确认付款?')) {
        this.shows = !this.shows
        let aMoney = document.getElementsByClassName('money')
        let str = 0
        for (let i = 0; i < oCheck.length; i++) {
          if (oCheck[i].checked === true) {
            aOrderpaybox[i].style.display = 'none'
            str += parseFloat(aMoney[i].innerHTML)
          }
        }
        this.$nextTick(() => {
          console.log(str)
          bus.$emit('sendPri', parseFloat(str))
        })
        this.show = !this.show
      }
    },
    // 跳转到详情页
    waitpay: function (index) {
      this.$router.push({
        path: '/paydetail?' + 'user_id=' + this.$route.query.user_id
      })
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(JSON.parse(xhr.responseText))
          bus.$emit('orderpay', JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://nrpi25.natappfree.cc/orderDetails.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('order_id=' + index)
    },
    // 详情页信息
    detial: function (index) {
    },
    // 待付款页面信息获取
    price: function () {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://nrpi25.natappfree.cc/someOrder.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 1 + '&' + 'user_sex=' + 1)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(typeof JSON.parse(JSON.parse(xhr.responseText)))
          that.payorders = JSON.parse(JSON.parse(xhr.responseText))
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
