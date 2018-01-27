<template>
  <div id="manage">
    <p id="manage-data">账户管理</p>
    <ul id="manage-information">
      <li>
        <p>用户名</p>
        <a>{{msg1}}</a>
      </li>
      <li>
        <p>修改密码</p>
        <a><span> > </span></a>
      </li>
      <li>
        <p>修改手机号码</p>
        <a>{{msg2}} <span> > </span></a>
      </li>
      <li>
        <p>修改默认收货地址</p>
        <a>{{msg3}} <span> > </span></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'manage',
  data () {
    return {
      msg1: '小小小小的',
      msg2: '132*****953',
      msg3: '陕西省西安市长安区'
    }
  },
  components: {
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
    text-align: center;
    color:white;
    font-size:30px;
    line-height:80px;
  }
  #manage-information{
    width:100%;
    height:100%;
    padding:10px 30px 0;
    display:flex;
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
