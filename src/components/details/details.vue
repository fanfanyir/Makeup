<template>
    <div id="detailstotal">
      <details-header></details-header>
      <div id="section">
        <div class="clearfix">
          <div id="infor">
            {{datas[0].infor}}
          </div>
          <div id="share">
            <img src="../../assets/LC_icon_share_line_2.png"/>
            <p>分享有赏</p>
          </div>
        </div>
        <div class="descript">
          <span>¥</span>
          <span>{{datas[0].price}}</span>
          <span>-</span>
          <span>{{datas[0].higprice}}</span>
        </div>
        <div class="descript1">
          <span>月销</span>
          <span>{{datas[0].sale}}</span>
          <span>笔</span>
        </div>
        <div class="choose">
          <div class="partone clearfix">
            <p>选择 产品规格</p>
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
    </div>
</template>

<script>
import DetailsHeader from '../details-header/details-header'
export default {
  components: {DetailsHeader},
  name: 'details',
  data () {
    return {
      datas: [
        {'infor': '纪梵希口红定制小羊皮／小粉皮唇膏口红西柚色纪梵希口红定制小羊皮／小粉皮唇膏口红', 'price': '249', 'higprice': '289', 'sale': '899'}
      ]
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../static/details";
</style>
