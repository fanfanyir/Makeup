<template>
  <div id="person">
    <p id="person-data"><img id="persondata1" src="../../assets/order/左箭头2.png" @click="personData()">用 户 信 息</p>
    <ul id="person-pic">
      <li>
        <p>妆淘头像</p>
        <div >
          <img v-bind:key='user.user_photo'/>
        </div>
      </li>
        <li>
          <p>用户名</p>
          <p>{{user.userinfo_nickname}}</p>
        </li>
        <li>
          <p>性别</p>
          <p>{{user.user_sex}}</p>
      </li>
        <li>
          <p>生日</p>
          <p>{{user.userinfo_bir}}</p>
        </li>
        <li>
          <p>手机</p>
          <p>{{user.user_tel}}</p>
        </li>
      <li >
        <p  id="person-special">个性签名</p>
        <p id="person-space">{{user.userinfo_sign}}</p>
      </li >
    </ul>
    <div class = "person-name">
      <a href="#">我的收藏</a>
      <a href="#" @click="jumpFeet()">我的足迹</a>
      <a href="#" @click="jumpOrd()">我的订单</a>
      <a href="#" @click="jumpManan1()">账户管理</a>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'person',
  data () {
    return {
      user: [
      ]
    }
  },
  methods: {
    jumpManan1: function () {
      console.log(this.$route.query)
      this.$router.push({
        path: '/manage?' + 'user_id=' + this.$route.query.user_id
      })
    },
    jumpFeet: function () {
      this.$router.push({
        path: '/feet?' + 'user_id=' + this.$route.query.user_id
      })
    },
    jumpOrd: function () {
      this.$router.push({path: '/allall?' + 'user_id=' + this.$route.query.user_id})
    },
    personData: function () {
      this.$router.push({path: '/index?' + 'user_id=' + this.$route.query.user_id})
    },
    init: function () {
      var url1 = this.$route.query.user_id
      var that = this
      $.ajax({
        url: 'http://nrpi25.natappfree.cc/gerenziliao.htm' + '?user_id=' + url1,
        type: 'get',
        dataType: 'json',
        success: function (res) {
          console.log(res)
          console.log(this)
          that.user = res
          if (res.user_sex === 1) {
            that.user.user_sex = '男'
          }
          console.log(that.user)
        }
      })
    }
  },
  mounted: function () {
    this.init()
  },
  components: {
  }
}
</script>
<style scoped>
  #person{
    width:100%;
    height:100%;
  }
  #persondata1{
    width:50px;height:50px;
    margin-left:10px;margin-right:30%;
  }
  #person-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    color:white;
    font-size:40px;
    line-height:80px;
  }
  #person-pic{
    width:100%;
    height:100%;
    padding:10px 30px 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  #person-pic img{
    width:50px;
    height:50px;
  }
  #person-pic li{
    width:100%;
    height:80px;
    display:flex;
    justify-content: space-between;
   }
  #person-pic li p{
    color: #666;
  }
  #person-special{
    width:200px;
    font-size:20px;
  }
  #person-space{
    width:400px;
    text-align: right;
  }
  .person-name{
    width:100%;
    height:80px;
    margin-top:40px;
   line-height:80px;
    font-size:36px;
    background-color:#ff0000;
    display:flex;
    justify-content: space-around;
    position:fixed;
    left:0;
    bottom:0;
  }
  .person-name a{
    color:white;
  }
</style>
