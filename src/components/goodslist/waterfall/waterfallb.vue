<template>
  <div id="waterfall1">
    <div class="waterfall1_box" v-for="lit in litss" v-bind:key="lit.pro_shop_id" @click="jumpzmy()">
      <div class="box_img">
        <img :src="lit.pro_shop_pic"/>
        <p>{{lit.pro_shop_desc}}</p>
        <div><span>{{lit.pro_shop_price}}</span><span>{{lit.pro_shop_sale}}人付款</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'waterfall1',
  data () {
    return {
      litss: [],
      starNum: 0,
      ajaxState: true
    }
  },
  mounted: function () {
    this.handleScroll()
    let that = this
    window.addEventListener('scroll', function () {
      if (that.checkScrollSite() && that.ajaxState) {
        that.ajaxState = false
        that.handleScroll()
      }
    })
  },
  watched: function () {
    this.$nextTick(() => {
      this.waterfall('waterfall1', 'waterfall1_box')
    })
  },
  methods: {
    jumpzmy: function () {
      this.$router.push({path: '/details'})
    },
    handleScroll: function () {
      // let that = this
      // this.$http({
      //   method: 'GET',
      //   url: 'https://easy-mock.com/mock/5a6a99c0396ee930b9c4b92f',
      //   dataType: 'json',
      //   async: false,
      //   xhrFields: {withCredentials: true}
      // }).then(function (response) {
      //   let left = JSON.parse(response.bodyText).data
      //   this.litss = this.litss.concat(left)
      //   this.waterfall('waterfall1', 'waterfall1_box')
      //   this.$nextTick(() => {
      //     this.waterfall('waterfall1', 'waterfall1_box')
      //   })
      //   that.ajaxState = true
      // },
      // function () {
      //   console.log('请求失败')
      // })
    },
    waterfall: function (parent, pin) {
      let oParent = document.getElementById(parent)
      let aPin = this.getClassObj(oParent, pin)
      let iPinW = aPin[0].offsetWidth
      let num = Math.floor(document.documentElement.clientWidth / iPinW)
      oParent.style.cssText = 'width:' + num * iPinW + 'px;margin:0 auto'
      let compareAarr = []
      for (let i = 0; i < aPin.length; i++) {
        if (i < num) {
          compareAarr[i] = aPin[i].offsetHeight
        } else {
          let minH = Math.min.apply({}, compareAarr)
          let minKey = this.getMinKey(compareAarr, minH)
          aPin[i].style.position = 'absolute'
          aPin[i].style.top = minH + 'px'
          aPin[i].style.left = aPin[minKey].offsetLeft + 'px'
          compareAarr[minKey] += aPin[i].offsetHeight
          this.setMoveStyle(aPin[i], minH, aPin[minKey].offsetLeft, i)
        }
      }
    },
    getClassObj: function (parent, className) {
      let aObj = parent.getElementsByTagName('div')
      let result = []
      for (let i = 0; i < aObj.length; i++) {
        if (aObj[i].className === className) {
          result.push(aObj[i])
        }
      }
      return result
    },
    getMinKey: function (arr, minH) {
      for (var key in arr) {
        if (arr[key] === minH) {
          return key
        }
      }
    },
    setMoveStyle: function (obj, top, left, index) {
      if (index <= this.starNum) {
        return
      }
      obj.style.position = 'absolute'
      obj.style.top = top + 'px'
      obj.style.left = left + 'px'
      obj.style.opacity = 0
      obj.style.filter = 'alpha(opacity=0)'
      $(obj).stop().animate({
        opacity: 1
      }, 1000)
      this.starNum = index
    },
    checkScrollSite: function () {
      let oParent = document.getElementById('waterfall1')
      let aPin = this.getClassObj(oParent, 'waterfall1_box')
      let lastPinH = aPin[aPin.length - 1].offsetTop + Math.floor(aPin[aPin.length - 1].offsetHeight / 2)
      let srcollTop = document.documentElement.scrollTop || document.body.scrollTop
      let documentH = document.documentElement.clientHeight
      if (lastPinH < (srcollTop + documentH)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../../../static/common";
  #waterfall1{
    /*margin-top: 150px;*/
    z-index: -1;
    width: 100%;
    /*position: relative;*/
    .waterfall1_box{
      /*width: 320px;*/
      width: 50%;
      /*padding: 5px;*/
      height: auto;
      /*position: relative;*/
      float: left;
      .box_img{
        /*width: 306px;*/
        width: 100%;
        height: auto;
        padding: 5px;
        background: #FFF;
        border: 1px #cccccc solid;
        box-shadow: 0 0 5px #ccc;
        border-radius: 5px;
        img{
          /*width: 296px;*/
          height: auto;
          width: 100%;
        }
        div{
          width: 296px;
          padding: 5px;
          span{
            display: inline-block;
            padding: 5px;
          }
          span:nth-last-child(1){
            color: #ff0000;
          }
        }
      }
    }
  }
</style>
