<template>
  <div id="changepw">
    <p id="changepw-data">密码更改</p>
    <form id="changepw-list" action="" method="">
      <div>
        <p>请输入旧密码</p>
        <input type="text" name="pwdata" v-on:blur="pw()"/>
      </div>
      <div>
        <p>新密码</p>
        <input type="password" name="npwdata">
      </div>
      <input type="submit" value="提 交" class="changepw-sub"/>
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
    pw: function () {
      $.ajax({
        url: '',
        type: 'post',
        dataType: 'json',
        data: $('input').eq(0).val(),
        success: function (Rdata) {
          if (!Rdata) {
            alert('密码错误请重新输入')
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
  #changepw{
    width:100%;
    height:100%;
  }
  #changepw-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
  }
  #changepw-list{
    width:100%;
    height:100%;
    padding:10px 30px 0;
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
  }
  #changepw-list div p{
    width:30%;
  }
  #change-pw-list div input{
    width:60%;
    height:50px;
  }
  .changepw-sub{
    margin-top:20px;
    border:none;
    width:100%;
    background-color:#ff0000;
    font-size:36px;
    color:white;
    border-radius: 20px;
  }
</style>
