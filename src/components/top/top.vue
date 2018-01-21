<template>
  <div id="top">
    <div id="dimension">
      <a href="#"><img src="../../assets/top/dimension.png"></a>
    </div>
    <div id="search">
      <img src="../../assets/top/search.png">
      <input type="text" placeholder="寻找宝贝">
    </div>
    <div id="more">
      <a href="#"><img src="../../assets/top/more.png"></a>
    </div>
  </div>
</template>

<script type="text/javascript">

</script>

<style>
  #top{
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:0;
    padding:0;
    width:100%;
    height:80px;
    background-color:#ff0000;
  }
  #dimension img{
    width:60px;
    height:60px;
  }
  #search{
    position:relative;
    flex-grow:2;
    border-bottom:1px solid #fff;
    margin-left:15px;
  }
  #search img{
    width:40px;
    height:40px;
    margin-top:5px;
    margin-left:15px;
  }
  #search input{
    outline:none;
    color:#fff;
    position:absolute;
    width:550px;
    height:20px;
    margin-top:15px;
    border:none;
    background-color:transparent;
  }
  #more img{
    width:60px;
    height:60px;
  }
</style>
