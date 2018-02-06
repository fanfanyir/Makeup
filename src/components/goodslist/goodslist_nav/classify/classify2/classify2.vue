<template>
  <div id="classify2">
    <div id="classify1_2" v-for="item in itemsright1" v-bind:key="item.kind_id">
      <a href="#"><img :src="item.min_photo"/><p>{{item.kind_min}}</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify2',
  data () {
    return {
      itemsright2: []
    }
  },
  mounted: function () {
    this.price()
  },
  methods: {
    price: function () {
      alert(345)
      this.$http({
        method: 'GET',
        url: 'http://zxhbzu.free.ngrok.cc/kind.htm?kind_max=眼妆',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (response) {
        alert(345)
        console.log(response.data)
        this.itemsright2 = JSON.parse(JSON.parse(response.data))
      }, function () {
        console.log('请求失败')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  #classify2{
    background: #ffffff;
    width: 77%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    #classify1_2{
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
