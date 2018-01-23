<template>
  <div id="brand">
    <div id="title"><p>{{ message }}</p></div>
    <div id="brandcon">
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
      message: '品牌分类',
      items: [
        {id: '迪奥', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'},
        {id: '底妆', src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg'}
      ]
    }
  }
}
</script>

<style>
  #brand{
    margin:15px 10px 0 10px;
    font-size:30px;
    background-color:#fff;
    border-bottom:3px solid #e6e6e6;
  }
  #title p{
    text-align:center;
    color:#ff0000;
  }
  #brandcon{
    height:350px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
  }
  #brandcon div{
    width:33%;
    height:150px;
    border-radius:50%;
    text-align:center;
  }
  #brandcon a{
    text-decoration:none;
    font-size:14px;
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
    margin-top:5px;
    font-size:20px;
    display:block;
    text-align:center;
  }
</style>
