<template>
    <div  v-show="picshow" id="paypic" @click="onload">
      <div @click="close()">X</div>
      <p>支付总价：{{price}}</p>
      <img :src="src"/>
    </div>
</template>

<script>
import Bus from '../../assets/Bus'
export default {
  name: 'paypic',
  data () {
    return {
      src: '',
      price: '',
      picshow: true
    }
  },
  mounted () {
    this.onload()
    Bus.$on('sendPri', (price) => {
      this.price = price
      console.log(this.price)
    })
  },
  methods: {
    close: function () {
      this.picshow = !this.picshow
    },
    onload: function () {
      console.log(this.price)
      let pp = this.price
      console.log(pp)
      this.src = 'http://8w6pvv.natappfree.cc/img.htm?price=' + pp
    }
  }
}
</script>

<style lang="scss" scoped>
#paypic{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  div{
    margin-left: 20px;
    margin-bottom: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
    line-height: 40px;
    text-align: center;
  }
  p{
    font-size: 30px;
    text-align: center;
  }
  img{
    margin: 100px 0 50px 160px;
    width: 400px;
    height: 400px;
  }
}
</style>
