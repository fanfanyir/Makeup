<template>
    <div id="detailstotal">
      <DetailsHeader :image="img"></DetailsHeader>
      <div id="section">
        <div class="clearfix">
          <div id="infor">
            {{datas[0].pro_shop_desc}}
          </div>
          <div id="share">
            <img src="../../assets/LC_icon_share_line_2.png"/>
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
          <div id="join_shoppingcar">加入购物车</div>
      </footer>
      <Detailsgoodsnorm v-show="isShow" v-bind:message="parentMsg" v-on:send="shshow"></Detailsgoodsnorm>
    </div>
</template>

<script>
import DetailsHeader from '../details-header/details-header'
import Detailsgoodsnorm from '../details_goods_norms/details_goods_norms'
export default {
  components: {DetailsHeader, Detailsgoodsnorm},
  name: 'details',
  data () {
    return {
      datas: [
        {'pro_shop_desc': '纪梵希口红定制小羊皮／小粉皮唇膏口红西柚色纪梵希口红定制小羊皮／小粉皮唇膏口红', 'pro_shop_price': '249', 'pro_shop_oldprice': '289', 'pro_shop_sale': '899'}
      ],
      isShow: false,
      parentMsg: 'hello',
      des: '',
      img: ['https://t12.baidu.com/it/u=2375941760,3154246640&fm=173&s=A644944ED632058CA085A7B90300C016&w=295&h=295&img.GIF', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517116938648&di=96a1a65d6a3aeb041d36b78544192fb6&imgtype=0&src=http%3A%2F%2Fmvimg10.meitudata.com%2F55a882c9d1ec18281.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2871851980,2831193141&fm=27&gp=0.jpg'
      ]
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    shshow: function (res) {
      console.log(res)
      this.des = res
    },
    load: function () {
      this.$http({
        url: 'http://jg25vu.natappfree.cc/detail.htm?user_id=5&pro_shop_id=6',
        method: 'get',
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res.bodyText)
        this.datas = JSON.parse(JSON.parse(res.bodyText))
        console.log(JSON.parse(JSON.parse(res.bodyText)))
        console.log('请求成功啦！！')
      }, function () {
        console.log('请求失败啦！！')
      })
    },
    collection: function () {
      let oP = document.getElementById('collection')
      if (oP.innerHTML.length === 2) {
        oP.style.color = 'red !important'
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
