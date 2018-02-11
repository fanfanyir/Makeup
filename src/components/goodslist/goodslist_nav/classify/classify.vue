<template>
  <div id="classify">
    <ul>
      <!--<li id="classify1" class="tab" @click="toggleTab('classify1', 0)"><a>面部护肤</a><span>＞</span></li>-->
      <!--<li id="classify2" class="tab" @click="toggleTab('classify2', 1)"><a>彩妆</a><span>＞</span></li>-->
      <li v-for='(item, index) in itemleft' :class="{'active':ind === index}"  @click.prevent="toggleTab(item.kind_max,index)" v-bind:key="item.kind_max" class="tab">
        <a>{{item.kind_max}}</a><span>＞</span>
      </li>
    </ul>
    <classify1></classify1>
    <!--<classify1 :is="classTab"></classify1>-->
  </div>
</template>

<script>
import bus from '../../../../assets/Bus'
import classify1 from './classify1/classify1.vue'
// import classify2 from './classify2/classify2.vue'
// import classify3 from './classify3/classify3.vue'
export default{
  name: 'classify',
  data () {
    return {
      ind: '',
      itemleft: [
        {
          kind_max: '底妆'
        },
        {
          kind_max: '眼妆'
        },
        {
          kind_max: '香水'
        },
        {
          kind_max: '护肤'
        },
        {
          kind_max: '唇妆'
        },
        {
          kind_max: '美甲'
        },
        {
          kind_max: '美容工具'
        },
        {
          kind_max: '其他'
        }
      ]
    }
  },
  components: {
    classify1
    // classify2,
    // classify3
  },
  methods: {
    toggleTab: function (kindmax, index) {
      this.ind = index
      bus.$emit('kindmax', kindmax)
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
