<template>
  <div id="changenum">
    <p id="changenum-data">手机号更改</p>
    <form id="changenum-list">
      <div>
        <p class="changenum-left">已绑定手机号</p>
        <p id="changenum-right"> {{num1}}</p>
      </div>
      <div>
        <p class="changenum-left">新手机号</p>
        <input type="text" >
      </div>
        <input type="submit" value="提 交" class="changenum-sub" @click="changenum()"/>
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
    changenum: function () {
      var that = this
      $.ajax({
        url: '',
        type: 'post',
        dataType: 'json',
        success: function (Rdata) {
          var str = $.parseJSON(Rdata)
          that.data.num1 = str
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
  #changenum-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
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
  .changenum-sub{
    margin-top:20px;
    border:none;
    width:100%;
    background-color:#ff0000;
    font-size:30px;
    color:white;
    border-radius:20px;
  }
</style>
