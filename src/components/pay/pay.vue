<template>
  <div id="makesure">
    <!--头部代码-->
    <header class="clearfix">
        <img src="../../assets/pay/箭头左粗.png" id="arrow_left">
      <p>
        {{title}}
      </p>
      <div></div>
    </header>
    <!--地址代码-->
    <div id="address" @click="address()" >
      <div id="address_leftpart">
        <img src="../../assets/pay/地址-2.png" id="address_picture"/>
            <span>
              {{message1}}
            </span>
            <span id="name">
              {{str[0].name}}
            </span>
        <br>
            <span id="address_infortitle">
              {{message2}}
            </span>
            <span id="address_infor">
              {{str[0].address_infor}}
            </span>
      </div>
      <div id="address_rightpart">
        <span id="telephone">
          {{str[0].telephone}}
        </span>
        <br><br>
        <!--<img src="../../assets/pay/箭头-右.png">-->
      </div>
    </div>
    <!--分割线-->
    <!--<div class="lines"></div>-->
    <!--商品信息-->
    <div class="goods " v-for="goodss in goods" v-bind:key="goodss.src1">
      <div class="goods_up clearfix">
          <img v-bind:src="goodss.pro_shop_pic" class="goods_picture">
          <div class="goods_upright">
            <p class="infor">
              {{goodss.pro_shop_desc}}
            </p>
            <p>
              <span>产品规格：</span>
              <span class="goods_norms">{{goodss.pro_shop_spec}}</span>
            </p>
            <p>
              <span>X</span>
              <span class="goods_number">{{goodss.cart_num}}</span>
            </p>
            <p>
              <span>¥</span>
              <span class="price">{{goodss.pro_shop_price}}</span>
            </p>
          </div>
      </div>
      <div class="goods_down clearfix">
        <div class="footer_left" >
          <p v-for="item in footer_left_message"  v-bind:key="item.footer_left_message">
            {{item.message}}
          </p>
        <input type="text" placeholder="选填:填写内容已和商家协商确定" id="leave_word">
        </div>
        <div class="footer_right">
          <p>快递免邮</p>
        </div>
      </div>
    </div>
    <!--分割线-->
    <div class="lines2 line"></div>
    <!--结算-->
    <!--<div id="last"></div>-->
    <div id="accounts" class="clearfix">
        <input type="submit" value="确认订单" id="makesure_order"/>
      <p>
        <span>合计金额</span>
        <span id="total_money">
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pay',
  data () {
    return {
      title: '确认订单',
      message1: '收货人:',
      message2: '收货地址:',
      message3: '产品规格:',
      message4: '购买数量',
      str: [
        {'name': '王建飞', 'address_infor': '陕西省西安市长安区西安邮电大学陕西省西安市长安区西安邮电大学王建飞', 'telephone': '17691040983'
        }
      ],
      goods: [
        // {'src1': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'infor': '张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹', 'goods_norms': '#010', 'goods_number': '2', 'price': '366'},
        // {'src1': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'infor': '张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹', 'goods_norms': '#010', 'goods_number': '2', 'price': '366'},
        // {'src1': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'infor': '张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹', 'goods_norms': '#010', 'goods_number': '2', 'price': '366'}
        {'pro_shop_pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'pro_shop_price': '23.2', 'cart_num': '2', 'pro_shop_desc': '商品描述', 'pro_shop_spec': '商品规格'},
        {'pro_shop_pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516957137439&di=fb53d3c6c5683c6b04b2fe2be4fb457e&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130508%2F9252150_171934681000_2.jpg', 'pro_shop_price': '25', 'cart_num': '4', 'pro_shop_desc': '商品描述', 'pro_shop_spec': '商品规格'}
      ],
      footer_left_message: [
        {message: '配送方式'},
        {message: '7天无理由退货'},
        {message: '买家留言'}
      ]
    }
  },
  methods: {
    address: function () {
      this.$http({
        method: 'get',
        url: ''
      }).then(function (res) {
        alert(res.body)
      })
    }
  }
}
</script>
<meta name="keywords" content="" />
<style  lang="scss" scoped>
  @import "../../../static/pay";
  /*重复样式*/
</style>
