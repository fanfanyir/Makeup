<template>
  <div id="makesure">
    <h1>{{strrrr}}</h1>
    <!--&lt;!&ndash;头部代码&ndash;&gt;-->
    <!--<header class="clearfix">-->
        <!--<img src="../../assets/pay/箭头左粗.png" id="arrow_left">-->
      <!--<p @click="sssss()">-->
        <!--{{title}}-->
      <!--</p>-->
      <!--&lt;!&ndash;<div></div>&ndash;&gt;-->
    <!--</header>-->
    <!--&lt;!&ndash;地址代码&ndash;&gt;-->
      <!--<div id="address" @click="address()" >-->
      <!--<div id="address_leftpart">-->
        <!--<img src="../../assets/pay/地址-2.png" id="address_picture"/>-->
            <!--<span>-->
              <!--{{message1}}-->
            <!--</span>-->
            <!--<span id="name">-->
              <!--{{goods[0].address.address_add}}-->
              <!--&lt;!&ndash;{str.name}&ndash;&gt;-->
            <!--</span>-->
        <!--<br>-->
            <!--<span id="address_infortitle">-->
              <!--{{message2}}-->
            <!--</span>-->
            <!--<span id="address_infor">-->
              <!--{{goods[0].address.address_add}}-->
              <!--&lt;!&ndash;{str.name}&ndash;&gt;-->
            <!--</span>-->
      <!--</div>-->
      <!--<div id="address_rightpart">-->
        <!--<span id="telephone">-->
          <!--{{goods[0].address.address_add}}-->
           <!--&lt;!&ndash;{str.name}&ndash;&gt;-->
        <!--</span>-->
        <!--<br><br>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;商品信息&ndash;&gt;-->
    <!--<div class="goods " v-for="goodss in goods" v-bind:key="goodss.src1">-->
      <!--<div class="goods_up clearfix">-->
          <!--<img v-bind:src="goodss.pro_shop.pro_shop_pic" class="goods_picture">-->
          <!--<div class="goods_upright">-->
            <!--<p class="infor">-->
              <!--{{goodss.pro_shop.pro_shop_desc}}-->
            <!--</p>-->
            <!--<p>-->
              <!--<span>产品规格：</span>-->
              <!--<span class="goods_norms">{{goodss.pro_shop.pro_shop_spec}}</span>-->
            <!--</p>-->
            <!--<p>-->
              <!--<span>X</span>-->
              <!--<span class="goods_number">{{goodss.cart_num}}</span>-->
              <!--&lt;!&ndash;<span class="goods_number">5</span>&ndash;&gt;-->
            <!--</p>-->
            <!--<p>-->
              <!--<span>¥</span>-->
              <!--<span class="price">{{goodss.pro_shop.pro_shop_price}}</span>-->
              <!--&lt;!&ndash;<span class="price">4</span>&ndash;&gt;-->
            <!--</p>-->
          <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="goods_down clearfix">-->
      <!--<div class="footer_left" >-->
        <!--<p v-for="item in footer_left_message"  v-bind:key="item.footer_left_message">-->
          <!--{{item.message}}-->
        <!--</p>-->
        <!--<input type="text" placeholder="选填:填写内容已和商家协商确定" id="leave_word">-->
      <!--</div>-->
      <!--<div class="footer_right">-->
        <!--<p>快递免邮</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;分割线&ndash;&gt;-->
    <!--<div class="lines2 line"></div>-->
    <!--&lt;!&ndash;结算&ndash;&gt;-->
    <!--<div id="accounts" class="clearfix">-->
        <input type="submit" value="确认订单" id="makesure_order" @click="sendM()"/>
    <!--<br>-->
        <!--<span>{{ceshi}}</span>-->
      <!--<p>-->
        <!--<span>合计金额</span>-->
        <!--<span id="total_money"></span>-->
      <!--</p>-->
    <!--</div>-->
  </div>
