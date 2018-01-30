<template>
    <ul id="brand">
      <li v-for="(item,index) in items" :class="{'active':ind === index}" v-bind:key="item.id"  @click="changeBgc(index)">
        {{item.brand}}
      </li>
    </ul>
</template>

<script>
export default{
  name: 'brand',
  data () {
    return {
      items: [
        {id: 'brand_1', brand: '早安日记'},
        {id: 'brand_2', brand: '韩都衣舍'},
        {id: 'brand_3', brand: '初语'},
        {id: 'brand_4', brand: '索尔利'},
        {id: 'brand_5', brand: '伊芙丽'},
        {id: 'brand_6', brand: '南极人'},
        {id: 'brand_7', brand: '早安日记'},
        {id: 'brand_8', brand: '韩都衣舍'},
        {id: 'brand_9', brand: '初语'},
        {id: 'brand_10', brand: '索尔利'},
        {id: 'brand_11', brand: '南极人'},
        {id: 'brand_12', brand: '早安日记'},
        {id: 'brand_13', brand: '韩都衣舍'},
        {id: 'brand_14', brand: '初语'},
        {id: 'brand_15', brand: '索尔利'},
        {id: 'brand_16', brand: '初语'},
        {id: 'brand_17', brand: '索尔利'},
        {id: 'brand_18', brand: '南极人'},
        {id: 'brand_19', brand: '早安日记'},
        {id: 'brand_20', brand: '韩都衣舍'},
        {id: 'brand_21', brand: '初语'},
        {id: 'brand_22', brand: '索尔利'}
      ],
      ind: ''
    }
  },
  methods: {
    changeBgc: function (index) {
      this.ind = index
    },
    price: function () {
      this.$http({
        method: 'GET',
        url: ' https://easy-mock.com/mock/5a6b0d092007214d6db2c394/pinpai',
        data: {'name': 'brand'}
      }).then(function (response) {
        this.items = response.data
      }, function () {
        console.log('请求失败')
      })
    }
  }
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
    }
    .active{
      color: #ff0000;
    }
  }
</style>
