<template>
  <ul id="bottom">
    <li id="index"  @click="home()">
      <a href="#">
        <img src="../../assets/bottom/index.png">
        <span>首页</span>
      </a>
    </li>
    <li id="list" @click="goodslist()">
      <a href="#">
        <img src="../../assets/bottom/list.png">
        <span>商品</span>
      </a>
    </li>
    <li id="shopping" @click="shop()">
      <a href="#">
        <img src="../../assets/bottom/shopping.png">
        <span>购物车</span>
      </a>
    </li>
    <li id="my" @click="jumpMy()">
      <a href="#">
        <img src="../../assets/bottom/mys.png">
        <span>我的</span>
      </a>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default{
  methods: {
    home: function () {
      this.$router.push({path: '/index?' + 'user_id=' + this.$route.query.user_id})
    },
    goodslist: function () {
      alert(this.$route.query.user_id)
      this.$router.push({path: '/goodlist?' + 'user_id=' + this.$route.query.user_id})
    },
    shop: function () {
      this.$router.push({path: '/shopping?' + 'user_id=' + this.$route.query.user_id})
    },
    jumpMy: function () {
      this.$router.push({path: '/person?' + 'user_id=' + this.$route.query.user_id})
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
