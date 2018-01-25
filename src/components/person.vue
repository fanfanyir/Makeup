<template>
  <div id="person">
    <p id="person-data">个人资料</p>
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
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'person',
  data () {
    return {
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'}
      ],
      msg1: 'xcs',
      msg2: '25',
      msg3: 'xcs',
      msg4: '25',
      msg5: '的v比较好v减肥地方v额就和个人眼光放到程序程序就gthgb的的v美丽的反馈v金额v不感觉比较方便'
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
    width:100px;
    height:100px;
  }
  #person-pic li{
    width:100%;
    height:80px;
    display:flex;
    justify-content: space-between;
   }
  #person-special{
    width:200px;
    font-weight: bold;
    font-size:20px;
  }
  #person-space{
    width:400px;
    text-align: center;
  }
</style>
