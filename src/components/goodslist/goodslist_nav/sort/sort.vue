<template>
  <!--<div id="brand">-->
  <ul id="sort">
    <li v-for='(item,index) in items' :class="{'active':ind === index}" @click="changeBgc(index, item.sortlist)" v-bind:key="item.sortlist">{{item.sortlist}}</li>
  </ul>
  <!--</div>-->
</template>

<script>
import bus from '../../../../assets/Bus'
export default{
  name: 'sort',
  data () {
    return {
      items: [
        {sortlist: '价格升序'},
        {sortlist: '价格降序'},
        {sortlist: '销量降序'},
        {sortlist: '最近上市'}
      ],
      ind: ''
    }
  },
  methods: {
    changeBgc: function (index, sortt) {
      this.ind = index
      bus.$emit('sort', sortt)
    //      var aLi = document.getElementsByTagName('li')
    //      var attr = aLi[index].innerHTML
    //      this.$http({
    //        method: 'GET',
    //        url: 'http://zxhbzu.free.ngrok.cc/brand.htm',
    //        dataType: 'json',
    //        data: {'brand': attr},
    //        async: false,
    //        xhrFields: {withCredentials: true}
    //      }).then(function (response) {
    //        this.items = JSON.parse(JSON.parse(response.data))
    //      }, function () {
    //        console.log('请求失败')
    //      })
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
    .active{
      color: #ff0000;
    }
  }
</style>
