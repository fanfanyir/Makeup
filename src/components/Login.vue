<template>
  <div id="login">
    <div id="login-pic">
      <img src="../assets/login/person.png" />
    </div>
    <div id="login-input1" >
      <input type="text" placeholder="请输入账户名"/>
    </div>
    <div id="login-input2" >
      <input type="text" placeholder="请输入密码"/>
    </div>
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
 #login {
   width:100%;
 }
 #login-pic{
   height:200px;
   display:flex;
   justify-content:center;
   align-items: center;
 }
 #login-pic img{
   width:100px;
   height:101px;
 }
 #login-input1{
   display:flex;
   justify-content:center;
   width:100%;
   height:30px;
 }
 #login-input2{
   display:flex;
   justify-content:center;
   width:100%;
   height:30px;
 }
 #login input{
   width:70%;
   border:none;
   border-bottom:1px #ff0000 solid;
   color:#aeaaaa;
   font-size:12px;
 }
</style>
