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
        {src: 'http://img4.imgtn.bdimg.com/it/u=1157426056,868484316&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img0.imgtn.bdimg.com/it/u=3116795964,2644077454&fm=11&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img3.imgtn.bdimg.com/it/u=755604728,3756751505&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img2.imgtn.bdimg.com/it/u=1430061192,652034414&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img3.imgtn.bdimg.com/it/u=3326231650,828823529&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img1.imgtn.bdimg.com/it/u=2920497050,2288777391&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img1.imgtn.bdimg.com/it/u=3928369660,429502675&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'},
        {src: 'http://img4.imgtn.bdimg.com/it/u=2789478621,300658657&fm=27&gp=0.jpg', name: '昨日重现', price: '￥225', sale: '月销售24笔'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #hot {
    margin: 15px 10px 0 10px;
    background: #fff;
    font-size: 30px;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      padding: 5px;
      text-align: center;
      color: #ff0000;
    }
    #hotcon {
      height: 460px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 25%;
        height: 200px;
        text-align: center;
        a {
          font-size: 14px;
        }
        img {
          width: 130px;
          height: 160px;
          border-radius:10px;
        }
        span {
          margin: 5px 5px 0 0;
          font-size: 20px;
          text-align: center;
        }
        span:nth-of-type(1) {
          color: #ff0000;
        }
      }
    }
  }
</style>
