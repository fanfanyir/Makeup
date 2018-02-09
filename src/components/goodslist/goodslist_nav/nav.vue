<template>
  <div id="ordernav">
    <ul id="nav1">
      <li class="tab" @click="toggleTab('brand',0)"><a>品牌</a></li>
      <li class="tab" @click="toggleTab('sort',1)"><a>排序方式▼</a></li>
      <li class="tab" @click="toggleTab('classify',2)"><a>全部分类</a></li>
      <li><img id="view" src="../../../assets/goodslist/Viewlist.png"/></li>
      <li class="right_shai"><span id="lineshai">筛选</span><img id="seclect" src="../../../assets/goodslist/筛选.png"/></li>
    </ul>
    <brand :is="currentTab" keep-alive v-if="seen" class="boxt"
           v-bind:message="parentMsg"></brand>
    <!--v-on:listenToChildEvent="showMessageFromChild"-->
  </div>
</template>

<script>
import brand from './brand/brand'
import classify from './classify/classify'
import sort from './sort/sort'
export default{
  name: 'ordernav',
  data () {
    return {
      currentTab: '',
      seen: '',
      btn: 'true',
      parentMsg: 'hello,child'
    }
  },
  components: {
    brand,
    classify,
    sort
  },
  methods: {
    toggleTab: function (tab, index) {
      this.currentTab = tab
      let onav1 = document.getElementById('nav1')
      let aA = onav1.getElementsByTagName('a')
      this.seen = !this.seen
      if (this.btn) {
        for (let i = 0; i < aA.length; i++) {
          aA[i].style.color = '#000000'
        }
        aA[index].style.color = '#ff0000'
        this.btn = !this.btn
      } else {
        for (let i = 0; i < aA.length; i++) {
          aA[i].style.color = '#000000'
        }
        this.btn = !this.btn
      }
    }
    //    showMessageFromChild: function (data) {
    //      console.log(data)
    //    }
  }
}
//      $(this).toggle(2000)
</script>
<style lang="scss" scoped>
  #ordernav{
    width: 100%;
    top: 80px;
    position: fixed;
    z-index: 5;
    background: #ffffff;
    #nav1{
      border-bottom: 1px #cccccc solid;
      /*height: 80px;*/
      display: flex;
      font-size: 25px;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
      padding-left: 30px;
      padding-right: 0;
      li a{
        color: #000000;
      }
      #view{
        width:35px;
        height: 35px;
      }
      .right_shai{
        width: 150px;
        text-align: center;
        overflow: hidden;
        border-left: 1px #cccccc solid
      }
      #lineshai{
        padding-left:10px;
      }
      #seclect{
        width:50px;
        height: 50px;
      }
    }
  }
</style>
