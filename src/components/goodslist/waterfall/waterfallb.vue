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
      brandd: null,
      sortt: null,
      classifyy: null,
      allsort: null,
      att: 0
    }
  },
  mounted: function () {
    let that = this
    // 商品过来的id
    bus.$on('brand', (brandname) => {
      console.log('品牌组件通讯成功啦')
      that.brandd = brandname
    })
    // 分类过来的名称
    bus.$on('classify', (classifyy) => {
      console.log('分类组件通讯成功啦')
      that.classifyy = classifyy
    })
    // 排序过来的名称
    bus.$on('sort', (sortt) => {
      console.log('排序通讯成功啦')
      that.sortt = sortt
    })
    this.handleScroll()
    if (!this.att) {
      window.addEventListener('scroll', function () {
        if (that.checkScrollSite() && that.ajaxState) {
          that.ajaxState = false
          console.log(that.allsort)
          that.handleScroll()
          //        if (this.att) {
          //          console.log('点击导航了50')
          //          that.navsort(this.att)
          //          console.log('调用新的请求52')
          //          // this.brandd = this.sortt = this.classifyy = ''
          //        } else {
          //          console.log('没有点击55')
          //          that.handleScroll()
          //          console.log('没有diao')
          //        }
        }
      })
    }
  },
  beforeUpdate: function () {
    let that = this
    this.att = this.aresure()
    if (this.att) {
      console.log('点击导航了')
      that.navsort()
      this.brandd = this.sortt = this.classifyy = null
    }
    this.checkScrollSite()
    // this.$nextTick(() => {
    //    let that = this
    //    if (this.aresure()) {
    //      console.log('点击导航了')
    //      that.navsort(this.allsort)
    //      console.log('调用新的请求')
    //      // this.brandd = this.sortt = this.classifyy = ''
    //    } else {
    //      console.log('没有点击')
    //      that.handleScroll()
    //    }
    // })
  },
  watched: function () {
    this.$nextTick(() => {
      this.waterfall('waterfall1', 'waterfall1_box')
    })
  },
  methods: {
    aresure () {
      let that = this
      if (that.brandd) {
        // that.allsort = 'brandone'
        return that.brandd
      } else if (that.sortt) {
        // that.allsort = 'sortone'
        return that.sortt
      } else if (that.classifyy) {
        // that.allsort = 'classifyone'
        return that.classifyy
      }
      //      if (that.allsort) {
      //        return true
      //      } else {
      //        return false
      //      }
    },
    jumpzmy: function () {
      this.$router.push({path: '/details'})
    },
    // 直接请求
    handleScroll: function () {
      console.log('点击请求')
      let that = this
      this.$http({
        method: 'GET',
        // url: 'https://easy-mock.com/mock/5a6a99c0396ee930b9c4b92f',
        url: 'http://j5fnvj.natappfree.cc/load.htm',
        dataType: 'json',
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (response) {
        console.log('请求成功')
        console.log(response)
        let left = JSON.parse(JSON.parse(response.data))
        console.log(typeof left)
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
    // 给后台传id时请求
    navsort: function () {
      console.log('调用' + this.allsort)
      let that = this
      let xhr = new XMLHttpRequest()
      xhr.open('post', 'http://j5fnvj.natappfree.cc/proList.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('brand=' + this.brandd + '&' + 'classify=' + this.classifyy + '&' + 'sort=' + this.sortt)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          that.litss.splice(0)
          console.log(typeof JSON.parse(xhr.responseText))
          console.log(this.litss)
          // this.litss = JSON.parse(xhr.responseText)
          that.litss.splice(0, xhr.responseText.length, xhr.responseText)
          console.log(this.litss)
          console.log('chuanidididid')
          this.$nextTick(() => {
            this.waterfall('waterfall1', 'waterfall1_box')
          })
          that.ajaxState = true
        } else {
          console.log('排序error')
        }
      }
    },
    // 布局
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
    // 获取所有的块
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
    // 获取top最小的位置
    getMinKey: function (arr, minH) {
      for (var key in arr) {
        if (arr[key] === minH) {
          return key
        }
      }
    },
    // 透明度变化
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
    // 滚轮滚动到一定位置
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
