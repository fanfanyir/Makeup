<template>
    <div id="choose_address">
      <header>
        <img src="../../assets/chooseaddress/arrow.png" @click="returnjump()">
        <p>
          {{title}}
        </p>
        <p @click="jump()">
          {{Righttitle}}
        </p>
      </header>
      <footer>
        <div class="address_infor" v-for="(item,index) in address" v-bind:key='item in address' @click="sure_address(index)">
          <p class="name">{{item.address_name}}</p>
          <p class="telephone">{{item.address_tel}}</p>
          <p class="address" @click="choose(index)" :address_add="address[0].address_add">{{item.address_add}}</p>
          <div class="line1"></div>
          <label><input type="checkbox"  @click="change(index)" :checked="index === 0"/><span :class="'input'+index ">设为默认</span></label>
          <div class="line2"></div>
        </div>
      </footer>
    </div>
</template>

<script>
import Bus from '../../assets/Bus'
export default {
  name: 'choose_address',
  data () {
    return {
      title: '选择收货地址',
      Righttitle: '新增',
      address: [
        {address_name: '张某某', address_tel: '13468779955', address_add: '陕西省xxxxxx'},
        {address_name: '张梦莹', address_tel: '17691045044', address_add: '陕西省西安市长安区西安邮电大学西区4号楼陕西省西安市长安区西安邮电大学西区4号楼'},
        {address_name: '张梦莹', address_tel: '17691045044', address_add: '陕西省西安市长安区西安邮电大学'},
        {address_name: '张梦莹', address_tel: '17691045044', address_add: '陕西省西安市长安区智慧城25号楼'}
      ]
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    sure_address: function (index) {
      // console.log(index)
      // this.$http({
      //   method: 'get',
      //   url: 'http://192.168.0.200:8080/#/Choose_Address ',
      //   xhrFields: {withCredentials: true}
      // }).then(function (res) {
      //   console.log(res)
      //   console.log('给倪晨阳发送成功')
      // }, function () {
      //   console.log('给倪晨阳发送失败')
      // })
    },
    load: function () {
      let aSpan = document.getElementsByTagName('span')
      aSpan[0].innerHTML = '默认地址'
      aSpan[0].style.color = '#f19149'
      // console.log(22)
      // this.$http({
      //   method: 'get',
      //   url: 'http://c5ie4u.natappfree.cc/dizhi.htm?user_id=2',
      //   xhrFields: {withCredentials: true}
      //   // contextType: 'application/json',
      //   // headers: {'X-Requested-With': 'XMLHttpRequest'},
      //   // dataType: JSON
      // }).then(function (res) {
      //   this.address = JSON.parse(res.bodyText)
      //   console.log('请求成功倪晨阳')
      // }, function () {
      //   console.log('请求失败倪晨阳')
      // })
    },
    change: function (m) {
      let aInput = document.getElementsByTagName('input')
      let aSpan = document.getElementsByTagName('span')
      // console.log(aSpan[0].style.color)
      if (aInput[0].checked === false) {
        aSpan[0].innerHTML = '默认地址'
        aSpan[0].style.color = '#f19149'
      }
      for (let i = 0; i < aInput.length; i++) {
        aInput[i].checked = false
        aSpan[i].innerHTML = '设为默认'
        aSpan[i].style.color = 'black'
      }
      aInput[m].checked = true
      if (aInput[m].checked === true) {
        aSpan[m].innerHTML = '默认地址'
        aSpan[m].style.color = '#f19149'
      }
      console.log(m)
      this.$http({
        method: 'get',
        url: 'http://9tjfv6.natappfree.cc/gaimorendizhi.htm?user_id=2&address_id=2',
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res, m)
        console.log('给倪晨阳发送成功')
      }, function () {
        console.log('给倪晨阳发送失败')
      })
    },
    choose: function (i) {
      let aAddress = document.getElementsByClassName('address')
      for (let j = 0; j < aAddress.length; j++) {
        aAddress[j].style.backgroundColor = 'white'
      }
      aAddress[i].style.backgroundColor = '#e7e7e7'
      console.log('click')
      Bus.$emit('inceptMessage', i)
    },
    jump: function () {
      // let id = this.$route.params.id
      this.$router.push({path: '/Add_Address'})
    },
    returnjump: function () {
      this.$router.push({path: '/pay'})
    }
  }
}
</script>

<style  lang="scss" scoped>
  @import "../../../static/Choose_Address.scss";
</style>
