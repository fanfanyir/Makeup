<template>
<div id="banner">
    <img id="left" src="../../../assets/goodslist/左箭头-(1).png" @click="waitpay()">
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
  },
  methods: {
    waitpay: function () {
      this.$router.push('/index?' + 'user_id=' + this.$route.query.user_id)
    }
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
  top: 0;
  z-index: 5;
  position: fixed;
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
