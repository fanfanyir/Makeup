<template>
  <div id="orderpay">
    <div class="orderpaybox"  v-for='payorder in payorders' v-bind:key="payorder.id">
      <p class="shoppay">
        <span><input class="selectH" type="checkbox"/> 美妆品牌店 ＞</span><span>等待买家付款</span>
      </p>
      <div class="boxpay" v-for='paylist in paylists' v-bind:key="paylist.id">
        <div class="imgboxpay clearfix">
          <img src="../../../assets/order/1.jpg"/>
          <p id="decrisptpay">{{paylist.descibe}}</p>
          <div id="pricepay">
            <span>￥{{paylist.last}}</span>
            <span>￥{{paylist.firstone}}</span>
            <span>x{{paylist.num}}</span>
          </div>
        </div>
      </div>
      <div id="okendpay">
        <p id="resultendpay">
          <span>共2件商品</span>
          <span>合计：￥1999.00(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendpay">
          <input type="button" value="联系卖家"/>
          <input type="button" value="取消订单" @click="del(payorder)"/>
          <input type="button" value="付款" @click="del(payorder)"/>
        </p>
      </div>
    </div>
    <div id="footer" v-if="seen">
      <input type="button" value="取消订单" @click="del(payorder)"/>
      <input type="button" value="合并付款" @click="del(payorder)"/>
    </div>
  </div>
</template>

<script>
export default{
  name: 'orderpay',
  data () {
    return {
      seen: 'false',
      payorders: [{
        id: 'payorder1'
      },
      {
        id: 'payorder2'
      }],
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
  },
  methods: {
    price: function () {
      this.$http.get('', {
      }).then(function (data) {
      }, function () {
        console.log('请求失败')
      })
    },
    del: function (payorder) {
      let oCheck = document.getElementsByClassName('selectH')
      if (oCheck[0].checked) {
        this.seen = true
        if (confirm('确认?')) {
          this.payorders.splice(payorder, 1)
        }
      }
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
