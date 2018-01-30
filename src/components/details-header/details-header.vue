<template>
    <div id="detailsheader">
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
      },
      image: ['https://t12.baidu.com/it/u=2375941760,3154246640&fm=173&s=A644944ED632058CA085A7B90300C016&w=295&h=295&img.GIF', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517116938648&di=96a1a65d6a3aeb041d36b78544192fb6&imgtype=0&src=http%3A%2F%2Fmvimg10.meitudata.com%2F55a882c9d1ec18281.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2871851980,2831193141&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=623664852,3333123787&fm=27&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-slide{
    width: 100%;
    height: 750px;
    background-color: red;
  }
  .swiper-pagination{
    width: 100%;
  }
</style>
