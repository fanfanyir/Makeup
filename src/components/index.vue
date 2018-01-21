<template>
  <div id="index">
    <top></top>
    <banner></banner>
  </div>
</template>

<script type="text/javascript">
import top from './top/top.vue'
import banner from './banner/banner.vue'
export default {
  data () {
  },
  components: { top, banner }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
  }
</style>
