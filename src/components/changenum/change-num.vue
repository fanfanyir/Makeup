<template>
  <div id="changenum">
    <p id="changenum-data"><img id="changenum-data1" src="../../assets/order/左箭头2.png" @click="changenumData()">手机号更改</p>
    <form id="changenum-list">
      <div>
        <p class="changenum-left">新手机号</p>
        <input id="phone" type="text" class="changenum-input" v-on:blur="changenum1()"/>
      </div>
      <button  class="changenum-sub" @click="changenum2()">提 交</button>
    </form>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'changenum',
  data () {
    return {
      num1: '12345678912'
    }
  },
  methods: {
    changenumData: function () {
      this.$router.push({path: '/manage?' + 'user_id=' + this.$route.query.user_id})
    },
    changenum1: function () {
      var oReg1 = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!oReg1.test($('#phone').val())) {
        alert('请输入正确手机号')
        return false
      } else {
        return true
      }
    },
    changenum2: function () {
      var url1 = this.$route.query.user_id
      $.ajax({
        url: 'http://nrpi25.natappfree.cc/gaitel.htm' + '?phone=' + $('#phone').val() + '&user_id=' + url1,
        type: 'get',
        dataType: 'json',
        success: function (res) {
          if (res) {
            alert('修改成功')
          } else {
            alert('修改失败')
          }
        }
      })
    }
  }
}
</script>
<style scoped>
  *{
    padding:0;margin:0;
  }
  #changenum{
    width:100%;
    height:100%;
  }
  #changenum-data1{
    width:50px;
    height:50px;
    margin-right:35%;
  }
  #changenum-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    color:white;
    font-size:30px;
    line-height:80px;
    padding-left:10px;
  }
  #changenum-list{
    width:100%;
    height:100%;
    padding:10px 30px 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  #changenum-list div{
    width:100%;
    height:80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: 80px;
    padding-left:20px;
    border-bottom: 1px solid #aeaaaa;
    padding-right:20%;
  }
  .changenum-left{
    width:30%;
    height:80px;
    font-size:20px;
  }
  #changenum-right{
    width:60%;
    height:80px;
  }
  #changenum-list div input{
    width:65%;
    height:60px;
    outline:none;
  }
  .changenum-input{
    border:none;
  }
  .changenum-sub{
    margin-top:50px;
    border:none;
    width:100%;
    background-color:#ff0000;
    font-size:30px;
    color:white;
    height:50px;
    line-height:50px;
    border-radius:20px;
    text-align: center;
  }
</style>
