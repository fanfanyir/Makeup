<template>
  <div id="top">
    <div id="dimension">
      <a href="#"><img src="../../assets/top/dimension.png"></a>
    </div>
    <div id="search">
      <img src="../../assets/top/search.png">
      <input type="text" placeholder="寻找商品或店家">
    </div>
    <div id="more">
      <a href="#"><img src="../../assets/top/more.png"></a>
    </div>
  </div>
</template>

<script type="text/javascript">
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
  #top {
    z-index: 5;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: #ff0000;
    #dimension img {
      width: 60px;
      height: 60px;
      margin-left: 20px;
    }
    #search {
      height: 60px;
      position: relative;
      flex-grow: 2;
      border-bottom: 1px solid #fff;
      margin-left: 15px;
      img {
        width: 45px;
        height: 45px;
        margin-top: 5px;
        margin-left: 10px;
      }
      input {
        outline: none;
        font-size: 25px;
        color: #fff;
        position: absolute;
        width: 540px;
        height: 35px;
        margin-top: 15px;
        border: none;
        background-color: transparent;
      }
      input::-webkit-input-placeholder {
        font-size: 30px;
        color: #eaeaea;
      }
    }
    #more img {
      width: 60px;
      height: 60px;
    }
  }
</style>
