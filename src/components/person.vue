<template>
  <div id="person">
    <p id="person-data">用户信息</p>
    <ul id="person-pic">
      <li>
        <p>妆淘头像</p>
        <div v-for="item in items" v-bind:key="item.id">
          <img v-bind:src="item.src"/>
        </div>
      </li>
        <li>
          <p>用户名</p>
          <p>{{msg1}}</p>
        </li>
        <li>
          <p>性别</p>
          <p>{{msg2}}</p>
        </li>
        <li>
          <p>生日</p>
          <p>{{msg3}}</p>
        </li>
        <li>
          <p>手机</p>
          <p>{{msg4}}</p>
        </li>
      <li >
        <p  id="person-special">个性签名</p>
        <p id="person-space">{{msg5}}</p>
      </li >
      <li class = "person-name">
        <a href="#">我的收藏</a>
        <a href="#">我的足迹</a>
        <a href="#">我的订单</a>
      </li>
    </ul>
    <changeimg></changeimg>
  </div>
</template>
<script>
export default {
  name: 'person',
  data () {
    return {
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/person.png'}
      ],
      msg1: 'xcs',
      msg2: '25',
      msg3: 'xcs',
      msg4: '25',
      msg5: '的v比较好v减肥地方v额就和个人眼光放到程序程序就gthgb的的v美丽'
    }
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
  #person-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
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
    text-align: center;
  }
  .person-name{
    width:100%;
    height:50px;
    margin-top:20px;
   line-height:50px;
    font-size:36px;
  }
  .person-name a{
  }
</style>
