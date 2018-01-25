<template>
<div id="waterfall1">
  <div class="waterfall1_box" v-for="lit in lits" v-bind:key="lit.id">
    <div class="box_img">
      <img :src="lit.src"/>
      <p>{{lit.small}}</p>
      <p><span>{{lit.price}}</span><span>{{lit.num}}人付款</span></p>
    </div>
    <div></div>
  </div>
  <!--<div class="right" v-for="lit in lits" v-bind:key="lit.id">-->
    <!--<img :src="lit.src"/>-->
    <!--<p>{{lit.small}}</p>-->
    <!--<p><span>{{lit.price}}</span><span>{{lit.num}}人付款</span></p>-->
  <!--</div>-->
</div>
</template>
<script>
export default{
  name: 'waterfall1',
  data () {
    return {
      lits: [
        {
          id: 'fall1',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall2',
          src: 'data:image/jpeg;base64,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',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall3',
          src: 'http://www.quanjing.com/image/2017index/lx3.png',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall4',
          src: 'http://img02.tooopen.com/images/20151229/tooopen_sy_153049663495.jpg',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall5',
          src: 'http://www.quanjing.com/image/2017index/lx3.png',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall6',
          src: 'http://pic.qiantucdn.com/58pic/11/62/42/97G58PIC7hc.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall7',
          src: 'http://ozxb0em6i.bkt.clouddn.com/315982_205.jpg',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall8',
          src: 'http://www.quanjing.com/image/2017index/lx3.png',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall9',
          src: 'http://pic.qiantucdn.com/58pic/11/62/42/97G58PIC7hc.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        },
        {
          id: 'fall10',
          src: 'http://ozxb0em6i.bkt.clouddn.com/315982_205.jpg',
          small: '迪奥17新款forever 粉底气 垫bb底妆 拷贝 8',
          price: '￥88',
          num: '100'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #waterfall1{
    z-index: -1;
    /*position: relative;*/
    .waterfall1_box{
      padding: 5px;
      /*position: relative;*/
      float: left;
      .box_img{
        padding: 5px;
        border: 1px #cccccc solid;
        box-shadow: 0 0 5px #ccc;
        border-radius: 5px;
        img{
          width: 296px;
          height: auto;
        }
        p{
          width: 290px;
          padding: 5px;
          span{
            display: inline-block;
            padding: 5px;
          }
          span:nth-last-child(1){
            color: #ff0000;
          }
        }
      }
    }
  }
</style>
