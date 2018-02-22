<template>
  <div id="hot">
    <div id="title"><p>热销分类</p></div>
    <div id="hotcon">
      <div v-for="item in items" v-bind:key="item in items" @click="jumping">
        <img :src="item.pro_shop_pic.split(';')[Math.floor(Math.random() * 3)]"><p>{{item.products.product_name}}</p><span >￥<span class="price">{{item.pro_shop_price}}</span><br></span><span>月销售<span class="num">{{item.pro_shop_sale}}</span>笔</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery'
export default{
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    jumping: function () {
      this.$router.push({path: '/goodlist?' + 'user_id=' + this.$route.query.user_id})
    },
    ajax: function () {
      let that = this
      $.ajax({
        method: 'GET',
        url: 'http://nrpi25.natappfree.cc/index_kind_max3.htm',
        dataType: 'json',
        success: function (data) {
          console.log(data)
          let str = $.parseJSON(data)
          that.items = str
          console.log(that.pro_shop_pic.split(';')[Math.floor(Math.random() * 3)])
        }
      })
    }
  },
  mounted: function () {
    this.ajax()
  }
}
</script>

<style lang="scss" scoped>
  #hot {
    margin: 15px 10px 0 10px;
    background: #fff;
    font-size: 30px;
    border-bottom: 3px solid #e6e6e6;
    overflow:hidden;
    #title p {
      padding: 5px;
      text-align: center;
      color: #ff0000;
    }
    #hotcon {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 25%;
        height: 100%;
        text-align: center;
        p{
          font-size:20px;
        }
        img {
          width: 130px;
          height: 160px;
          border-radius:10px;
        }
        span {
          margin: 5px 5px 0 0;
          font-size: 18px;
          text-align: center;
        }
        span:nth-of-type(1) {
          color: #ff0000;
        }
      }
    }
  }
</style>
