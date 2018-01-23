<template>
  <ul id="bottom">
    <li id="index">
      <img src="../../assets/bottom/index.png">
      <p>首页</p>
    </li>
    <li id="list">
      <img src="../../assets/bottom/list.png">
      <p>商品列表</p>
    </li>
    <li id="shopping">
      <img src="../../assets/bottom/shopping.png">
      <p>购物车</p>
    </li>
    <li id="mys">
      <img src="../../assets/bottom/mys.png">
      <p>我的</p>
    </li>
  </ul>
</template>

<script type="text/javascript">
</script>

<style>
  #bottom{
    position:fixed;
    display:flex;
    justify-content:space-around;
    align-items: center;
    left:0;
    bottom:0;
    width:100%;
    height:80px;
    background:#ff0000;
    text-align:center;
  }
  #bottom li{
    text-align: center;
  }
  #bottom img{
    width:47px;
    height:47px;
    display:block;
  }
  #bottom p{
    color:#fff;
  }
</style>
