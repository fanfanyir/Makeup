<template>
  <div id="shtop">
    <span id="sp1">购物车</span>
    <span id="sp2"><a href="#">编辑</a></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  #shtop{
    width:100%;
    height:100px;
    background-color:#ff0000;
    text-align: center;
    position:relative;
    span{
      line-height:100px;
      color:#fff;
    }
    #sp1{
      font-size:30px;
    }
    #sp2{
      position:absolute;
      font-size:25px;
      right:50px;
      a{
        color:#fff;
      }
    }
  }
</style>
