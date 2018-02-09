<template>
  <div id="feet">
    <p id="feet-top"><img id="feetdata1" src="../../assets/order/左箭头2.png" @click="feetData()">我的足迹</p>
    <div class="feet-nav">
      <p class="feet-title">最近一个月我浏览了它们 . . .</p>
      <img src="../../assets/delete.png" class="feet-delete">
    </div>
    <div id="feet-data"  v-for=" item in items" v-bind:key="item.feet_id">
        <p id="feet-time"> fdfvff{{item.feet_time}}</p>
        <div class="feet-price">
        <div class="feet-pic">
          <img v-bind:pro_shop_pic="item.pro_shop_pic"/>
          <p class="feet-back"><span class="feet-id"> ￥{{item.pro_shop_price}}</span><span class="feet-point"> . . . </span></p>
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
      ]
    }
  },
  methods: {
    feetData: function () {
      this.$router.go(-1)
    },
    init: function () {
      $.ajax({
        url: 'http://3j3xbd.natappfree.cc/zuji.htm?user_id=2',
        type: 'get',
        dataType: 'json',
        success: function (res) {
          this.items = res
          var lastTime = 0
          var nowTime = 0
          alert(res.length)
          console.log(this.items)
          alert(this.items)
          for (var i = 0; i < res.length; i++) {
            nowTime = res[i].feet_time
            if (nowTime > lastTime) {
              var time1 = new Date(nowTime)
              var time2 = time1.getFullYear() + '年' + (time1.getMonth() + 1) + '月' + time1.getDate() + '日'
              this.items[i].feet_time = time2
              alert(this.items[i].feet_time)
              lastTime = nowTime
            } else {
              this.items[i].feet_time = ''
            }
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
  #feetdata1{
    width:50px;
    height:50px;
    margin-left:10px;
    margin-right:35%;
  }
  #feet-top{
    width:100%;
    height:80px;
    background-color: #ff0000;
    color:white;
    font-size:30px;
    line-height:80px;
    position:fixed;
    left:0;
    top:0;
  }
  .feet-nav p{
    color:#666;
    font-size:30px;
    width:90%;
    height:50px;
    line-height: 50px;
  }
  .feet-nav{
    display:flex;
    margin-top:100px;
    margin-bottom:10px;
  }
  .feet-delete{
    width:40px;
    height:40px;
    margin-top:10px;
  }
  #feet-data{
    width:100%;
    margin-bottom:15px;
  }
  #feet-time{
    width:100%;
    height:20px;
    margin-bottom:20px;
    margin-left:20px;
  }
  .feet-id{
    display:inline-block;
    width:80%;
    color:white;
    font-size:25px;
  }
  .feet-price{
    width:100%;
    display:flex;
    justify-content: flex-start;
    margin-left:5%;
  }
  .feet-back{
    width:100%;
    height:40px;
    background-color:#ff0000;
    line-height:40px;
  }
  .feet-price img{
  width:250px;
  height:200px;
  margin-bottom:5px;
}
  .feet-price .feet-point{
    font-weight: bold;
    color:white;
  }
</style>
