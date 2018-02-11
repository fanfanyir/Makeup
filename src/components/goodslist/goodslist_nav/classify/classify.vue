<template>
  <div id="classify">
    <ul>
      <!--<li id="classify1" class="tab" @click="toggleTab('classify1', 0)"><a>面部护肤</a><span>＞</span></li>-->
      <!--<li id="classify2" class="tab" @click="toggleTab('classify2', 1)"><a>彩妆</a><span>＞</span></li>-->
      <li v-for='(item, index) in itemleft' :class="{'active':ind === index}" :id="item.tabname" @click="toggleTab(item.tabname,index)" v-bind:key="item.tabname" class="tab">
        <a>{{item.kind_max}}</a><span>＞</span>
      </li>
    </ul>
    <classify1 :is="classTab"></classify1>
  </div>
</template>

<script>
import classify1 from './classify1/classify1.vue'
import classify2 from './classify2/classify2.vue'
import classify3 from './classify3/classify3.vue'
export default{
  name: 'classify',
  data () {
    return {
      ind: '',
      classTab: 'classify1',
      itemleft: [
        {
          tabname: 'classify1',
          kind_max: '底妆'
        },
        {
          tabname: 'classify2',
          kind_max: '眼妆'
        },
        {
          tabname: 'classify3',
          kind_max: '香水'
        },
        {
          tabname: 'classify4',
          kind_max: '护肤'
        },
        {
          tabname: 'classify5',
          kind_max: '唇妆'
        },
        {
          tabname: 'classify6',
          kind_max: '美甲'
        },
        {
          tabname: 'classify7',
          kind_max: '美容工具'
        },
        {
          tabname: 'classify8',
          kind_max: '其他'
        }
      ]
    }
  },
  components: {
    classify1,
    classify2,
    classify3
  },
  methods: {
    toggleTab: function (tab, index) {
      this.classTab = tab
      this.ind = index
    }
  }
}
</script>
<style lang="scss" scoped>
  #classify{
    width: 100%;
    /*position: relative;*/
    z-index: 5;
    height: 320px;
    background: #ffffff;
    display: flex;
    font-size: 25px;
    justify-content: space-between;
    border-bottom: 1px #aeaaaa solid;
    /*padding: 15px;*/
    ul{
      width: 23% ;
      color: #000000;
      padding-left: 15px;
      border-right: 1px #aeaaaa solid;
      li{
        height:40px;
        line-height: 40px;
        display: flex;
        border-bottom: 1px #aeaaaa solid;
        justify-content: space-between;
      }
      li:nth-last-child(1){
        border-bottom:none;
      }
    }
    .active a{
      color: #ff0000;
    }
  }
</style>
