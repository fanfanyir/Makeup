<template>
  <div id="login">
    <div v-for="item in items" v-bind:key="item.id" id="login-pic">
      <img v-bind:src="item.src"/>
    </div>
    <form id="login-input" name="login" action="" >
      <input type="text" placeholder="请输入账户名"  id="username"  name="username"/><span id="user"></span>
      <input type="password" placeholder="请输入密码" id="password" name="password"/><span id="pass"></span>
      <p id="forget">
        <a href="register.vue" id="forget-register">立即注册 ?</a>
        <a href="#" >忘记密码</a>
      </p>
      <input type="submit" value="登 录" id="login-btn" @click="login()"/>
    </form>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'login',
  data () {
    return {
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'}
      ],
      msg: ''
    }
  },
  methods: {
    login: function () {
      let reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,15}$/
      let reg2 = /^[a-zA-Z0-9]{6,15}$/
      let username = document.login.username
      let password = document.login.password
      let user = document.getElementById('user')
      if (!reg.test(username.value) || !reg2.test(password.value)) {
        user.innerHTML = '用户名输入错误'
        username.onfocus()
        return false
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;
  padding:0;}
 #login {
   width:100%;
   height:100%;
 }
 #login-pic{
   height:200px;
   display:flex;
   justify-content:center;
   align-items: center;
 }
 #login-pic img{
   width:150px;
   height:150px;
 }
 #login-input{
   display:flex;
   justify-content:center;
   align-items: flex-end;
   flex-wrap: wrap;
   width:100%;
   height:500px;
 }
 #login-input input{
   width:70%;
   border:none;
   border-bottom:1px #ff0000 solid;
   color:black;
   font-size:18px;
   height:60px;
   outline: none;
 }
 #login-input #user{
   color:#ff0000;
 }
  #login-input #pass{
    color:#ff0000;
  }
  #login-input #forget{
    width:100%;
    height:60px;
    font-size:35px;
    color:#666;
    display:flex;
    padding:0 10%;
    justify-content: space-between;
    align-content: center;
  }
  #login-input #login-btn {
    width: 80%;
    height: 70px;
    background-color: #ff0000;
    border-radius: 55px;
    font-size: 40px;
    color: white;
  }
  #forget-register{
    color:#ff0000;
  }
</style>
