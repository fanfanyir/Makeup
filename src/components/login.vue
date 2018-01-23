<template>
  <div id="login">
    <div id="login-pic">
      <img src="../assets/login/person.png" />
    </div>
    <form id="login-input" name="login">
      <input type="text" placeholder="请输入账户名" id="username"/>
      <input type="password" placeholder="请输入密码" id="password"/>
      <p id="forget">
        <a href="#" >忘记密码</a>
      </p>
      <input type="submit" value="登 录" @click="login()" id="login-btn"/>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      msg: ''
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
   width:80%;
   border:none;
   border-bottom:1px #ff0000 solid;
   color:black;
   font-size:18px;
   height:60px;
   outline: none;
 }
  #login-input #forget{
    width:100%;
    height:60px;
    font-size:35px;
    padding-right:10%;
    color:#666;
    text-align: right;
  }
  #login-input #login-btn {
    width: 80%;
    height: 70px;
    background-color: #ff0000;
    border-radius: 55px;
    font-size: 40px;
    color: white;
  }
</style>
