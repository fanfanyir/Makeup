<template>
  <div id="brand">
    <div id="title"><p>品牌分类</p></div>
    <div id="brandcon">
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
      <div><a href="#"><img src="../../assets/brand/timg.jpg"><span>迪奥</span></a></div>
    </div>

  </div>
</template>

<script type="text/javascript">
</script>

<style>
  #brand{
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
  #brandcon{
    display:flex;
    margin:0 100px;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:space-around;
  }
  #brandcon div{
    width:120px;
    height:125px;
    border-radius:50%;
    margin:30px 20px;
  }
  #brandcon a{
    text-decoration:none;
    font-size:14px;
  }
  a:link{
    color:#000;
  }
  a:hover{
    color:#ff0000;
  }
  #brandcon img{
    width:120px;
    height:120px;
    border-radius:50%;
  }
  #brandcon span{
    font-size:20px;
    display:block;
    text-align:center;
  }
</style>
