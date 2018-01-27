<template>
  <div id="change-pw">
    <p id="change-pw-data">密码更改</p>
    <ul id="change-pw-list">
      <li>
        <p>已绑定手机号</p>
        <p>{{pw1}}</p>
      </li>
      <li>
        <p>新手机号</p>
       <input type="text" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'change-pw',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  *{
    padding:0;margin:0;
  }
  #change-pw{
    width:100%;
    height:100%;
  }
  #change-pw-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
  }
  #change-pw-list{
    width:100%;
    height:100%;
    padding:10px 30px 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
