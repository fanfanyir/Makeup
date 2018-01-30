<template>
  <div id="orderdetail">
    <div id="detailbanner">
      <img id="left" src="../../../assets/order/左箭头2.png">
      <p>{{msg}}</p>
      <input id="order_more" type="button" value="●●●"/>
    </div>
    <div id="address">
      <img src="../../../assets/order/微信图片_20180118203836.png" id="address_picture"/>
      <div class="right">
        <p>
          <span>收货人：{{str[0].name}}</span>
          <span>{{str[0].telephone}}</span>
        </p>
        <p>{{str[0].addressr}}</p>
      </div>
    </div>
    <div class="orderdetailbox">
      <p class="shops"><span>美妆品牌店 ＞</span></p>
      <div class="boxdetail" v-for='paylist in paylists' v-bind:key="paylist.id">
        <div class="imgboxdetail clearfix">
          <img src="../../../assets/order/1.jpg"/>
          <p id="decrisptdetail">{{paylist.descibe}}</p>
          <div id="pricedetail">
            <span>￥{{paylist.last}}</span>
            <span>￥{{paylist.firstone}}</span>
            <span>x{{paylist.num}}</span>
          </div>
        </div>
      </div>
    </div>
    <p class="enddetial">
      <span>运费</span>
      <span>￥8.00</span>
    </p>
    <p class="enddetial">
      <span>实付款（含运费）</span>
      <span>￥1998.00</span>
    </p>
  </div>
</template>

<script>
export default{
  name: 'orderdetail',
  data () {
    return {
      msg: '订单详情',
      str: [
        {'name': '王建飞', 'addressr': '陕西省西安市长安区西安邮电大学陕西省西安市长安区西安邮电大学王建飞', 'telephone': '18325783902'
        }
      ],
      paylists: [{
        id: 'pay1',
        descibe: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
        last: '999.00',
        firstone: '1999.00',
        num: '2'
      },
      {
        id: 'pay2',
        descibe: '迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
        last: '999.00',
        firstone: '1999.00',
        num: '2'
      }]
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
  #orderdetail {
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
    #address{
      margin-top: 80px;
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
  }
</style>
