<template>
  <div id="goods">
    <div id="title"><p>商品分类</p></div>
    <div id="goodscon">
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
      <div><a href="#"><img src="../../assets/goods/timg.jpg"><span>底妆</span></a></div>
    </div>
  </div>
</template>

<script type="text/javascript">
</script>

<style>
  #goods{
    font-size:30px;
    margin:0 10px;
    background-color:#fff;
    border-bottom:3px solid #e6e6e6;
  }
  #title{
    margin-top:15px;
    text-align:center;
    color:#ff0000;
  }
  #goodscon{
    display:flex;
    margin:0 70px;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:space-around;
  }
  #goodscon div{
    width:100px;
    height:125px;
    border-radius:50%;
    margin:20px 20px;
  }
  #goodscon a{
    text-decoration:none;
    font-size:14px;
  }
  a:link{
    color:#000;
  }
  a:hover{
    color:#ff0000;
  }
  #goodscon img{
    width:100px;
    height:100px;
    border-radius:50%;
  }
  #goodscon span{
    font-size:20px;
    display:block;
    text-align:center;
  }
</style>
