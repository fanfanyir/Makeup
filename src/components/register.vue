<template>
  <div id="register">
    <p id="register-header">
      欢迎注册
    </p>
    <div id="register-pic">
      <img src=".././assets/login/person.png"/>
    </div>
    <changeimg></changeimg>
    <form method="" action="" id="register-input">
      <input type="text" placeholder="账户名"/>
      <input type="text" placeholder="请输入身份证号"/>
      <input type="text" placeholder="性别"/>
      <input type="text" placeholder="邮箱"/>
      <input type="text" placeholder="电话号码"/>
      <input type="text" placeholder="密码"/>
      <input type="password" placeholder="确认密码"/>
    </form>
    <form id="register-footer">
      <input type="submit" value="立即注册" />
    </form>
  </div>
</template>
<script>
import changeimg from './changeimg/changeimg.vue'
export default {
  name: 'register',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    changeimg
  }
}
</script>
<style scoped>
  *{padding:0;margin:0;}
  #register{
    width:100%;
    height:100%;
  }
  #register-header{
    height:100px;
    line-height:100px;
    color:#ff0000;
    font-size:36px;
  }
  #register-pic{
    width:100%;
    height:200px;
    display:flex;
    justify-content: center;
  }
  #register-pic img{
    width:150px;
    height:150px;
  }
  #register-input{
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    width:100%;
    height:770px;
  }
  #register-input input{
    border:none;
    width:80%;
    height:70px;
    color:#666;
    border:1px solid #666;
    outline:none;
  }
  #register-footer{
    width:100%;
    height:100px;
    display:flex;
    justify-content: center;
    align-items:flex-end;
  }
  #register-footer input{
    margin:0 auto;
    width:80%;
    height:70px;
    background-color:#ff0000;
    border-radius:55px;
    font-size:36px;
    color:white;
  }
</style>
