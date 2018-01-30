<template>
  <div id="subclass">
    <div id="title"><p>{{ message }}</p></div>
    <div id="subcon">
      <div v-for="item in items" v-bind:key="item.id">
        <a href="#"><img v-bind:src="item.src" ><span >{{ item.id }}</span></a>
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
        {src: 'http://img0.imgtn.bdimg.com/it/u=1363759338,3109658944&fm=27&gp=0.jpg', id: '迪奥'},
        {src: 'http://img4.imgtn.bdimg.com/it/u=854196371,4097056263&fm=27&gp=0.jpg', id: '底妆1'},
        {src: 'http://img4.imgtn.bdimg.com/it/u=2965317859,1746404083&fm=27&gp=0.jpg', id: '底妆2'},
        {src: 'http://img0.imgtn.bdimg.com/it/u=3685931821,1122295923&fm=27&gp=0.jpg', id: '底妆3'},
        {src: 'http://img5.imgtn.bdimg.com/it/u=2117095798,285123523&fm=27&gp=0.jpg', id: '底妆4'},
        {src: 'http://img3.imgtn.bdimg.com/it/u=332430542,2387847793&fm=27&gp=0.jpg', id: '底妆5'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #subclass {
    margin: 15px 10px 0 10px;
    font-size: 30px;
    background-color: #fff;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      padding: 5px;
      margin-bottom:20px;
      text-align: center;
      color: #ff0000;
    }
    #subcon {
      height:680px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 33%;
        height: 250px;
        text-align: center;
        a {
          font-size: 14px;
        }
        img {
          width: 200px;
          height: 200px;
          border-radius:10px;
        }
        span {
          margin-top:5px;
          font-size: 20px;
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
