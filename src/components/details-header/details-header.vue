<template>
    <div id="detailsheader">
        <!--<img src="../../assets/jumpleft.png" id="jumpup" @click="jumpup"/>-->
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="src1 in image" v-bind:key="src1 in image">
            <img v-bind:src="src1"/>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import {swiper, SwiperSlide} from 'vue-awesome-swiper'
export default {
  components: {SwiperSlide, swiper},
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        direction: 'horizontal',
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      }
    }
  },
  props: {
    image: Array
  },
  mounted () {
    this.load()
    console.log(this.image)
  },
  methods: {
    load: function () {
      // this.$http({
      //   url: 'http://zxhbzu.free.ngrok.cc/detail.htm?user_id=5',
      //   method: 'get',
      //   xhrFields: {withCredentials: true}
      // }.then(function (res) {
      //   console.log(res.bodyText)
      //   console.log('你你你成功了！')
      // }), function () {
      //   console.log('你你你失败了！')
      // })
      // console.log(this.childMes)
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide{
    width: 100%;
    height: 750px;
    background-color: red;
    img{
      width: 100%;
      height: 750px;
    }
  }
  .swiper-pagination{
    width: 100%;
  }
</style>
