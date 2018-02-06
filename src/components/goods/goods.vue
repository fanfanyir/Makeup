<template>
  <div id="goods">
    <div id="title"><p>{{ message }}</p></div>
    <div id="goodscon" class="goodscon">
      <!--<div v-for="item in items" v-bind:key="item.id">-->
      <!--<a href="#"><img v-bind:src="item.src"><span >{{ item.id }}</span></a>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default{
  data () {
    return {
      message: '商品分类'
    }
  },
  methods: {
    get: function () {
      this.$http({
        method: 'GET',
        url: 'http://bzuhan.free.ngrok.cc/selectAllBigClass.htm',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res.data)
        var str = res.data
        for (let i = 0; i <= str.length; i++) {
          $('#goodscon img').eq(i).attr('src', str[i].max_photo)
          $('#goodscon span').eq(i).html(str[i].kind_max)
        }
      }, function () {
        console.log('请求失败')
      })
    }
  },
  mounted: function () {
    this.get()
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
      height: 335px;
      padding-top:10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
       div {
        width: 25%;
        height: 125px;
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
