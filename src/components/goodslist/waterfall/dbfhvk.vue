<!--<template>-->
  <!--<div id="all_user">-->
    <!--<div class="search_box">-->
      <!--<input type="text" placeholder="请输入编号或名称"><button><i class="tt tt-quanburen"></i>搜索</button>-->
    <!--</div>-->

    <!--<vueWaterfallEasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">-->
      <!--<template slot-scope="props">-->
        <!--<div class="player_info">-->
          <!--<div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>-->
          <!--<div class="ticket">-->
            <!--<mt-button @click="upLoadTicket(props.value.id)" size="small"><i class="tt tt-quanburen"></i>投票</mt-button>-->
          <!--</div>-->
          <!--<p class="num">{{props.index+1}}票</p>-->
        <!--</div>-->
      <!--</template>-->
    <!--</vueWaterfallEasy>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import vueWaterfallEasy from 'vue-waterfall-easy'-->
<!--export default {-->
  <!--name: 'app',-->
  <!--data () {-->
    <!--return {-->
      <!--imgsArr: [],-->
      <!--fetchImgsArr: []-->
    <!--}-->
  <!--},-->
  <!--components: {-->
    <!--vueWaterfallEasy-->
  <!--},-->
  <!--methods: {-->
    <!--// 假数据-->
    <!--initImgsArr (n, m) {-->
      <!--var arr = []-->
      <!--for (var i = n; i < m; i++) {-->
        <!--arr.push({ id: i, src: `./src/assets/images_test/${i + 1}.jpg`, link: 'https://www.baidu.com', info: '一些图片描述文字' })-->
      <!--}-->
      <!--return arr-->
    <!--},-->

    <!--fetchImgsData () {-->
      <!--this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)-->
    <!--}-->
  <!--},-->
  <!--created () {-->
    <!--this.imgsArr = this.initImgsArr(0, 5)-->
    <!--this.fetchImgsArr = this.initImgsArr(5, 10) // 模拟每次请求的新的图片的数据数据-->
  <!--}-->

<!--}-->

<!--</script>-->
