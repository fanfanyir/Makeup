<template>
  <div id="classify">
    <ul>
      <li id="classify1" class="tab" @click="toggleTab('classify1')"><a>面部护肤</a><span>＞</span></li>
      <li id="classify2" class="tab" @click="toggleTab('classify2')"><a>彩妆</a><span>＞</span></li>
      <li v-for='item in itemleft' v-bind:key="item.big"><span>{{item.big}}</span><span>＞</span></li>
    </ul>
    <classify1 :is="classTab"></classify1>
    <div></div>
  </div>
</template>

<script>
import classify1 from './classify1/classify1.vue'
import classify2 from './classify2/classify2.vue'
export default{
  name: 'classify',
  data () {
    return {
      classTab: 'classify1',
      itemleft: [
        {big: '香水'},
        {big: '身体护理'},
        {big: '男士护理'},
        {big: '套装礼盒'},
        {big: '美容工具'},
        {big: '其他'}
      ]
    }
  },
  components: {
    classify1,
    classify2
  },
  methods: {
    toggleTab: function (tab) {
      this.classTab = tab
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../../../static/common.css';
  #classify{
    width: 100%;
    position: relative;
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
  }
</style>
