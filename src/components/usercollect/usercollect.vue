<template>
  <div id="usercollect">
    <p id="usercollect-top">我 的 收 藏</p>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'person',
  data () {
    return {
    }
  },
  methods: {
    login: function () {
      $.ajax({
        url: 'User?username=' + $('#username').val() + '&password=' + $('#password').val(),
        type: 'post',
        dataType: 'json',
        success: function (res) {
        }
      })
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>
<style scoped>
  #usercollect{
    width:100%;
    height:100%;
  }
  #usercollect-top{
    width:100%;
    height:80px;
    background-color: #ff0000;
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
    position:fixed;
    left:0;
    top:0;
  }
</style>
