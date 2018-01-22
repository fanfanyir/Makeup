<template>
  <div id="banner" class="banner">
    <div id="screen">
      <ul id="ul">
          <li><img src="../../assets/index-banner/banner1.jpg"/></li>
          <li><img src="../../assets/index-banner/banner2.jpg"/></li>
          <li><img src="../../assets/index-banner/banner3.jpg"/></li>
          <li><img src="../../assets/index-banner/banner4.jpg"/></li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>
<style>
  #banner{
    margin-top:20px;
    width:750px;
    height:300px;
    position:relative;
  }
  #screen{
    width:750px;
    height:300px;
    overflow:hidden;
    position:relative;
  }
  #banner ul{
    position:absolute;
    left:0;
    top:0;
    width:3000px;
    line-height:20px;
    text-align:center;
  }
  #banner li{
    float:left;
    width:750px;
    height:300px;
  }
  #banner ol{
    position:absolute;
    right:10px;
    bottom:10px;
    line-height:20px;
  }
  #banner img{
    width:750px;
    height:300px;
  }
</style>
