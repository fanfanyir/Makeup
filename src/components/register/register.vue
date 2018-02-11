<template>
  <div id="register">
    <p id="register-header">
      <span @click="registerData()"> &lt;</span>欢迎注册
    </p>
    <!--<changeimg></changeimg>-->
    <form method="get" action="" id="register-input"  name="register" @submit.prevent="false">
      <div id="register-pic" v-for ='item in items' v-bind:key="item.id">
        <img v-bind:src="item.src"  id="imgSdf"/>
      </div>
      <input type="text" placeholder="账户名" name="u1" v-on:blur="user1()" id="u1"/>
      <p></p>
      <input type="text" placeholder="请输入身份证号" name="u2" v-on:blur="user2()"/>
      <p></p>
      <select name="sex" style=" color:#aeaaaa;" id="register-select" v-on:blur="user8()">
        <option id="sex" selected="selected" >性别</option>
        <option value="男" style=" color:#000;">男</option>
        <option value="女" style=" color:#000;">女</option>
      </select>
      <p></p>
      <input type="text" placeholder="邮箱" name="u4" v-on:blur="user4()"/>
      <p></p>
      <input type="text" placeholder="电话号码" name="u5" v-on:blur="user5()"/>
      <p></p>
      <input type="password" placeholder="密码" name="u6" v-on:blur="user6()"/>
      <p></p>
      <input type="password" placeholder="确认密码" name="u7" v-on:blur="user7()"/>
      <p></p>
      <button v-on:click='f1()' id="register-footer">立即注册</button>
    </form>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'register',
  data () {
    return {
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/person.png'}
      ]
    }
  },
  methods: {
    registerData: function () {
      this.$router.push({
        path: '/login'
      })
    },
    user1: function () {
      var oReg1 = /^[a-zA-Z0-9\u4e00-\u9fa5]{6,15}$/
      var oU1 = document.register.u1
      var aP = document.getElementsByTagName('p')
      if (!oReg1.test(oU1.value)) {
        aP[1].innerHTML = '请输入由字母或数字或中文组成的6-15位账户名'
        return false
      } else {
        aP[1].innerHTML = ''
        $.ajax({
          url: 'http://nrpi25.natappfree.cc/check.htm?username=' + $('#u1').val(),
          type: 'get',
          dataType: 'json',
          async: false,
          success: function (str) {
            if (str === true) {
              $('p').eq(1).html('帐户名已注册过')
              return false
            } else {
              $('p').eq(1).html('')
              return true
            }
          }
        })
      }
    },
    user8: function () {
      $('select').css('color', '#000')
    },
    user2: function () {
      var oReg1 = /[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x/
      var oU2 = document.register.u2
      var aP = document.getElementsByTagName('p')
      if (!oReg1.test(oU2.value)) {
        aP[2].innerHTML = '请输入正确的身份证号格式'
        return false
      } else {
        aP[2].innerHTML = ''
        return true
      }
    },
    user4: function () {
      var oReg1 = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/
      var oU4 = document.register.u4
      var aP = document.getElementsByTagName('p')
      if (!oReg1.test(oU4.value)) {
        aP[4].innerHTML = '请输入正确的邮箱格式'
        return false
      } else {
        aP[4].innerHTML = ''
        return true
      }
    },
    user5: function () {
      var oReg1 = /^[1][3,4,5,7,8][0-9]{9}$/
      var oU5 = document.register.u5
      var aP = document.getElementsByTagName('p')
      if (!oReg1.test(oU5.value)) {
        aP[5].innerHTML = '请输入正确的手机号码'
        return false
      } else {
        aP[5].innerHTML = ''
        return true
      }
    },
    user6: function () {
      var oReg1 = /^[a-zA-Z0-9]{6,15}$/
      var oU6 = document.register.u6
      var aP = document.getElementsByTagName('p')
      if (!oReg1.test(oU6.value)) {
        aP[6].innerHTML = '密码由6-15位数字字母组成'
        return false
      } else {
        aP[6].innerHTML = ''
        return true
      }
    },
    user7: function () {
      var oU6 = document.register.u6
      var oU7 = document.register.u7
      var oU6v = oU6.value
      var aP = document.getElementsByTagName('p')
      if (oU7.value !== oU6v) {
        aP[7].innerHTML = '两次输入密码不一致'
        return false
      } else {
        aP[7].innerHTML = ''
        return true
      }
    },
    f1: function (ev) {
      var oReg1 = /[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x/
      var oReg2 = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/
      var oReg3 = /^[1][3,4,5,7,8][0-9]{9}$/
      var oReg4 = /^[a-zA-Z0-9]{6,15}$/
      if (oReg1.test(document.register.u2.value) && oReg2.test(document.register.u4.value) && oReg3.test(document.register.u5.value) && oReg4.test(document.register.u6.value) && (document.register.u6.value === document.register.u7.value)) {
        var formData = new FormData($('#register-input')[0])
        var that = this
        $.ajax({
          url: 'http://nrpi25.natappfree.cc/register.htm',
          type: 'POST',
          xhrFields: {withCredentials: true},
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (res) {
            alert(res)
            if (res === 'true') {
              alert('注册成功')
              that.$router.push({
                path: '/login'
              })
            } else {
              alert('注册失败')
            }
          }
        })
        console.log('success')
      } else {
        alert('请正确完善信息')
      }
    }
  }

//  mounted: function () {
//    this.init()
//  }
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
  #register-header span{
    color:#ff0000;
    font-size:60px;
    margin-left:30px;
    margin-right:20px;
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
    height:800px;
  }
  #register-input input{
    display:inline-block;
    border:none;
    width:80%;
    height:75px;
    color:#000;
    border:1px solid #666;
    outline:none;
  }
  #register-input p{
    width:80%;
    height:30px;
    font-size:20px;
    color:red;
  }
  #register-input select{
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    border:1px solid #666;
    width:80%;
    height:75px;
  }
  /*#register-footer{*/
  /*width:100%;*/
  /*height:100px;*/
  /*display:flex;*/
  /*justify-content: center;*/
  /*align-items:flex-end;*/
  /*}*/
  #register-footer{
    margin:0 auto;
    width:80%;
    height:70px;
    background-color:#ff0000;
    border-radius:55px;
    font-size:36px;
    color:#fff;
    outline:none;
  }
  #register-select option{
    color:#000;
  }
</style>
