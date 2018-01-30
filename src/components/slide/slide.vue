<template>
  <div id="slide">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 幻灯内容 -->
      <swiper-slide><div class="fd_slide fd_slide1"><a href="#"><img src="http://img2.imgtn.bdimg.com/it/u=3421973124,535983986&fm=27&gp=0.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide2"><a href="#"><img src="http://img0.imgtn.bdimg.com/it/u=2707151562,1445959362&fm=27&gp=0.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide3"><a href="#"><img src="http://img3.imgtn.bdimg.com/it/u=3315061613,1743294998&fm=27&gp=0.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide4"><a href="#"><img src="http://img5.imgtn.bdimg.com/it/u=2243270321,437098086&fm=27&gp=0.jpg"></a></div></swiper-slide>
      <swiper-slide><div class="fd_slide fd_slide5"><a href="#"><img src="http://img5.imgtn.bdimg.com/it/u=1042101718,652474015&fm=27&gp=0.jpg"></a></div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 2,
        speed: 1000,
        autoplay: {
          delay: 2000
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #slide {
    margin-top: 100px;
    width: 100%;
    height: 300px;
    .fd_slide {
    width: 100%;
    height: 300px;
    background: #eaeaea;
      img{
        width:100%;
        height:300px;
      }
    }
  }
</style>
