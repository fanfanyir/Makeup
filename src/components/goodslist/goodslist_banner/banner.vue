<template>
<div id="banner">
    <img id="left" src="../../../assets/goodslist/左箭头-(1).png">
    <div id="top_search">
      <input id="search_btn" type="text" v-model="msg"/>
      <img id="camera" src="../../../assets/goodslist/照相机.png"/>
    </div>
    <input id="more" type="button" value="●●●"/>
</div>
</template>

<script>
export default{
  name: 'banner',
  data () {
    return {msg: '化妆品'}
  }
}
</script>
<style lang="scss" scoped>
  input{
    border: none;
    outline: none;
    background: transparent;
  }
#banner{
  width: 100%;
  height: 80px;
  background: #ff0000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  #left{
    padding-top: 10px;
  }
  #left,#camera{
    width:50px;
    height: 50px;
  }
  #top_search{
    /*flex-grow: 1;*/
    border-bottom: 1px #ffffff solid;
    display: flex;
    /*padding-left:10px;*/
    width: 600px;
    justify-content: space-between;
    align-items: center;
  }
  #search_btn,#more{
    font-size: 25px;
    color: #ffffff;
  }
}
</style>
