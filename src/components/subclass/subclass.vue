<template>
  <div id="subclass">
    <div id="title"><p>{{ message }}</p></div>
    <div id="subcon">
      <div v-for="item in items" v-bind:key="item.id">
        <a href="#"><img v-bind:src="item.src"><span >{{ item.id }}</span></a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  data () {
    return {
      message: '眼妆',
      items: [
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '迪奥'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆1'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆2'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆3'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆4'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆5'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆6'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆7'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆8'},
        {src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg', id: '底妆9'}
      ]
    }
  }
}
</script>

<style>
  #subclass{
    margin:15px 10px 0 10px;
    padding:5px;
    font-size:30px;
    background-color:#fff;
    border-bottom:3px solid #e6e6e6;
  }
  #title p{
    margin-bottom:30px;
    text-align:center;
    color:#ff0000;
  }
  #subcon{
    width:100%;
    height:450px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
  }
  #subcon div{
    width:20%;
    height:135px;
    text-align: center;
  }
  #subcon a{
    font-size:14px;
  }
  a:hover{
    color:#ff0000;
  }
  #subcon img{
    width:120px;
    height:120px;
  }
  #subcon span{
    margin-top:5px;
    font-size:20px;
    display:block;
    text-align:center;
  }
</style>
