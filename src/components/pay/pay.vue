<template>
  <div id="makesure">
    <!--头部代码-->
    <header>
      <img src="../../assets/pay/箭头左粗.png" id="arrow_left">
      <span>
        {{message}}
      </span>
      <div></div>
    </header>
    <!--地址代码-->
    <div id="address">
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
        <img src="../../assets/pay/箭头-右.png">
      </div>
    </div>
    <!--分割线-->
    <div class="lines"></div>
    <!--商品信息-->
    <div id="goods" v-on:click="detials">
      <img src="../../assets/pay/WechatIMG21.jpeg" id="goods_picture"/>
      <div id="goods_infor_right">
        <p id="goods_information">杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生
          杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生杜先生</p>
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
  </div>
</template>

<script>
export default {
  name: 'pay',
  data () {
    return {
      message: '确认订单',
      message1: '收货人:',
      message2: '收货地址:',
      telephone: '17691045044',
      message3: '产品规格:'
    }
  }
}
</script>
<meta name="keywords" content="" />
<style  lang="scss" scoped>
  /*@import "~@/assets/common.scss";*/
  /**{*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
  /*重复样式*/
  #makesure header,#makesure #address{
    padding: 0 20px 0 20px;
  }
  /*这里是头部样式*/
  #makesure header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff0000;
    height: 80px;
    margin-bottom: 20px;
    padding: 0 20px 0 10px;

  }
  #makesure header #arrow_left,#address #address_picture{
    width: 50px;
    height: 50px;
  }
  #makesure header span{
    font-size: 30px;
    color: #ffffff;
  }
  #makesure header div{
    width: 100px;
  }
  /*这里是收货地址样式*/
  #makesure #address{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    height: 80px;
  }
  #makesure #address #address_leftpart{
    flex-grow: 2;
  }
  #makesure #address #address_picture{
    width: 50px;
    height: 50px;
  }
  #makesure #address #address_rightpart{
    width: 115px;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    display: flex;
  }
  #makesure #address #address_leftpart  #address_infortitle{
    margin-left: 55px;
  }
  #makesure #address #address_rightpart img{
    width: 30px;
    height: 30px;
  }
  #makesure .lines{
    width: 100%;
    background-color: #ff0000;
    height: 2px;
    margin-bottom: 20px;
  }
  /*商品信息样式*/
  #makesure #goods{
    display: flex;
    height: 155px;
    background-color: #f7f7f7;
    padding-left: 10px;
    align-items: center;
  }
  #makesure #goods #goods_picture{
    width: 130px;
    height: 130px;
    margin-right: 5px;
  }
  #makesure #goods span:nth-of-type(1), #makesure #goods  span:nth-of-type(2),
  #makesure #goods #goods_number{
    color: #898989;
  }
  #makesure #goods #goods_price{
    color: #ff0000;
  }

</style>
