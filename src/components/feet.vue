<template>
  <div id="feet">
    <p id="feet-top">我的足迹</p>
    <div class="feet-nav">
      <p class="feet-title">最近一个月我浏览了它们 . . .</p>
      <img src="../assets/delete.png" class="feet-delete">
    </div>
    <div id="feet-data"  v-for="item in items" v-bind:key="item.feet_id">
        <p id="feet-time" >{{item.feet_time}}</p>
        <div class="feet-price">
        <div  class="feet-pic"><img v-bind:src="item.pro_shop_pic"/>
          <p><span class="feet-id">{{item.pro_shop_price}}</span><span class="feet-point"> . . . </span></p>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'person',
  data () {
    return {
      items: [
        {'feet_id': 1, 'feet_time': 914169600000, 'pro_shop_id': 1, 'pro_shop_pic': 'http://ozxb0em6i.bkt.clouddn.com/4302_205.jpg', 'pro_shop_price': 120, 'user_id': 0},
        {'feet_id': 2, 'feet_time': 914256000000, 'pro_shop_id': 2, 'pro_shop_pic': 'http://ozxb0em6i.bkt.clouddn.com/4302_205.jpg', 'pro_shop_price': 140, 'user_id': 0},
        {'feet_id': 4, 'feet_time': 914342400000, 'pro_shop_id': 4, 'pro_shop_pic': 'http://ozxb0em6i.bkt.clouddn.com/4302_205.jpg', 'pro_shop_price': 1200, 'user_id': 0},
        {'feet_id': 3, 'feet_time': 914428800000, 'pro_shop_id': 3, 'pro_shop_pic': 'http://ozxb0em6i.bkt.clouddn.com/4302_205.jpg', 'pro_shop_price': 120, 'user_id': 0}]
    }
  },
  methods: {
    init: function () {
      $.ajax({
        url: 'http://curryni.free.ngrok.cc/zuji.htm?user_id=2',
        type: 'get',
        dataType: 'json',
        success: function (res) {
          console.log(res.data)
          var str = res.data
          var lastTime = 0
          var nowTime = 0
          for (var i = 0; i < str.length; i++) {
            var arr = (str[i].feet_time).split('-')
            nowTime = arr[0] + arr[1] + arr[2]
            if (nowTime < lastTime) {
              this.item[i].feet_time = str[i].feet_time
              this.item[i].src = (str[i].pro_shop_pic).split(';')[0]
            }
            this.item[i].feetid = (str[i].feet_id)
            /*
            * 此处添加等足迹详细信息，记得添加id哦
            * */
          }
        }
      })
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>
<style scoped>
  #feet{
    width:100%;
    height:100%;
  }
  #feet-top{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
    position:fixed;
    left:0;
    top:0;
  }
  .feet-nav p{
    color:#666;
    width:90%;
    height:50px;
    line-height: 50px;
  }
  .feet-nav{
    display:flex;
    margin-top:80px;
  }
  .feet-delete{
    width:30px;
    height:30px;
    margin-top:10px;
  }
  #feet-data{
    width:100%;
  }
  #feet-time{
    width:100%;
    height:20px;
    margin-bottom:20px;
  }
  .feet-id{
    display:inline-block;
    width:80%;
    color:red;
  }
  .feet-price{
    width:100%;
    display:flex;
    justify-content: flex-start;
  }
  .feet-price img{
  width:200px;
  height:200px;
  margin-bottom:10px;
}
  .feet-price .feet-point{
    font-weight: bold;
  }
</style>
