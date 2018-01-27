<template>
  <div id="ordernav">
    <div  id="ordernav1">
      <ul id="nav1">
        <li class="tab" @click="toggleTab('main1')"><a>全部</a></li>
        <li class="tab" @click="toggleTab('main2')"><a>待付款</a></li>
        <li class="tab" @click="toggleTab('main3')"><a>待收货</a></li>
        <li class="tab" @click="toggleTab('main4')"><a>待评价</a></li>
        <li class="tab" @click="toggleTab('main5')"><a>已完成</a></li>
      </ul>
    </div>
    <main1 :is="currentTab" keep-alive></main1>
  </div>
</template>

<script>
import main1 from '../order_all/order_all'
import main2 from '../order_pay/order_pay'
import main3 from '../order_get/order_get'
import main4 from '../order_msg/order_msg'
import main5 from '../order_end/order_end'
export default{
  name: 'ordernav',
  data () {
    return {
      currentTab: 'main2'
    }
  },
  components: {
    main1,
    main2,
    main3,
    main4,
    main5
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    }
  }
}
//      $(this).toggle(2000)
</script>
<style lang="scss" scoped>
  #ordernav {
    #ordernav1 {
      position: relative;
      margin-top: 150px;
      width: 100%;
      z-index: 5;
      background: #ffffff;
      #nav1 {
        top: 80px;
        width: 100%;
        background: #ffffff;
        position: fixed;
        border-bottom: 1px #cccccc solid;
        /*height: 80px;*/
        display: flex;
        font-size: 25px;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        li:nth-last-child(1) {
          width: 40%;
        }
      }
    }
  }
</style>
