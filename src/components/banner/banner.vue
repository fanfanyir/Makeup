<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style>
  @import '/static/swiper-4.1.0.min.css';
  #banner{
    margin-top:80px;
  }
  .swiper-container {
    width: 600px;
    height: 300px;
  }
  .swiper-slide{
    font-size: 50px;
  }
  .swiper-slide:nth-of-type(1){
    background-color: cornflowerblue;
  }
  .swiper-slide:nth-of-type(2){
    background-color: coral;
  }
  .swiper-slide:nth-of-type(3){
    background-color: yellowgreen;
  }
  .swiper-slide:nth-of-type(4){
    background-color: coral;
  }
  .swiper-slide:nth-of-type(5){
    background-color: cornflowerblue;
  }
  /*
  #banner{
    margin-top:20px;
    width:100%;
    height:300px;
    position:relative;
  }
  #screen{
    width:100%;
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
    width:100%;
    height:300px;
    overflow:hidden;
  }
  #banner ol{
    position:absolute;
    right:10px;
    bottom:10px;
    line-height:20px;
    text-align: center;
  }
  #banner ol li{
    float:left;
    width:20px;
    height:20px;
    background:#fff;
    border:1px solid #ccc;
    border-radius:50%;
    margin-left:10px;
    cursor:pointer;
  }
  #banner ol li current{
    background:yellow;
  }
  #banner img{
    width:100%;
    height:300px;
  }*/

</style>
