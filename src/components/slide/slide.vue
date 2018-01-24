<template>
  <div id="banner">
    <slide :slides="slides" :inv="inv" :style="styleObject"></slide>
  </div>
</template>

<script>
import slide from '@/components/banner/banner.vue'
export default {
  components: {slide},
  data () {
    return {
      slides: [
        {
          src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  #banner{
    margin-top:80px;
    #image{
      width:100%;
      height:300px;
      position:relative;
      overflow:hidden;
      #image li{
        float:left;
        width:100%;
        height:300px;
      }
    }
  }
</style>
