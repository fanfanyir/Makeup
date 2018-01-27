<template>
  <div id="ordermsg">
    <div class="ordermsgbox"  v-for='msgorder in msgorders' v-bind:key="msgorder.id">
      <p class="shopmsg"><span>美妆品牌店 ＞</span><span>交易成功</span></p>
      <div class="boxmsg" v-for='msglist in msglists' v-bind:key="msglist.id">
        <div class="imgboxmsg clearfix">
          <img src="../../../assets/order/1.jpg"/>
          <p id="decrisptmsg">迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆</p>
          <div id="pricemsg">
            <span>￥{{msglist.last}}</span>
            <span>￥{{msglist.firstone}}</span>
            <span>x{{msglist.num}}</span>
          </div>
        </div>
      </div>
      <div id="okendmsg">
        <p id="resultendmsg">
          <span>共2件商品</span>
          <span>合计：￥1999.00(含运费 ￥{{0.00}})</span>
        </p>
        <p id="focendmsg">
          <input type="button" value="删除订单"/>
          <input type="button" value="查看物流"/>
          <input type="button" value="评价"/>
        </p>
    </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ordermsg',
  data () {
    return {
      msgorders: [{
        id: 'payorder1'
      },
      {
        id: 'payorder2'
      }],
      msglists: [{
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
