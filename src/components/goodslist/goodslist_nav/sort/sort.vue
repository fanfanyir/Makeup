<template>
  <!--<div id="brand">-->
  <ul id="sort">
    <li v-for='item in items' v-bind:key="item.sortlist">{{item.sortlist}}</li>
  </ul>
  <!--</div>-->
</template>

<script>
export default{
  name: 'sort',
  data () {
    return {
      items: [
        {sortlist: '价格升序'},
        {sortlist: '价格降序'},
        {sortlist: '销量降序'},
        {sortlist: '最近上市'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  #sort{
    /*position: relative;*/
    height: 243px;
    width: 100%;
    background: #ffffff;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    font-size: 25px;
    justify-content: space-around;
    /*padding: 15px;*/
    li{
      width: 90% ;
      color: #000000;
      padding-left: 10px;
      border-bottom: 1px #cccccc solid;
      height:60px;
      line-height: 60px;
    }
  }
</style>
