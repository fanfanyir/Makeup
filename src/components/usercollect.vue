<template>
  <div id="usercollect">
    <p id="usercollect-top">我 的 收 藏</p>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'person',
  data () {
    return {
      goods: [
        {id: '￥368', src: 'http://ozxb0em6i.bkt.clouddn.com/person.png', feettime: '2018-1-11', feetid: 0},
        {id: '￥368', src: 'http://ozxb0em6i.bkt.clouddn.com/person.png', feettime: '2018-1-11', feetid: 1},
        {id: '￥368', src: 'http://ozxb0em6i.bkt.clouddn.com/person.png', feettime: '2018-1-11', feetid: 2},
        {id: '￥368', src: 'http://ozxb0em6i.bkt.clouddn.com/person.png', feettime: '2018-1-11', feetid: 3}
      ]
    }
  },
  methods: {
    login: function () {
      $.ajax({
        url: 'User?username=' + $('#username').val() + '&password=' + $('#password').val(),
        type: 'post',
        dataType: 'json',
        success: function (res) {
          var that = this
          console.log(res.data)
          var str = res.data
          var lastTime = 0
          var nowTime = 0
          for (var i = 0; i < str.length; i++) {
            var arr = (str[i].feet_time).split('-')
            nowTime = arr[0] + arr[1] + arr[2]
            if (nowTime < lastTime) {
              that.item[i].feettime = str[i].feet_time
              that.item[i].src = (str[i].pro_shop_pic).split(';')[0]
            }
            that.item[i].feetid = (str[i].feet_id)
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
  #usercollect{
    width:100%;
    height:100%;
  }
  #usercollect-top{
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
  .feet-nav{
    display:flex;
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
  }
  .feet-id{
    display:inline-block;
    width:80%;
    color:red;
  }
  .feet-price{
    width:100%;
    display:flex;
    justify-content: space-around;
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
