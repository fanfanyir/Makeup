<template>
  <div id="slide">
    <!--<swiper :options="swiperOption" ref="mySwiper" id="swiper">-->
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- 幻灯内容 -->
      <swiper-slide v-for="item in items" v-bind:key="item in items">
        <div class="fd_slide fd_slide1">
          <a href="#"><img :src="item.pro_shop.pro_shop_pic.split(';')[Math.floor(Math.random() * 3)]"></a>
        </div>
      </swiper-slide>
      <!--<swiper-slide><div class="fd_slide fd_slide2"><a href="#"><img src="http://ozxb0em6i.bkt.clouddn.com/106211_205.jpg"></a></div></swiper-slide>-->
      <!--<swiper-slide><div class="fd_slide fd_slide3"><a href="#"><img src="http://ozxb0em6i.bkt.clouddn.com/106266_205.jpg"></a></div></swiper-slide>-->
      <!--<swiper-slide><div class="fd_slide fd_slide4"><a href="#"><img src="http://ozxb0em6i.bkt.clouddn.com/106440_205.jpg"></a></div></swiper-slide>-->
      <!--<swiper-slide><div class="fd_slide fd_slide5"><a href="#"><img src="http://ozxb0em6i.bkt.clouddn.com/106208_422.jpg"></a></div></swiper-slide>-->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: [],
      swiperOption: {
        initialSlide: 0,
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 2,
        speed: 1000,
        autoplay: {
          delay: 2000
        },
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    ajax: function () {
      let that = this
      $.ajax({
        method: 'GET',
        url: 'http://nrpi25.natappfree.cc/index_kind_get_slideshow.htm',
        dataType: 'json',
        success: function (data) {
          let str = $.parseJSON(data)
          console.log(str)
          that.items = str
          console.log(that.pro_shop.pro_shop_pic)
        }
      })
    }
  },
  mounted: function () {
    this.ajax()
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
