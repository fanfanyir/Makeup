<template>
  <div id="goods">
    <div id="title"><p>{{ message }}</p></div>
    <div id="goodscon">
      <div v-for="item in items" v-bind:key="item.id">
        <a href="#"><img v-bind:src="item.src"><span >{{ item.id }}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      message: '商品分类',
      items: [
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg'}
      ]
    }
  }
}
</script>

<style>
  /*@import '/static/common.css';*/
  #goods{
    margin:15px 10px 0 10px;
    padding: 5px;
    font-size:30px;
    background-color:#fff;
    border-bottom:3px solid #e6e6e6;
  }
  #title p{
    text-align:center;
    color:#ff0000;
  }
  #goodscon{
    height:335px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
  }
  #goodscon div{
    width:25%;
    height:125px;
    border-radius:50%;
    text-align:center;
  }
  #goodscon a{
    font-size:14px;
  }
  #goodsscon a:hover{
    color:#ff0000;
  }
  #goodscon img{
    width:110px;
    height:110px;
    border-radius:50%;
  }
  #goodscon span{
    margin-top:5px;
    font-size:20px;
    display:block;
    text-align:center;
  }
</style>
