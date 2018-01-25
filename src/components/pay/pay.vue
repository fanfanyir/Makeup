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
    <div id="address" @click="address()">
      <div id="address_leftpart">
        <img src="../../assets/pay/地址-2.png" id="address_picture"/>
            <span>
              {{message1}}
            </span>
            <span id="name">
              张梦莹
            </span>
        <br>
            <span id="address_infortitle">
              {{message2}}
            </span>
            <span id="address_infor">
              陕西省西安市长安区西安邮电大学西区
            </span>
      </div>
      <div id="address_rightpart">
        <span id="telephone">
          {{telephone}}
        </span>
        <br>
        <!--<img src="../../assets/pay/箭头-右.png">-->
      </div>
    </div>
    <!--分割线-->
    <div class="lines"></div>
    <!--商品信息-->
    <div id="goods"  class="clearfix">
      <img src="../../assets/pay/WechatIMG21.jpeg" id="goods_picture"/>
      <div id="goods_infor_right">
        <p id="goods_information">张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹张梦莹</p>
        <span>
          {{message3}}
        </span>
        <span id="goods_norms">
          #101
        </span>
        <p id="goods_price">368.00</p>
        <p id="goods_number">x1</p>
      </div>
    </div>
    <!--底部信息-->
    <footer class="clearfix">
      <!--底部左边的信息-->
      <div id="footer_left" >
        <p v-for="item in footer_left_message"  v-bind:key="item.footer_left_message">
            {{item.message}}
         </p>
        <input type="text" placeholder="选填:填写内容已和商家协商确定" id="leave_word">
      </div>
      <!--底部右边的信息-->
      <div id="footer_right">
        <p>
          <span>X</span>
          <span id="footer_right_number">
            {{message9}}
          </span>
        </p>
        <p>
          {{message10}}
        </p>
      </div>
    </footer>
    <!--分割线-->
    <div class="lines2 line"></div>
    <!--结算-->
    <!--<div id="last"></div>-->
    <div id="accounts" class="clearfix">
        <input type="submit" value="确认订单" id="makesure_order"/>
      <p>
        <span>
          {{total_money}}
        </span>
        <span id="total_money">
          ¥368.00
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
      telephone: '17691045044',
      message3: '产品规格:',
      message4: '购买数量',
      footer_left_message: [
        {message: '配送方式'},
        {message: '7天无理由退货'},
        {message: '买家留言'}
      ],
      message9: '1',
      message10: '快递免邮',
      total_money: '合计金额:'
    }
  },
  methods: {
    address: function () {
      // this.$http.get('http://localhost:8080',{}).then(function (res) {
      //   alert(res.body)
      // }, function () {
      //   console.log('请求失败')
      // }
      // )
      this.$http.jsonp('https://www.baidu.com/', {word: 'a'}, {jsonp: 'callback'}).then(function (res) {
        console.log(res.data)
      }, function (res) {
        console.log(res.status)
      })
    }

    // fn1: function (obj) {
    //   obj.style.background = 'red'
    // }
  }
}

</script>
<meta name="keywords" content="" />
<style  lang="scss" scoped>
  @import "../../assets/common1.css";
  /*重复样式*/
  #makesure header,#makesure #address, #makesure footer{
    padding: 0 20px 0 20px;
  }
  #makesure {
    .lines{
        width: 100%;
        background-color: #ff0000;
        height: 2px;
        margin-bottom: 20px;
      }
    .lines2{
      background-color: #d7d7d7;
      height: 2px;
      margin: 0;
    }
    /*这里是头部样式*/
    header {
      z-index: 3;
      width: 100%;
      background-color: #ff0000;
      height: 80px;
      margin-bottom: 20px;
      padding: 0 20px 0 10px;
      /*position: relative;*/
      position: fixed;
      top:0;
      left:0;
      #arrow_left{
        width: 30px;
        height: 30px;
        position: absolute;
        margin-top: -15px;
        top: 50%;
      }
      p {
        line-height: 80px;
        width: 200px;
        font-size: 30px;
        color: #ffffff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -40px;
      }
    }
    /*这里是收货地址样式*/
    #address{
      margin-top: 80px;
      width: 100%;
      display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        height: 80px;
      #address_picture{
        width: 30px;
        height: 30px;
      }
      #address_leftpart{
          flex-grow: 2;
          #address_infortitle{
            margin-left: 55px;
          }
        }
        #address_picture{
          width: 50px;
          height: 50px;
        }
        #address_rightpart{
          width: 115px;
          flex-wrap: wrap;
          flex-direction: row-reverse;
          display: flex;
          /*img{*/
            /*width: 30px;*/
            /*height: 30px;*/
          /*}*/
        }
      }
    /*商品信息样式*/
    #goods{
      width: 100%;
      background-color: #f7f7f7;
      padding: 10px;
      margin-bottom: 20px;
      #goods_picture{
        width: 130px;
        height: 130px;
        margin-right: 10px;
        float: left;
      }
      #goods_infor_right{
        float: left;
        width: 80%;
        padding-top: 10px;
      }
      span:nth-of-type(1), #makesure #goods  span:nth-of-type(2),#goods_number{
        color: #898989;
      }
      #goods_price{
        color: #ff0000;
      }
    }
    /*底部信息样式*/
    footer{
      width: 100%;
      line-height: 33px;
      font-size: 20px;
      #footer_left{
        float: left;
        width: 575px;
        input{
          margin-left: 105px;
          width: 600px;
          border: none;
          outline: none;
        }
      }
      #footer_right{
          width: 100px;
          float: right;
        }
    }
    /*结算*/
    #accounts{
      position: fixed;
      right: 0;
      bottom: 0;
      width: 100%;
      padding:20px 0 0 325px;
      #total_money{
        color: #ff0000;
      }
      p{
        display: inline-block;
        width: 220px;
        line-height: 50px;
        font-size: 20px;
        float: right;
      }
      #makesure_order{
        float: right;
        width: 130px;
        height: 50px;
        background-color: #ff0000;
        color: #ffffff;
        /*margin-left: 88px;*/
      }
    }
    /*#last{*/
      /*width: 700px;*/
      /*height: 1700px;*/
      /*background-color: red;*/
  /*}*/
  }
</style>
