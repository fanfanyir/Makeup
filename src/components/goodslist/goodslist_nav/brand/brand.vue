<template>
    <ul id="brand">
      <li v-for="(item, index) in items" :class="{'active':ind === index}" v-bind:key="item.brand_id"  @click="changeBgc(index, item.brand_name)">
        {{item.brand_name}}
      </li>
    </ul>
</template>

<script>
import bus from '../../../../assets/Bus'
export default{
  name: 'brand',
  data () {
    return {
      items: [],
      ind: ''
    }
  },
  methods: {
    changeBgc: function (index, brandname) {
      this.ind = index
      console.log(brandname)
      bus.$emit('brand', brandname)
    },
    price: function () {
      this.$http({
        method: 'GET',
        url: 'http://nrpi25.natappfree.cc/brand.htm',
        //        url: 'https://easy-mock.com/mock/5a6b0d092007214d6db2c394/pinpai',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (response) {
        console.log(response.data)
        // console.log(typeof response.data)
        // this.items = response.data.data
        this.items = response.data
      }, function () {
        console.log('请求失败')
      })
    }
  },
  mounted: function () {
    this.price()
  }
  //  destroyed: function () {
  //    bus.$off('brand')
  //  }
}
</script>
<style lang="scss" scoped>
  #brand{
    background: #ffffff;
    /*position: relative;*/
    z-index: 5;
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    height: 233px;
    padding-top: 10px;
    /*overflow: hidden;*/
    overflow-y: auto;
    /*justify-content: space-around;*/
    flex-direction: row;
    /*padding: 15px;*/
    li{
      width: 18% ;
      height:50px;
      margin: 5px;
      text-align: center;
      line-height: 50px;
      background: #e6e4e4;
      overflow: hidden;
    }
    .active{
      color: #ff0000;
    }
  }
</style>
