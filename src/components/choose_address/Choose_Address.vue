<template>
    <div id="choose_address">
      <header>
        <img src="../../assets/chooseaddress/arrow.png">
        <p>
          {{title}}
        </p>
        <p>
          {{Righttitle}}
        </p>
      </header>
      <footer>
        <div class="address_infor" v-for="item in address" v-bind:key='item in address' >
          <p class="name">{{item.name}}</p>
          <p class="telephone">{{item.telephone}}</p>
          <p class="address" @click="choose(item.index)">{{item.address}}</p>
          <div class="line1"></div>
          <label><input type="checkbox"  @click="change(item.index)" /><span>设为默认</span></label>
          <div class="line2"></div>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'choose_address',
  data () {
    return {
      title: '选择收货地址',
      Righttitle: '新增',
      // items: [
      //   {id: 0}, {id: 1}, {id: 2}
      // ],
      address: [
        {index: 0, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区西安邮电大学西区4号楼陕西省西安市长安区西安邮电大学西区4号楼'},
        {index: 1, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区西安邮电大学'},
        {index: 2, name: '张梦莹', telephone: '17691045044', address: '陕西省西安市长安区智慧城25号楼'}
      ]
    }
  },
  methods: {
    change: function (m) {
      // alert(this.address.length)
      // let arr = []
      // for (let m = 0; m < this.address.length; m++) {
      //   arr.push(m)
      // }
      // console.log(arr)
      // alert(2)
      let aInput = document.getElementsByTagName('input')
      for (let j = 0; j < aInput.length; j++) {
        aInput[j].index = j
      }
      let aSpan = document.getElementsByTagName('span')
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
    },
    choose: function (i) {
      let aAddress = document.getElementsByClassName('address')
      for (let j = 0; j < aAddress.length; j++) {
        aAddress[j].style.backgroundColor = 'white'
      }
      aAddress[i].style.backgroundColor = '#e7e7e7'
    }
  }
}
</script>

<style  lang="scss" scoped>
  @import "../../../static/Choose_Address.scss";
</style>
