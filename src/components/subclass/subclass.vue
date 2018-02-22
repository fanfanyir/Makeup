<template>
  <div id="subclass">
    <div id="title"><p>眼妆</p></div>
    <div id="subcon">
      <div v-for="item in items" v-bind:key="item in items" @click="jumping">
        <img :src="item.min_photo"><span>{{item.kind_min}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
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
      var that = this
      $.ajax({
        method: 'POST',
        url: 'http://nrpi25.natappfree.cc/index_kind_max2.htm',
        dataType: 'json',
        data: {'name': '底妆'},
        success: function (data) {
          console.log(data)
          var str = $.parseJSON(data)
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
  #subclass {
    margin: 15px 10px 100px 10px;
    font-size: 30px;
    background-color: #fff;
    border-bottom: 3px solid #e6e6e6;
    #title p {
      padding: 5px;
      margin-bottom:20px;
      text-align: center;
      color: #ff0000;
    }
    #subcon {
      height:100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 33%;
        height: 100%;
        text-align: center;
        a {
          font-size: 14px;
        }
        img {
          width: 200px;
          height: 200px;
          border-radius:10px;
        }
        span {
          margin-top:5px;
          font-size: 20px;
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
