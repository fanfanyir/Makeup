<template>
  <div id="orderend">
    <div class="orderendbox"  v-for='endorder in endorders' v-bind:key="endorder.id" v-if="seen">
        <p class="shopend"><span>美妆品牌店 ＞</span><span>交易关闭</span></p>
        <div class="boxend" v-for='endlist in endorder.endlists' v-bind:key="endlist.id">
          <div class="imgboxend clearfix">
            <img src="../../../assets/order/1.jpg"/>
            <p id="decrisptend">{{endlist.descibe}}</p>
            <div id="priceend">
              <span>￥{{endlist.last}}</span>
              <span>￥{{endlist.firstone}}</span>
              <span>x{{endlist.num}}</span>
            </div>
          </div>
        </div>
        <div id="okendend">
          <p id="resultend">
            <span>共2件商品</span>
            <span>合计：￥1999.00(含运费 ￥{{0.00}})</span>
          </p>
          <p id="focendend">
            <input type="button" value="删除订单" @click="del(endorder)"/>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'orderend',
  data () {
    return {
      seen: 'true',
      endorders: [{
        id: '1',
        endlists: [{
          id: 'pay1',
          descibe: '第一件迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
          last: '999.00',
          firstone: '19249.00',
          num: '2'
        },
        {
          id: 'pay2',
          descibe: '第二件ev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
          last: '955.00',
          firstone: '19324.00',
          num: '2'
        }]
      },
      {
        id: '2',
        endlists: [{
          id: 'pay3',
          descibe: '第三件迪奥17新款forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
          last: '999.00',
          firstone: '12499.00',
          num: '2'
        },
        {
          id: 'pay4',
          descibe: '第四件forev 垫bb底妆 迪奥17新款forever 粉底气 垫bb底妆',
          last: '955.00',
          firstone: '544.00',
          num: '2'
        }]
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
    del: function (endorder) {
      if (confirm('确认删除?')) {
        this.endorders.splice(endorder, 1)
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
  #orderend{
    background: #ffffff;
    padding: 10px;
    .orderendbox{
      margin-bottom: 40px;
    }
    .shopend{
      margin:10px 0;
      display: flex;
      justify-content: space-between;
      span:nth-last-child(1){
        color: #ff0000;
      }
    }
    .boxend{
      width: 100%;
      .imgboxend{
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
          width: 130px;
          height: 130px;
        }
        #decrisptend{
          position: relative;
          top:-20px;
          width: 300px;
        }
        #priceend{
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
    #okendend{
      width: 100%;
      height: 100px;
      position: relative;
      #resultend{
        position: absolute;
        right: 0;
      }
      #focendend{
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
      }
    }
  }
</style>
