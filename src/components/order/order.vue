<template>
  <div id="navv">
    <ul id="nav1">
      <li class="tab" @click="toggleTab('brand', 'tab1')"><a>品牌</a></li>
      <li class="tab" @click="toggleTab('sort', 'tab2')"><a>排序方式▼</a></li>
      <li class="tab" @click="toggleTab('classify', 'tab3')"><a>全部分类</a></li>
      <li><img id="view" src="../../assets/goodslist/Viewlist.png"/></li>
      <li class="right_shai"><span id="lineshai">筛选</span><img id="seclect" src="../../assets/goodslist/筛选.png"/></li>
    </ul>
    <brand :is="currentTab" keep-alive class="tab4" style="display: none"></brand>
  </div>
</template>

<script>
import brand from './brand/brand'
  import classify from './classify/classify'
  import sort from './sort/sort'
export default{
  name: 'navv',
  data () {
    return {
      currentTab: ''
    }
  },
  components: {
      brand,
      classify,
      sort
    },
  methods: {
    toggleTab (tab, id) {
      this.currentTab = tab
      this.tab4 = id
    }
  }
}
//      $(this).toggle(2000)
</script>
<style lang="scss" scoped>
  #navv{
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
