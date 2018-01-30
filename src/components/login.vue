<template>
  <div id="login">
    <div v-for="item in items" v-bind:key="item.id" id="login-pic">
      <img v-bind:src="item.src"/>
    </div>
    <form id="login-input" name="login" action="" >
      <input type="text" placeholder="请输入账户名"  id="username"  name="username" v-on:blur="login1()" />
      <p></p>
      <input type="password" placeholder="请输入密码" id="password" name="password"  v-on:blur="login2()"/>
      <p></p>
      <p id="forget">
        <a href="register.vue" id="forget-register">立即注册 ?</a>
        <a href="#"  id="forget-register2">忘记密码</a>
      </p>
      <input type="submit" value="登 录" id="login-btn" @click="loginP()"/>
    </form>
  </div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default {
  name: 'login',
  data () {
    return {
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/person.png'}
      ],
      msg: ''
    }
  },
  methods: {
    login: function () {
      $.ajax({
        url: 'User?username=' + $('#username').val() + '&password=' + $('#password').val(),
        type: 'post',
        dataType: 'json',
        success: function (str) {
          if (str) {
            alert('登陆成功')
          } else {
            $('p').eq(0).innerHTML = '此用户名不存在，请先注册'
          }
        }
      })
    },
    login1: function () {
      var reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,15}$/
      var username = document.login.username
      var aP = document.getElementsByTagName('p')
      if (!reg.test(username.value)) {
        aP[0].innerHTML = '请输入由字母数字中文组成的6-15位账户名'
        return false
      } else {
        aP[0].innerHTML = ''
        this.login()
      }
    },
    login2: function () {
      var reg1 = /^[a-zA-Z0-9]{6,15}$/
      var password = document.login.password
      var aP = document.getElementsByTagName('p')
      if (!reg1.test(password.value) && password.value) {
        aP[1].innerHTML = '密码错误'
        return false
      } else {
        aP[1].innerHTML = ''
      }
    },
    loginP: function () {
      var password = document.login.password
      var loginp = $.md5(password)
      console.log(loginp)
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
   height:400px;
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
  #login-input p{
    width:70%;
    height:30px;
    color:red;
  }
 #login-input #username{
   color:#ff0000;
 }
  #login-input #password{
    color:#ff0000;
  }
  #login-input #forget{
    width:100%;
    height:60px;
    font-size:35px;
    color:#666;
    display:flex;
    padding:0 15%;
    justify-content: space-between;
    align-content: center;
  }
  #login-input #login-btn {
    width: 70%;
    height: 70px;
    background-color: #ff0000;
    border-radius: 55px;
    font-size: 40px;
    color: white;
  }
  #forget-register{
    color:#ff0000;
    font-size:20px;
  }
  #forget-register2{
    font-size:20px;
  }
</style>
