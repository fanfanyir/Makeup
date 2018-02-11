<template>
  <div id="changepw">
    <p id="changepw-data"><img id="changepw-data1" src="../../assets/order/左箭头2.png" @click="changepwData()">密 码 更 改</p>
    <form id="changepw-list">
      <div>
        <p>原 密 码</p>
        <input type="password" id="pw1" v-on:blur="pw1()"/>
      </div>
      <div>
        <p>新 密 码</p>
        <input type="password" id="pw2" v-on:blur="pw2()"/>
      </div>
      <div>
        <p>确认密码</p>
        <input type="password" id="pw3" v-on:blur="pw3()"/>
      </div>
      <button @click="pw()" class="changepw-sub">提交</button>
    </form>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'changepw',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    changepwData: function () {
      this.$router.push({path: '/manage?' + 'user_id=' + this.$route.query.user_id})
    },
    pw1: function () {
      var oReg = /^[a-zA-Z0-9]{6,15}$/
      if (!oReg.test($('#pw1').val())) {
        alert('密码由6-15位数字字母组成')
        return false
      } else {
        return true
      }
    },
    pw2: function () {
      var oReg1 = /^[a-zA-Z0-9]{6,15}$/
      if (!oReg1.test($('#pw2').val())) {
        alert('密码由6-15位数字字母组成jbj')
        return false
      } else {
        return true
      }
    },
    pw3: function () {
      if ($('#pw3').val() !== $('#pw2').val()) {
        alert('两次输入密码不一致')
        return false
      } else {
        return true
      }
    },
    pw: function () {
      if (this.$options.methods.pw1() && this.$options.methods.pw2() && this.$options.methods.pw3) {
        $.ajax({
          url: 'http://nrpi25.natappfree.cc/gaimima.htm' + '?user_id=' + 2 + '&old_password=' + $('#pw1').val() + '&new_password=' + $('#pw2').val(),
          type: 'get',
          dataType: 'json',
          success: function (res) {
            if (!res) {
              alert('密码错误请重新输入')
              return false
            } else {
              alert('修改成功')
              return true
            }
          }
        })
      } else {
        alert('请正确输入密码')
        return false
      }
    }
  }
}
</script>
<style scoped>
  *{
    padding:0;margin:0;
  }
  #changepw{
    width:100%;
    height:100%;
  }
  #changepw-data1{
    width:50px;
    height:50px;
    margin-right:35%;
  }
  #changepw-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    color:white;
    font-size:40px;
    line-height:80px;
    padding-left:10px;
  }
  #changepw-list{
    width:100%;
    height:100%;
    padding:10px 5px 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  #changepw-list div{
    padding-right:20%;
    width:100%;
    height:80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: 80px;
    border-bottom:1px solid #666;
  }
  #changepw-list div p{
    margin-left:20px;
    width:30%;
    color:#666;
    font-size:25px;
  }
  #changepw-list div input{
    width:60%;
    height:60px;
    border:none;
  }
  .changepw-sub{
    width:60%;
    height:60px;
    border:none;
    margin-top:50px;
    /*margin-left:45%;*/
    border:none;
    width:100%;
    background-color:#ff0000;
    font-size:36px;
    color:white;
    border-radius: 20px;
    text-align: center;
  }
</style>