</template>
<script>
import Bus from '../../assets/Bus'
export default {
  name: 'pay',
  props: {
    address_add: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      title: '确认订单',
      message1: '收货人:',
      message2: '收货地址:',
      message3: '产品规格:',
      message4: '购买数量',
      strrrr: '',
      str: [
        {'name': '王建飞', 'address_infor': '陕西省西安市长安区西安邮电大学陕西省西安市长安区西安邮电大学王建飞', 'telephone': '17691040983'
        }
      ],
      goods: [
        {'pro_shop.pro_shop_pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'pro_shop.pro_shop_price': '23.2', 'cart_num': '2', 'pro_shop.pro_shop_desc': '商品描述', 'pro_shop.pro_shop_spec': '商品规格'},
        {'pro_shop.pro_shop_pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'pro_shop.pro_shop_price': '25', 'cart_num': '4', 'pro_shop.pro_shop_desc': '商品描述', 'pro_shop.pro_shop_spec': '商品规格'}
      ],
      footer_left_message: [
        {message: '配送方式'},
        {message: '7天无理由退货'},
        {message: '买家留言'}
      ]
    }
  },
  created () {
    Bus.$on('inceptMessage', (i) => {
      this.strrrr = i
      console.log(this.strrrr + '通了')
    })
    // this.sssss()
  },
  methods: {
    sssss: function () {
      this.$http({
        method: 'get',
        url: 'http://9nwa3s.natappfree.cc/selectCart.htm?user_id=2',
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res.bodyText)
        this.goods = JSON.parse(res.bodyText)
        console.log(this.goods[0].address)
        console.log(this.goods[0].cart_id)
        console.log('李鑫')
      }, function () {
        console.log('请求失败')
      })
      console.log(333)
    },
    address: function () {
      // this.$http({
      //   method: 'post',
      //   url: 'http://192.168.0.200:8080',
      //   data: '',
      //   xhrFields: {withCredentials: true}
      // }).then(function (res) {
      //   console.log(res.body)
      // }, function () {
      //   console.log('请求失败')
      // })
      // console.log(1)
      this.$router.push({path: '/Choose_Address'})
    },
    sendM: function () {
      // let total = document.getElementById('total_money')
      // let number = document.getElementsByClassName('goods')
      // let orderMessage = document.getElementById('leave_word')
      // let postData = 999
      let xhr = new XMLHttpRequest()
      // let aPrice = document.getElementsByClassName('price')
      // let aNumber = document.getElementsByClassName('goods_number')
      // let str = 0
      let str1 = {}
      for (let i = 0; i < 2; i++) {
        let id = 'id' + i
        str1[id] = i + 1
      }
      console.log(JSON.stringify(str1))
      // for (let i = 0; i < aPrice.length; i++) {
      //   str += parseFloat(aPrice[i].innerHTML) * parseFloat(aNumber[i].innerHTML)
      //   console.log(aPrice[i].innerHTML)
      // }
      // total.innerHTML = str + '元'
      // console.log(total.innerHTML)
      // console.log(aPrice[0].innerHTML)
      xhr.onreadystatechange = function (res) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('罗瑶success')
          console.log(res)
        } else {
          console.log('error')
        }
      }
      let sendid = {
        'id0': 1,
        'id1': 2,
        'id2': 3
      }
      // console.log('id.length  is  ' + this.goods.length)
      // console.log(typeof id)
      let sendnum = {
        // 'num0': this.goods[0].cart_num,
        // 'num1': this.goods[0].cart_num,
        // 'num2': this.goods[0].cart_num
        'num0': 1,
        'num1': 2,
        'num2': 3
      }
      xhr.open('post', 'http://z4pnju.natappfree.cc/order.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('number=' + 3 + '&' + 'order_money=' + 666 + '&' + 'order_message=' + 5 + '&' + 'id=' + JSON.stringify(sendid) + '&' + 'num=' + JSON.stringify(sendnum) + '&' + 'address_id=' + 3 + '&' + 'user_id=' + 1)
      // xhr.send('number=' + 3 + '&' + 'order_money=' + 666 + '&' + 'order_message=' + 5 + '&' + 'id=' + JSON.stringify(sendid) + '&' + 'num=' + JSON.stringify(sendnum) + '&' + 'address_id=' + 3 + '&' + 'user_id=' + 1)
    }
  }
}
</script>
<meta name="keywords" content="" />
<style  lang="scss" scoped>
  @import "../../../static/pay";
</style>
