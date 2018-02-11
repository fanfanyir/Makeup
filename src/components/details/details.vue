<template>
    <div id="detailstotal">
      <img src="../../assets/jumpleft.png" id="jumpup" @click="jumpup"/>
      <DetailsHeader :image="img"></DetailsHeader>
      <div id="section">
        <div class="clearfix">
          <div id="infor">
            {{datas[0].pro_shop_desc}}
          </div>
          <div id="share">
            <img src="../../assets/LC_icon.png"/>
            <p>分享有赏</p>
          </div>
        </div>
        <div class="descript">
          <span>¥</span>
          <span>{{datas[0].pro_shop_price}}</span>
          <span>-</span>
          <span>{{datas[0].pro_shop_oldprice}}</span>
        </div>
        <div class="descript1">
          <span>月销</span>
          <span>{{datas[0].pro_shop_sale}}</span>
          <span>笔</span>
        </div>
        <div class="choose">
          <div class="partone clearfix">
            <p @click="show()">选择 产品规格<span>{{des}}</span></p>
            <img src="../../../src/assets/right.png"/>
          </div>
          <div class="line1"></div>
          <div class="parttwo clearfix">
              <div>购物数量</div>
              <div>
                <input type="button" value="-" id="down" @click="down()"/>
                <span id="number">1</span>
                <input type="button" value="+" id="up" @click="up()"/>
              </div>
          </div>
        </div>
        <!--<div class="ceshi"></div>-->
      </div>
      <footer class="clearfix">
          <div class="collection">
            <img src="../../../src/assets/收藏.png" id="collectionimg"/>
            <p @click="collection()" id="collection">收藏</p>
          </div>
          <div id="join_shoppingcar" @click="join_shoppingcar()">加入购物车</div>
      </footer>
      <Detailsgoodsnorm v-show="isShow" v-bind:message="parentMsg" v-on:send="shshow" :src1="img"></Detailsgoodsnorm>
    </div>
</template>

<script>
import DetailsHeader from '../details-header/details-header'
import Detailsgoodsnorm from '../details_goods_norms/details_goods_norms'
import bus from '../../assets/Bus'
export default {
  components: {DetailsHeader, Detailsgoodsnorm},
  name: 'details',
  data () {
    return {
      pro_shop_id: '',
      datas: [
        {'pro_shop_desc': '纪梵希口红定制小羊皮／小粉皮唇膏口红西柚色纪梵希口红定制小羊皮／小粉皮唇膏口红', 'pro_shop_price': '249', 'pro_shop_oldprice': '289', 'pro_shop_sale': '899'}
      ],
      isShow: false,
      parentMsg: 'hello',
      des: '',
      img: ['http://ozxb0em6i.bkt.clouddn.com/106454_205.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517116938648&di=96a1a65d6a3aeb041d36b78544192fb6&imgtype=0&src=http%3A%2F%2Fmvimg10.meitudata.com%2F55a882c9d1ec18281.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2871851980,2831193141&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2871851980,2831193141&fm=27&gp=0.jpg'
      ]
    }
  },
  mounted () {
    this.getid()
    this.load()
  },
  methods: {
    getid: function () {
      let that = this
      alert('zhang')
      console.log('张梦莹')
      console.log(that.pro_shop_id)
      bus.$on('zmy', (indexs) => {
        that.pro_shop_id = indexs
      })
    },
    jumpup: function () {
      let that = this
      this.$router.push({path: '/goodlist?' + 'user_id=' + this.$route.query.user_id})
      let oP = document.getElementById('collection')
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('success')
        } else {
          console.log('error')
        }
      }
      xhr.open('post', 'http://nrpi25.natappfree.cc/insertCollect.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('ccc=' + oP.innerHTML.length + '&' + 'user_id=' + that.$route.query.user_id + '&' + 'pro_shop_id=' + that.pro_shop_id)
      //     console.log(oP.innerHTML.length)
    },
    join_shoppingcar: function () {
      let that = this
      let numbers = document.getElementById('number')
      console.log(numbers.innerHTML)
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('success join in李鑫')
        } else {
          console.log('error join in李鑫')
        }
      }
      xhr.open('post', 'http://nrpi25.natappfree.cc/success.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + that.$route.query.user_id + '&' + 'pro_shop_id=' + that.pro_shop_id + '&' + 'cart_num=' + numbers.innerHTML)
    },
    shshow: function (res) {
      console.log(res)
      this.des = res
    },
    load: function () {
      let that = this
      console.log(that.pro_shop_id)
      this.$http({
        //        url: 'http://nrpi25.natappfree.cc/detail.htm?user_id=1&pro_shop_id=1',
        url: 'http://nrpi25.natappfree.cc/detail.htm?user_id=' + that.$route.query.user_id + '&pro_shop_id=' + that.pro_shop_id,
        method: 'get',
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res)
        console.log(res.bodyText)
        that.datas = JSON.parse(res.bodyText)
        console.log(that.datas[0])
        console.log(typeof that.datas[0].pro_shop_pic.split(';'))
        that.img = that.datas[0].pro_shop_pic.split(';')
        //        console.log(this.img.length)
        console.log('张雪华请求成功啦！！')
      }, function () {
        console.log('张雪华请求失败啦！！')
      })
    },
    collection: function () {
      let oP = document.getElementById('collection')
      if (oP.innerHTML.length === 2) {
        oP.style.color = 'red '
        oP.innerHTML = '已收藏'
      } else {
        oP.style.color = '#898989'
        oP.innerHTML = '收藏'
      }
    },
    down: function () {
      let number = document.getElementById('number')
      if (Number(number.innerHTML) > 1) {
        number.innerHTML = Number(number.innerHTML) - 1
      }
    },
    up: function () {
      let number = document.getElementById('number')
      number.innerHTML = Number(number.innerHTML) + 1
    },
    show: function () {
      this.isShow = !this.isShow
      console.log(this.isShow)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/details";
</style>
