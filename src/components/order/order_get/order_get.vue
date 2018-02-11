<template>
  <div id="orderget">
    <div class="ordergetbox" v-for='(getorder, index) in getorders' v-bind:key="getorder.order_id">
      <p class="shopget"><span>美妆品牌店 ＞</span><span>卖家已发货</span></p>
      <div class="boxget" v-for='getlist in getorder.pro_shops' v-bind:key="getlist.pro_shop_orders.pro_shop_order_id">
        <div class="imgboxget clearfix" @click="waitget()">
          <img :src="getlist.pro_shop_pic"/>
          <p id="decrisptget">{{getlist.pro_shop_desc}}</p>
          <div id="priceget">
            <span>￥{{getlist.pro_shop_orders.pro_shop_order_price}}</span>
            <span>￥{{getlist.pro_shop_orders.pro_shop_order_oldprice}}</span>
            <span>x{{getlist.pro_shop_orders.pro_shop_order_number}}</span>
          </div>
        </div>
      </div>
      <div id="okendget">
        <p id="resultendget">
          <span>共{{num}}件商品</span>
          <span>合计：￥{{getorder.order_money}}(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendget">
          <input type="button" value="延长收货"/>
          <input type="button" value="查看物流"/>
          <input type="button" value="确认收货" @click="sure(index, getorder.order_id)"/>
        </p>
    </div>
    </div>
  </div>
</template>

<script>
import bus from '../../../assets/Bus'
export default{
  name: 'orderget',
  data () {
    return {
      num: '2',
      getorders: []
    }
  },
  mounted: function () {
    this.price()
  },
  methods: {
    price: function () {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://nrpi25.natappfree.cc/someOrder.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 5 + '&' + 'user_sex=' + 2)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(typeof JSON.parse(JSON.parse(xhr.responseText)))
          that.getorders = JSON.parse(JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
    //      this.$http({
    //        method: 'GET',
    //        url: 'http://gcx84u.natappfree.cc/someOrder.htm?user_id=5&user_sex=2',
    //        dataType: 'json',
    //        async: false,
    //        xhrFields: {withCredentials: true}
    //      }).then(function (response) {
    //        alert(345)
    //        this.getorders = JSON.parse(JSON.parse(response.data))
    //        console.log(this.getorders)
    //      }, function () {
    //        console.log('请求失败')
    //      })
    },
    sure: function (index, orderid) {
      if (confirm('确认收货?')) {
        let str = {}
        str[0] = orderid
        this.getorders.splice(index, 1)
        let xhr = new XMLHttpRequest()
        xhr.open('post', 'http://nrpi25.natappfree.cc/sureOrder.htm', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send('sure_Order_id=' + JSON.stringify(str))
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('已收货')
          } else {
            console.log('error')
          }
        }
      }
    },
    waitget: function () {
      this.$router.push({path: '/getdetail?' + 'user_id=' + this.$route.query.user_id})
    },
    detial: function (index) {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(JSON.parse(xhr.responseText))
          bus.$emit('orderget', JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://nrpi25.natappfree.cc/orderDetails.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('order_id=' + index)
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
  #orderget{
    background: #ffffff;
    padding: 10px;
    .ordergetbox{
      margin-bottom: 40px;
    }
    .shopget{
      margin:10px 0;
      display: flex;
      justify-content: space-between;
      span{

      }
      span:nth-last-child(1){
        color: #ff0000;
      }
    }
    .boxget{
      width: 100%;
      .imgboxget{
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
        #decrisptget{
          position: relative;
          top:-20px;
          width: 300px;
        }
        #priceget{
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
    #okendget{
      width: 100%;
      height: 100px;
      position: relative;
      #resultendget{
        position: absolute;
        right: 0;
      }
      #focendget{
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
