<template>
  <div id="shcontent">
    <div id="top">
      <div id="top_left"><img src="../../../assets/shcontent/shop.png" width="20" height="20" alt="商铺标志"> <span>罗记化妆品</span> <img src="../../../assets/shcontent/right.png" width="18" height="10" alt="向右标志"> </div>
      <div id="top_right"><span id="delete" @click="del">删除</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>领券</span></div>
    </div>
    <div id="content" v-for="item in items" v-bind:key="item in items">
      <div id="con_left">
        <input type="checkbox" name="checkbox">
      </div>
      <div id="con_mid">
        <img :src="item.pro_shop.pro_shop_pic.split(';')[Math.floor(Math.random() * 1)]"  @click="jumping">
      </div>
      <div id="con_right">
        <span id="write" @click="write">编辑</span>
        <p id="desc">{{item.pro_shop.pro_shop_desc}}</p>
        <p id="spec">{{item.pro_shop.pro_shop_spec}}</p>
        <div id="price">
          <span>￥<span id="now">{{item.pro_shop.pro_shop_price}}</span></span>
          <span id="older">￥<span id="old">{{item.pro_shop.pro_shop_oldprice}}</span></span>
          <span id="number">×<span id="num">{{item.cart_num}}</span></span>
        </div>
      </div>
      <div id="changeNum">
        <input type="button" id="reduce" value="－" @click="reduce">
        <input type="text" id="text" value="1">
        <input type="button" id="add" value="＋" @click="add"><br>
        <input type="button" value="确定" id="sure" @click="sure">
      </div>
    </div>
    <div id="bottom">
      <div id="left">
        <input type="checkbox" name="check" @click="equal()" id="btn">
        <span>全选</span>
      </div>
      <div id="center">
        <span id="total">合计：<span>￥</span><span id="equalNum">0</span></span>
      </div>
      <div id="right">
        <span id="account" @click="jumpp">结算：(<span id="all">0</span>)</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      items: [
      ]
    }
  },
  methods: {
    jumpp: function () {
      this.$router.push({path: '/pay?' + 'user_id=' + this.$route.query.user_id})
    },
    jumping: function () {
      this.$router.push({path: '/details?' + 'user_id=' + this.$route.query.user_id})
    },
    equal: function () {
      if ($('#btn').prop('checked')) {
        $('input').prop('checked', true)
      } else {
        $('input').prop('checked', false)
      }
    },
    del: function () {
      $.ajax({
        method: 'POST',
        url: 'http://nrpi25.natappfree.cc/deleteCarts.htm?pro_shop_id=123',
        dataType: 'json',
        data: {user_id: 30},
        success: function (data) {
          console.log(data)
        }
      })
      if (confirm('确认删除？')) {
        $('#content').css('display', 'none')
      }
    },
    write: function () {
      $('#con_right').css('display', 'none')
      $('#changeNum').css('display', 'block')
    },
    sure: function () {
      $('#con_right').css('display', 'block')
      $('#changeNum').css('display', 'none')
      document.getElementById('num').innerHTML = document.getElementById('text').value
      var a = document.getElementById('text').value
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function (res) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('修改成功')
        }
      }
      xhr.open('post', 'http://nrpi25.natappfree.cc/updateNum.htm', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send('user_id=' + 1 + '&' + 'pro_shop_id=' + 123 + '&' + 'cart_num=' + a)
    },
    add: function () {
      if (document.getElementById('text').value >= 1) {
        document.getElementById('text').value++
      }
    },
    reduce: function () {
      if (document.getElementById('text').value <= 1) {
        document.getElementById('text').value = 1
      } else {
        document.getElementById('text').value--
      }
    },
    ajax: function () {
      var that = this
      $.ajax({
        method: 'POST',
        url: 'http://nrpi25.natappfree.cc/selectCarts.htm',
        dataType: 'json',
        data: {user_id: 30},
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
    this.equal()
  }
}
</script>

<style lang="scss" scoped>
#shcontent {
  #top{
    margin-top:20px;
    padding:0 15px;
    display:flex;
    justify-content:space-between;
    font-size:25px;
    span{
      font-weight:bold;
      cursor:pointer;
    }
  }
  #content{
    width:100%;
    height:250px;
    margin-top:10px;
    padding-bottom:15px;
    display:flex;
    justify-content:space-around;
    border-bottom:15px solid #eaeaea;
    #con_mid{
      width:45%;
      height:100%;
      img{
        width:100%;
        height:100%;
      }
    }
    #con_right{
      width:45%;
      height:100%;
      position:relative;
      #write{
        position:absolute;
        right:0;
        cursor:pointer;
      }
      p{
        font-size:25px;
        margin-bottom:5px;
      }
      p:nth-of-type(2){
        font-size:20px;
        color:#ccc;
      }
      #price{
        width:100%;
        position:absolute;
        bottom:0;
        #older{
          color:#ccc;
          text-decoration:line-through;
          margin-left:10px;
          #old{
            color:#ccc;
          }
        }
        #number{
          float:right;
          margin-right:15px;
        }
        span{
          font-size:25px;
          }
        #now{
          font-size:30px;
          color:#ff0000;
        }
      }
    }
    #changeNum{
      display:none;
      width:45%;
      height:100%;
      text-align:center;
      padding:10px;
      #reduce,#add{
        width:80px;
        height:80px;
        margin-bottom:20px;
      }
      #text{
        width:120px;
        height:80px;
      }
      #sure{
        width:300px;
        height:100px;
        border:none;
        background:#ff0000;
        color:#fff;
        font-size:35px;
      }
    }
  }
  #bottom{
    z-index:5;
    background:#fff;
    width:100%;
    height:100px;
    border-top:10px solid #f6f6f6;
    position:fixed;
    left:0;
    bottom:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    #center{
      position:absolute;
      top:20px;
      right:170px;
      #total span{
        color:#ff0000;
      }
    }
    #right{
      width:150px;
      height:100%;
      background:#ff0000;
      line-height:100px;
      text-align:center;
      span{
        color:#fff;
      }
    }
  }
}
</style>
