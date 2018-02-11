<template>
  <div id="classify1">
    <div id="classify1_1" v-for="item in itemsright1" v-bind:key="item.kind_id" @click="changeBgc(item.kind_id)">
      <a href="#"><img :src="item.min_photo"/><p>{{item.kind_min}}</p></a>
    </div>
  </div>
</template>

<script>
import bus from '../../../../../assets/Bus'
export default {
  name: 'classify1',
  data () {
    return {
      itemsright1: [],
      kindmaxx: ''
    }
  },
  methods: {
    changeBgc: function (kindid) {
      bus.$emit('classify', kindid)
      console.log('分类小类组件id要来了' + kindid)
    },
    price: function () {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://nrpi25.natappfree.cc/kind.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('kind_max=' + that.kindmaxx)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText)
          // console.log(typeof JSON.parse(JSON.parse(xhr.responseText)))
          that.itemsright1 = JSON.parse(JSON.parse(xhr.responseText))
          console.log(that.itemsright1)
        } else {
          console.log('error')
        }
      }
    }
  },
  mounted: function () {
    this.price()
    let self = this
    bus.$on('kindmax', (kindmax) => {
      console.log('大类id到小类组件通讯成功啦')
      self.kindmaxx = kindmax
      this.price()
    })
  }
}
</script>
<style lang="scss" scoped>
#classify1{
  background: #ffffff;
  width: 77%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  #classify1_1{
    img{
      width: 78px;
      height: 78px;
      margin-bottom: 5px;
    }
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
    width: 25%;
    height: 50%;
  }
}
</style>
