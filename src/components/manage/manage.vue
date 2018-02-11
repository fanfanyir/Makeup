<template>
  <div id="manage">
    <p id="manage-data"><img id="changedata1" src="../../assets/order/左箭头2.png" @click="changeData()">账户管理</p>
    <ul id="manage-information">
      <li>
        <p>用户名</p>
        <a>{{manageData.user_name}}</a>
      </li>
      <li>
        <p >修改密码</p>
        <a><span @click="jumpChangepw()"> > </span></a>
      </li>
      <li>
        <p >修改手机号码</p>
        <a>{{manageData.user_tel}} <span @click="jumpChangenum()"> > </span></a>
      </li>
      <li>
        <p>修改默认收货地址</p>
        <a>{{manageData.address_add}} <span @click="jumpAddress()"> > </span></a>
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
      manageData: []
    }
  },
  methods: {
    changeData: function () {
      this.$router.push({path: '/person?' + 'user_id=' + this.$route.query.user_id})
    },
    jumpChangepw: function () {
      this.$router.push({
        path: '/changepw?' + 'user_id=' + this.$route.query.user_id
      })
    },
    jumpChangenum: function () {
      this.$router.push({
        path: '/changenum?' + 'user_id=' + this.$route.query.user_id
      })
    },
    jumpAddress: function () {
      this.$router.push({
        path: '/Choose_Address?' + 'user_id=' + this.$route.query.user_id
      })
    },
    manage: function () {
      var that = this
      var url1 = this.$route.query.user_id
      $.ajax({
        url: 'http://8w6pvv.natappfree.cc/gerenguanli.htm?user_id=' + url1,
        type: 'get',
        dataType: 'json',
        success: function (res) {
          console.log(res)
          that.manageData = res
          if (!res) {
            alert('')
          }
        }
      })
    }
  },
  mounted: function () {
    this.manage()
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
