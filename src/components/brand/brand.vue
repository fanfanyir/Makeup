<template>
  <div id="brand">
    <div id="title"><p>品牌分类</p></div>
    <div id="brandcon">
      <div v-for="item in items" v-bind:key="item in items" @click="jumping">
        <img :src="item.brand_picture"><span>{{item.brand_name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default{
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    jumping: function () {
      this.$router.push({path: '/goodlist?' + 'user_id=' + this.$route.query.user_id})
    },
    ajax: function () {
      let that = this
      $.ajax({
        method: 'GET',
        url: 'http://nrpi25.natappfree.cc/index_kind_brands.htm',
        dataType: 'json',
        success: function (data) {
          console.log(data)
          let str = $.parseJSON(data)
          that.items = str
        }
      })
    }
  },
  mounted: function () {
    this.ajax()
  }
}
</script>

<style lang="scss" scoped>
  #brand {
    margin: 15px 10px 0 10px;
    font-size: 30px;
    background-color: #fff;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      padding: 5px;
      text-align: center;
      color: #ff0000;
    }
    #brandcon {
      margin-top:20px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 33%;
        height: 100%;
        text-align: center;
        a {
          text-decoration: none;
          font-size: 14px;
        }
        img {
          width: 120px;
          height: 120px;
          border-radius:10px;
        }
        span {
          margin-top: 5px;
          font-size: 20px;
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
