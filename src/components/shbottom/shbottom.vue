<template>
  <div id="shbottom">
    <div id="left">
      <input type="checkbox" name="check">
      <span>全选</span>
    </div>
    <div id="center">
      <span id="total">合计：<span>￥0</span></span>
    </div>
    <div id="right">
      <span id="account">结算：(<span>0</span>)</span>
    </div>
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
#shbottom{
  z-index:5;
  background:#fff;
  width:100%;
  height:100px;
  border-top:10px solid #f6f6f6;
  position:fixed;
  left:0;
  bottom:110px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  #center{
    position:absolute;
    top:20px;
    right:170px;
    #total span{
      color:#ff0000;
    }
  }
  #right{
    width:150px;
    height:100%;
    background:#ff0000;
    line-height:100px;
    text-align:center;
    span{
      color:#fff;
    }
  }
}
</style>
