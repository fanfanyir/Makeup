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
        {id: '底妆', src: 'http://img0.imgtn.bdimg.com/it/u=3230019345,1180801021&fm=27&gp=0.jpg'},
        {id: '唇妆', src: 'http://img5.imgtn.bdimg.com/it/u=4171676116,824482619&fm=200&gp=0.jpg'},
        {id: '眼妆', src: 'http://img4.imgtn.bdimg.com/it/u=3414440775,4089284891&fm=27&gp=0.jpg'},
        {id: '护肤', src: 'http://img3.imgtn.bdimg.com/it/u=4026681481,3560270022&fm=27&gp=0.jpg'},
        {id: '香水', src: 'http://img3.imgtn.bdimg.com/it/u=642237152,1288091797&fm=27&gp=0.jpg'},
        {id: '美容工具', src: 'http://img4.imgtn.bdimg.com/it/u=2594624002,3617889790&fm=27&gp=0.jpg'},
        {id: '美甲', src: 'http://img5.imgtn.bdimg.com/it/u=2229256891,3636616472&fm=27&gp=0.jpg'},
        {id: '男士专场', src: 'http://img2.imgtn.bdimg.com/it/u=2271745413,3328747779&fm=27&gp=0.jpg'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../static/common';
  #goods {
    margin: 15px 10px 0 10px;
    padding: 5px;
    font-size: 30px;
    background-color: #fff;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      text-align: center;
      color: #ff0000;
    }
    #goodscon {
      height: 335px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
       div {
        width: 25%;
        height: 125px;
        border-radius: 50%;
        text-align: center;
         img {
           width: 110px;
           height: 110px;
           border-radius: 50%;
         }
         a {
          font-size: 14px;
         }
         span {
           margin-top: 5px;
           font-size: 20px;
           display: block;
           text-align: center;
         }
      }
    }
  }
</style>
