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
import bus from '../../../assets/Bus'
import $ from 'jquery'
export default {
  name: 'waterfall1',
  data () {
    return {
      litss: [],
      starNum: 0,
      ajaxState: true,
      brandd: '',
      sortt: '',
      classifyy: '',
      allsort: ''
    }
  },
  mounted: function () {
    let that = this
    bus.$on('brand', (brandid) => {
      console.log(brandid)
      console.log(typeof brandid)
      console.log('品牌组件通讯成功啦')
      that.brandd = brandid
    })
    bus.$on('classify', (classifyy) => {
      console.log(classifyy)
      console.log(typeof classifyy)
      console.log('分类组件通讯成功啦')
      that.classifyy = classifyy
    })
    bus.$on('sort', (sortt) => {
      console.log(sortt)
      console.log(typeof sortt)
      console.log('排序通讯成功啦')
      that.sortt = sortt
    })
    this.aresure()
    window.addEventListener('scroll', function () {
      if (that.checkScrollSite() && that.ajaxState) {
        that.ajaxState = false
        that.aresure()
      }
    })
  },
  beforeUpdate: function () {
    this.$nextTick(() => {
      this.waterfall('waterfall1', 'waterfall1_box')
    })
  },
  updated: function () {
  },
  watched: function () {
    this.$nextTick(() => {
      this.waterfall('waterfall1', 'waterfall1_box')
    })
  },
  methods: {
    aresure () {
      if (this.brandd) {
        this.allsort = this.brandd
        console.log('点击品牌')
      } else if (this.sortt) {
        this.allsort = this.sortt
        console.log('点击排序')
      } else if (this.classifyy) {
        this.allsort = this.classifyy
        console.log('点击分类')
      }
      if (this.allsort) {
        console.log('点击导航了')
        this.navsort(this.allsort)
        this.brandd = this.sortt = this.classifyy = ''
      } else {
        console.log('没有点击')
        this.handleScroll()
      }
    },
    jumpzmy: function () {
      this.$router.push({path: '/details'})
    },
    handleScroll: function () {
      let that = this
      this.$http({
        method: 'GET',
        url: 'https://easy-mock.com/mock/5a6a99c0396ee930b9c4b92f',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (response) {
        let left = JSON.parse(response.bodyText).data
        this.litss = []
        this.litss = this.litss.concat(left)
        this.$nextTick(() => {
          this.waterfall('waterfall1', 'waterfall1_box')
        })
        that.ajaxState = true
      },
      function () {
        console.log('请求失败')
      })
    },
    navsort: function (navnav) {
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (response) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('总排序123成功')
          let left = JSON.parse(response.bodyText).data
          this.litss = []
          this.litss = this.litss.concat(left)
          this.$nextTick(() => {
            this.waterfall('waterfall1', 'waterfall1_box')
          })
          that.ajaxState = true
        } else {
          console.log('总排序123error')
        }
      }
      xhr.open('post', 'http://zxhbzu.free.ngrok.cc/kind.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('kind_max=' + this.navnav)
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
