<template>
<div id="banner">
  <img id="left_箭头" src="../../assets/yifan.zhang/左箭头-(1).png">
  <div id="top_search">
    <input id="search_btn" type="text" value="化妆品"/>
    <img id="camera" src="../../assets/yifan.zhang/照相机.png"/>
  </div>
  <input id="more" type="button" value="●●●"/>
  <ul>
    <li>品牌</li>
    <li>排序方式</li>
    <li>全部分类</li>
    <li><img id="view" src="../../assets/yifan.zhang/Viewlist.png"/></li>
    <li>筛选<img id="seclect" src="../../assets/yifan.zhang/筛选.png"/></li>
  </ul>
</div>
</template>
<script>
export default{
  name: 'banner',
  data () {
    return {
      msg: '化妆品'
    }
  }
}
</script>
<style scoped>
#banner{
  width: 100%;
  height: 80px;
  background: #ff0000;
  /*padding:25px 40px 18px 40px;*/
  display: flex;
  justify-content: space-around;
}
#left_箭头,#camera,#view,#seclect{
  width:50px;
  height: 50px;
}
input{
  border: none;
  outline: none;
  background: transparent;
}
#top_search{
  width: 300px;
  flex-grow: 2;
}
#search_btn,#more{
  font-size: 25px;
  color: #ffffff;
}
</style>
