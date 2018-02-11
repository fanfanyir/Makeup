<template>
  <div id="goods">
    <div id="title"><p>商品分类</p></div>
    <div id="goodscon" class="goodscon">
      <div v-for="item in items" v-bind:key="item in items" @click="jump">
        <img :src="item.max_photo"><span id="span">{{item.kind_max}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default{
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    ajax: function () {
      var that = this
      $.ajax({
        method: 'GET',
        url: 'http://nrpi25.natappfree.cc/index_kind_max.htm',
        dataType: 'json',
        success: function (data) {
          console.log(data)
          that.items = data
        }
      })
    },
    jump: function () {
      var t = $(window).scrollTop()
      $('body,html').animate({'scrollTop': t + 1500}, 1000)
    }
  },
  mounted: function () {
    this.ajax()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../static/common';
  #goods {
    margin: 15px 10px 0 10px;
    padding: 5px;
    font-size: 30px;
    background-color: #fff;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      text-align: center;
      color: #ff0000;
    }
    #goodscon {
      height: 100%;
      padding-top:10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
       div {
        width: 25%;
        height: 100%;
        border-radius: 50%;
        text-align: center;
         img {
           width: 110px;
           height: 110px;
           border-radius: 50%;
         }
         a {
          font-size: 14px;
         }
         span {
           margin-top: 5px;
           font-size: 20px;
           display: block;
           text-align: center;
         }
      }
    }
  }
</style>
