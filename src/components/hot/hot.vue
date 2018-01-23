<template>
  <div id="hot">
    <div id="title"><p>{{ message }}</p></div>
    <div id="hotcon">
      <div v-for="item in items" v-bind:key="item.id">
        <a href="#"><img v-bind:src="item.src"><p>{{ item.name }}</p><span >{{ item.price }}</span><span>{{ item.sale }}</span></a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  data () {
    return {
      message: '热销分类',
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'}
      ]
    }
  }
}
</script>

<style>
  #hot{
    margin:15px 10px 0 10px;
    background:#fff;
    font-size:30px;
    border-bottom:3px solid #e6e6e6;
  }
  #title p{
    padding:5px;
    text-align:center;
    color:#ff0000;
  }
  #hotcon{
    height:460px;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }
  #hotcon div{
    width:25%;
    height:150px;
    border-radius:50%;
    text-align:center;
  }
  #hotcon a{
    font-size:14px;
  }
  #hotcon a:hover{
    color:#ff0000;
  }
  #hotcon img{
    width:130px;
    height:130px;
    border-radius:50%;
  }
  #hotcon span{
    margin:5px 5px 0 0;
    font-size:20px;
    text-align:center;
  }
  #hotcon span:nth-of-type(1){
    color:#ff0000;
  }
</style>
