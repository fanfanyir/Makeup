<template>
  <div id="shoppingtop">
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
  #shoppingtop{
    width:100%;
    height:100px;
    background-color:#ff0000;
    span{
      line-height:100px;
      color:#fff;
    }
    a{
      color:#fff;
    }
    #sp1{
      font-size:30px;
      margin-left:300px;
    }
    #sp2{
      font-size:25px;
      margin-left:200px;
    }
  }
</style>
