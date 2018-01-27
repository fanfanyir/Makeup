<template>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <img src="../../../src/assets/pay/WechatIMG21.jpeg"/>
        </swiper-slide>
        <swiper-slide class="swiper-slide">222</swiper-slide>
        <swiper-slide class="swiper-slide">3333</swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import {swiper, SwiperSlide} from 'vue-awesome-swiper'
// import SwiperSlide from 'vue-awesome-swiper/src/slide'
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
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide{
    width: 100%;
    height: 300px;
    background-color: red;
  }
  .swiper-pagination{
    width: 100%;
  }
</style>
