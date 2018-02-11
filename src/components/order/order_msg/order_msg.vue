<template>
  <div id="ordermsg">
    <div class="ordermsgbox"  v-for='(msgorder, index) in msgorders' v-bind:key="msgorder.order_id" @click="detial(msgorder.order_id)">
      <p class="shopmsg"><span>美妆品牌店 ＞</span><span>交易成功</span></p>
      <div class="boxmsg" v-for='msglist in msgorder.pro_shops' v-bind:key="msglist.pro_shop_orders.pro_shop_order_id">
        <div class="imgboxmsg clearfix" @click="waitmsg()">
          <img :src="msglist.pro_shop_pic"/>
          <p id="decrisptmsg">{{msglist.pro_shop_desc}}</p>
          <div id="pricemsg">
            <span>￥{{msglist.pro_shop_orders.pro_shop_order_price}}</span>
            <span>￥{{msglist.pro_shop_orders.pro_shop_order_oldprice}}</span>
            <span>x{{msglist.pro_shop_orders.pro_shop_order_number}}</span>
          </div>
        </div>
      </div>
      <div id="okendmsg">
        <p id="resultendmsg">
          <span>共{{num}}件商品</span>
          <span>合计：￥{{msgorder.order_money}}(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendmsg">
          <input type="button" value="删除订单" @click="del(index)"/>
          <input type="button" value="查看物流"/>
          <input type="button" value="评价" @click="msg(index)"/>
        </p>
    </div>
    </div>
  </div>
</template>

<script>
import bus from '../../../assets/Bus'
export default{
  name: 'ordermsg',
  data () {
    return {
      num: '2',
      sendend: '19999.00',
      msgorders: [{
        order_id: 'payorder1',
        pro_shops: [{
          pro_shop_desc: 'one     奥17新款forever 粉底气 垫bb底妆',
          pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
          pro_shop_orders: {
            pro_shop_order_id: 'pay1',
            pro_shop_order_price: '999.00',
            pro_shop_order_oldprice: '1999.00',
            pro_shop_order_number: '2'
          }
        },
        {
          pro_shop_desc: 'two     奥17新款forever 粉底气 垫bb底妆',
          pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
          pro_shop_orders: {
            pro_shop_order_id: 'pay2',
            pro_shop_order_price: '999.00',
            pro_shop_order_oldprice: '1999.00',
            pro_shop_order_number: '2'
          }
        }]
      },
      {
        order_id: 'payorder2',
        pro_shops: [{
          pro_shop_desc: 'three     奥17新款forever 粉底气 垫bb底妆',
          pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
          pro_shop_orders: {
            pro_shop_order_id: 'pay1',
            pro_shop_order_price: '999.00',
            pro_shop_order_oldprice: '1999.00',
            pro_shop_order_number: '2'
          }
        },
        {
          pro_shop_desc: 'four     奥17新款forever 粉底气 垫bb底妆',
          pro_shop_pic: 'http://s14.sinaimg.cn/middle/5bc41e82hba41609eab5d&690',
          pro_shop_orders: {
            pro_shop_order_id: 'pay2',
            pro_shop_order_price: '999.00',
            pro_shop_order_oldprice: '1999.00',
            pro_shop_order_number: '2'
          }
        }]
      }]
    }
  },
  methods: {
    price: function () {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          that.msgorders = JSON.parse(JSON.parse(xhr.responseText))
          console.log(this.msgorders)
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://8w6pvv.natappfree.cc/someOrder.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 5 + '&' + 'user_sex=' + 3)
    //      this.$http({
    //        method: 'GET',
    //        url: 'http://jlw.free.ngrok.cc/someOrder.htm?',
    //        dataType: 'json',
    //        async: false,
    //        xhrFields: {withCredentials: true}
    //      }).then(function (response) {
    //        alert(345)
    //        this.msgorders = JSON.parse(JSON.parse(response.data))
    //        console.log(this.msgorders)
    //      }, function () {
    //        console.log('请求失败')
    //      })
    },
    detial: function (index) {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          bus.$emit('ordermsg', JSON.parse(xhr.responseText))
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://8w6pvv.natappfree.cc/orderDetails.htm', true)
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
    //        bus.$emit('ordermsg', response)
    //      }, function () {
    //        console.log('请求失败')
    //      })
    },
    del: function (index) {
      if (confirm('确认?')) {
        this.msgorders.splice(index, 1)
      }
    },
    msg: function (index) {
      prompt('请您评价')
    },
    waitmsg: function () {
      this.$router.push({path: '/msgdetail?' + 'user_id=' + this.$route.query.user_id})
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
  #ordermsg{
    background: #ffffff;
    padding: 10px;
    .ordermsgbox{
      margin-bottom: 40px;
    }
    .shopmsg{
      margin:10px 0;
      display: flex;
      justify-content: space-between;
      span:nth-last-child(1){
        color: #ff0000;
      }
    }
    .boxmsg{
      width: 100%;
      .imgboxmsg{
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
        #decrisptmsg{
          position: relative;
          top:-20px;
          width: 300px;
        }
        #pricemsg{
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
    #okendmsg{
      width: 100%;
      height: 100px;
      position: relative;
      #resultendmsg{
        position: absolute;
        right: 0;
      }
      #focendmsg{
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
