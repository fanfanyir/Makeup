<template>
  <ul id="bottom">
    <li id="index">
      <a href="#">
        <img src="../../assets/bottom/index.png">
        <span @click="home()">首页</span>
      </a>
    </li>
    <li id="list">
      <a href="#">
        <img src="../../assets/bottom/list.png">
        <span @click="goodslist()">商品</span>
      </a>
    </li>
    <li id="shopping">
      <a href="#">
        <img src="../../assets/bottom/shopping.png">
        <span @click="shop()">购物车</span>
      </a>
    </li>
    <li id="my">
      <a href="#">
        <img src="../../assets/bottom/mys.png">
        <span @click="jumpMy()">我的</span>
      </a>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default{
  methods: {
    home: function () {
      this.$router.push({path: '/index'})
    },
    goodslist: function () {
      this.$router.push({path: '/goodlist'})
    },
    shop: function () {
      this.$router.push({push: '/shopping'})
    },
    jumpMy: function () {
      this.$router.push({path: '/person'})
    }
  }
}
</script>

<style lang="scss" scoped>
  #bottom {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: #ff0000;
    text-align: center;
    li {
      text-align: center;

      img {
        width: 50px;
        height: 50px;
        display: block;
        margin-bottom: 10px;
      }

      span {
        color: #fff;
      }
    }
  }
</style>
