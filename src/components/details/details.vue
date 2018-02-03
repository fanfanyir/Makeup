<template>
    <div id="detailstotal">
      <DetailsHeader></DetailsHeader>
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
            <p @click="show()">选择 产品规格</p>
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
        <div class="ceshi"></div>
      </div>
      <footer class="clearfix">
          <div class="collection">
            <img src="../../../src/assets/收藏.png" id="collectionimg"/>
            <p @click="collection()" id="collection">收藏</p>
          </div>
          <div id="join_shoppingcar">加入购物车</div>
      </footer>
      <Detailsgoodsnorm v-show="isShow"></Detailsgoodsnorm>
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
      isShow: false
    }
  },
  methods: {
    collection: function () {
      let oP = document.getElementById('collection')
      if (oP.innerHTML.length === 2) {
        oP.style.color = 'red'
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
      this.isShow = true
      console.log(this.isShow)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/details";
</style>
