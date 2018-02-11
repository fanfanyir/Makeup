<template>
  <div id="login">
    <div v-for="item in items" v-bind:key="item.id" id="login-pic">
      <img v-bind:src="item.src"/>
    </div>
    <form id="login-input" name="login" @submit.prevent="false">
      <input type="text" placeholder="请输入账户名"  id="username"  name="user_name" v-on:blur="login1()" />
      <p></p>
      <input type="password" placeholder="请输入密码" id="password" name="pass_word"  v-on:blur="login2()"/>
      <p></p>
      <input type="text" class="dis0" name="url0" value=""/>
      <p id="forget">
        <a href="#" id="forget-register" @click="jumpRegister()">立即注册 ?</a>
        <a href="#"  id="forget-register2">忘记密码</a>
      </p>
      <input type="button" value="登 录" id="login-btn" @click="loginP()"/>
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
    init: function () {
    },
    jumpRegister: function () {
      this.$router.push({
        path: '/register?' + 'user_id=' + this.$route.query.user_id
      })
    },
    loginP: function () {
      var reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,15}$/
      var reg1 = /^[a-zA-Z0-9]{6,15}$/
      if (reg.test(document.login.user_name.value) && reg1.test(document.login.pass_word.value)) {
        var that = this
        $.ajax({
          url: 'http://nrpi25.natappfree.cc/denglu.htm?username=' + $('#username').val() + '&password=' + $('#password').val(),
          type: 'get',
          dataType: 'json',
          success: function (str) {
            if (str.state) {
              alert('登陆成功')
              that.$router.push({
                path: '/index',
                query: {user_id: str.user_id}
              })
            } else {
              alert('登录失败')
              $('p').eq(0).innerHTML = '此用户名不存在，请先注册'
            }
          }
        })
      } else {
        alert('登陆失败')
      }
    },
    login1: function () {
      var reg = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,15}$/
      var username = document.login.user_name
      var aP = document.getElementsByTagName('p')
      if (!reg.test(username.value)) {
        aP[0].innerHTML = '请输入由字母数字中文组成的6-15位账户名'
        return false
      } else {
        aP[0].innerHTML = ''
        return true
      }
    },
    login2: function () {
      var reg1 = /^[a-zA-Z0-9]{6,15}$/
      var password = document.login.pass_word
      var aP = document.getElementsByTagName('p')
      if (!reg1.test(password.value) && password.value) {
        aP[1].innerHTML = '密码错误'
        return false
      } else {
        aP[1].innerHTML = ''
        return true
      }
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;
    padding:0;}
  .dis0{
    display: none;
  }
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
  }
  #login-input #password{
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
