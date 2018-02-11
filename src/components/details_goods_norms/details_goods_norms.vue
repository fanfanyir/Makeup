<template>
    <div id="details_goods_norms" v-show="sshow">
      <div class="close" @click="close()">X</div>
      <div class="goods_picture">
        <img v-bind:src="src1[0]"/>
      </div>
      <div class="goods_norms">
        <p>规格选择</p>
        <div v-for="(norm,index) in norms" v-bind:key="norm in norms" @click="choosenorm(index)">{{norm}}</div>
      </div>
      <!--<input type="button" value="确认选择">-->
      <div id="divsure">确认选择</div>
    </div>
</template>
<script>
export default {
  name: 'details_goods_norms',
  data () {
    return {
      // src1: '',
      // src1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517116938648&di=96a1a65d6a3aeb041d36b78544192fb6&imgtype=0&src=http%3A%2F%2Fmvimg10.meitudata.com%2F55a882c9d1ec18281.jpg',
      norms: ['#100'],
      sshow: true
    }
  },
  props: {
    src1: Array
  },
  // props: ['message'],
  methods: {
    choosenorm: function (index) {
      let aDiv = document.getElementsByTagName('div')
      // console.log('333')
      for (let i = 0; i < aDiv.length - 1; i++) {
        aDiv[i].style.backgroundColor = 'white'
      }
      aDiv[index + 24].style.backgroundColor = 'hotpink'
    },
    close: function () {
      this.sshow = !this.sshow
      console.log(this.sshow)
      this.$emit('send', this.norms[0])
    }
  }
}
</script>

<style lang="scss" scoped>
#details_goods_norms{
  width: 100%;
  position: fixed;
  z-index: 14;
  bottom: 0;
  background-color: white;
  .close{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    line-height: 35px;
    border: 2px solid black;
    text-align: center;
    margin: 20px;
  }
  .goods_picture{
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
    img{
      width: 300px;
      height: 300px;
    }
  }
  .goods_norms{
    padding: 0 20px;
    p{
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 30px;
    }
    div{
      display: inline-block;
      text-align: center;
      width: 30%;
      margin: 0 100px 30px 40px;
      height: 50px;
      border: 2px solid black;
      border-radius: 15px;
      line-height: 50px;
      font-size: 20px;
    }
  }
  #divsure{
    /*margin: 0 0 20px 500px;*/
    border: 0;
    outline: none;
    /*width: 150px;*/
    height: 80px;
    color: white;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    background-color: #ff0000;
  }
}
</style>
