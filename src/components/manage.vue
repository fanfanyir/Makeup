<template>
  <div id="manage">
    <p id="manage-data">账户管理</p>
    <ul id="manage-information">
      <li>
        <p>用户名</p>
        <p>{{msg1}}</p>
      </li>
      <li>
        <p>修改密码</p>
        <span>></span>
      </li>
      <li>
        <p>修改手机号码</p>
        <p>{{msg3}}</p>
      </li>
      <li>
        <p>修改默认收货地址</p>
        <p>{{msg4}}</p>
      </li>
      <li >
        <p  id="person-special">个性签名</p>
        <p id="person-space">{{msg5}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'person',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
<style scoped>
</style>
