<template>
  <div id="manage">
    <p id="manage-data"><img id="changedata1" src="../../assets/order/左箭头2.png" @click="changeData()">账户管理</p>
    <ul id="manage-information">
      <li>
        <p>用户名</p>
        <a>{{msg1}}</a>
      </li>
      <li>
        <p >修改密码</p>
        <a><span @click="jumpChangepw()"> > </span></a>
      </li>
      <li>
        <p >修改手机号码</p>
        <a>{{msg2}} <span @click="jumpChangenum()"> > </span></a>
      </li>
      <li>
        <p>修改默认收货地址</p>
        <a>{{msg3}} <span> > </span></a>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'manage',
  data () {
    return {
      msg1: '小小小小的',
      msg2: '132*****953',
      msg3: '陕西省西安市长安区'
    }
  },
  methods: {
    changeData: function () {
      this.$router.go(-1)
    },
    jumpChangepw: function () {
      this.$router.push({
        path: '/changepw'
      })
    },
    jumpChangenum: function () {
      this.$router.push({
        path: '/changepw'
      })
    },
    manage: function () {
      $.ajax({
        url: 'http://3j3xbd.natappfree.cc/',
        type: 'post',
        dataType: 'json',
        success: function (Rdata) {
          console.log(Rdata)
          this.msg = Rdata.msg
          if (!Rdata) {
            alert('')
          }
        }
      })
    }
  }
}
</script>
<style scoped>
  #manage{
    width:100%;
    height:100%;
  }
  #manage-data{
    width:100%;
    height:80px;
    background-color: #ff0000;
    color:white;
    font-size:30px;
    line-height:80px;
  }
  #changedata1{
    width:50px;
    height:50px;
    margin-left:10px;
    margin-right:35%;
  }
  #manage-information{
    width:100%;
    height:100%;
    display:flex;
    padding:0 20px 0;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  #manage-information li{
    width:100%;
    height:80px;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #aeaaaa;
    align-items:center;
  }
  #manage-information li p{
    width:50%;
    height:80px;
    line-height:80px;
    padding-left:10px;
  }
  #manage-information li a{
    color:#666;
  }
  #manage-information li a span{
   font-size:30px;
    color:#666;
  }
</style>
