<template>
  <div id="classify1">
    <div id="classify1_1" v-for="item in itemsright1" v-bind:key="item.kind_id">
      <a href="#"><img :src="item.min_photo"/><p>{{item.kind_min}}</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify1',
  data () {
    return {
      itemsright1: []
    }
  },
  methods: {
    price: function () {
      this.$http({
        method: 'GET',
        url: 'http://zxhbzu.free.ngrok.cc/kind.htm?kind_max=底妆',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (response) {
        this.itemsright1 = JSON.parse(JSON.parse(response.data))
      }, function () {
        console.log('请求失败')
      })
    }
  },
  computed: {
  },
  mounted: function () {
    this.price()
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
