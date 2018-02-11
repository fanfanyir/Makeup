<template>
    <div id="add_address">
      <header>
        <img src="../../assets/chooseaddress/arrow.png" @click="jump()">
        <p>
          {{title}}
        </p>
        <p id="save_address" @click="save()">
          {{Righttitle}}
        </p>
      </header>
      <footer>
        <form>
          <label>收货人</label>
          <input type="text"/>
          <div class="line"></div>
          <label>联系电话</label>
          <input type="text"/>
          <div class="line"></div>
          <label>所在地区</label>
          <input type="text"/>
          <div class="line"></div>
          <!--<label>街道</label>-->
          <!--<input type="text"/>-->
          <!--<div class="line"></div>-->
          <input type="text" placeholder="请填写详细地址"/>
        </form>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'add_address',
  data () {
    return {
      title: '新增收货地址',
      Righttitle: '保存'
    }
  },
  methods: {
    save: function () {
      let aInput = document.getElementsByTagName('input')
      let re = /\d{11}/
      if (aInput[0].value.length < 2 && aInput[0].value.length - 0) {
        alert('收货人姓名请不要少于两个字')
      }
      if (aInput[0].value.length === 0 || (aInput[0].value.length === 0 && aInput[1].value.length === 0 && aInput[2].value.length === 0 && aInput[3].value.length === 0)) {
        alert('收货人姓名不能为空')
      }
      if (aInput[1].value.length === 0 && aInput[0].value.length - 0 && aInput[0].value.length > 1) {
        alert('请填写联系电话')
      }
      if (aInput[2].value.length === 0 && aInput[0].value.length - 0 && aInput[1].value.length - 0 && re.test(aInput[1].value)) {
        alert('请填写所在地区')
      }
      if (aInput[3].value.length === 0 && aInput[0].value.length - 0 && aInput[1].value.length - 0 && aInput[2].value.length - 0 && re.test(aInput[1].value)) {
        alert('请填写详细地址')
      }
      if (!(re.test(aInput[1].value)) && aInput[1].value.length - 0 && aInput[0].value.length - 0 && aInput[0].value.length > 1) {
        alert('请填写正确的联系电话')
      }
      if (aInput[0].value.length > 2 && re.test(aInput[1].value) && aInput[2].value.length && aInput[3].value.length) {
        console.log(55)
        let add = aInput[2].value + aInput[3].value
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success给倪晨阳的')
          } else {
            console.log('error给倪晨阳的')
          }
        }
        xhr.open('post', 'http://nrpi25.natappfree.cc/jiadizhi.htm', true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        // xhr.send('user_id=' + 2)
        xhr.send('address_name=' + aInput[0].value + '&' + 'address_tel=' + aInput[1].value + '&' + 'address_add=' + add + '&' + 'user_id=' + 30)
      }
    },
    jump: function () {
      this.$router.push({path: '/Choose_Address?' + 'user_id=' + this.$route.query.user_id})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/Add_Address";
</style>
