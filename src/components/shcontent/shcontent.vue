<template>
  <div id="shcontent">
    <!--1-->
    <div id="wrap1">
      <div id="con_top">
        <div id="top_left">
              <input type="checkbox" name="check">
              <span><img src="../../assets/shcontent/shop.png" width="20" height="20" alt="商铺标志"> <span>商家名</span> <img src="../../assets/shcontent/right.png" width="18" height="10" alt="向右标志"> </span>
        </div>
        <div id="top_right">
          <a href="#"><a href="#" @click="del"><span id="delete">删除</span></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>领券</span></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#" @click="write"><span id="write">编辑</span></a>
        </div>
      </div>
      <div id="content">
        <div id="content_left">
          <input type="checkbox" name="check">
        </div>
        <div id="content_mid">
          <a href="#"><img src="" alt="商品图片"></a>
        </div>
        <div id="content_right">
          <p id="desc">商品描述</p>
          <p id="spec">商品规格</p>
          <span id="price">￥<span>12</span></span>
          <span id="old_price">￥<span>12</span></span>
          <span id="num">×<span id="number">2</span></span>
        </div>
        <div id="changeNum">
          <div id="change">
            <input type="button" id="reduce" value="－" @click="reduce">
            <input type="text" id="text" class="text_box" value="1">
            <input type="button" id="add" value="＋" @click="add">
          </div>
          <div id="sure">
            <input type="button" id="btn_sure" value="确定" @click="submit">
          </div>
        </div>
      </div>
    </div>
    <div id="shbottom">
      <div id="left">
        <input type="checkbox" name="check" id="check">
        <span>全选</span>
      </div>
      <div id="center">
        <span id="total">合计：<span>￥0</span></span>
      </div>
      <div id="right">
        <span id="account">结算：(<span>0</span>)</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  methods: {
    equal: function () {
      if ($('#check').checked === true) {
        alert(23)
      }
    },
    del: function () {
      if (confirm('确认删除？')) {
        $('#wrap1').css('display', 'none')
        alert('删除成功')
      }
    },
    write: function () {
      $('#content_right').hide()
      document.getElementById('changeNum').style.display = 'block'
    },
    submit: function () {
      document.getElementById('content_right').style.display = 'block'
      document.getElementById('changeNum').style.display = 'none'
      document.getElementById('number').innerHTML = document.getElementById('text').value
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
    get: function () {
      this.$http({
        type: 'POST',
        url: 'http://lxcarts.free.ngrok.cc/selectCart.htm',
        contentType: 'jsonp',
        data: JSON.stringify({user_id: 1}),
        async: false,
        xhrFields: {withCredentials: true}
      }).then(function (res) {
        console.log(res.data)
        var str = res.data
        $('#content_mid img').attr('src', str.pro_shop.pro_shop_pic)
        $('#content_right #spec').html(str.pro_shop_spec)
        $('#content #number').html(str.cart_num)
        $('#price span').html(str.shop_price)
        $('#old_price span').html(str.pro_shop_oldprice)
      }, function () {
        console.log('请求失败')
      })
    }
  },
  mounted: function () {
    this.get()
    this.equal()
  }
}
</script>

<style lang="scss" scoped>
#shcontent {
  #wrap1,#wrap2,#wrap3{
    margin-top:15px;
    padding:0 10px;
    border-bottom:15px solid #f6f6f6;
    #con_top{
      width:100%;
      font-size:25px;
      display:flex;
      justify-content:space-between;
      #top_left img{
        margin-left:15px;
      }
    }
    #content{
      display:flex;
      justify-content:space-around;
      #content_left{
        width:10%;
      }
      #content_mid{
        width:50%;
        height:230px;
        padding:10px;
        img{
          width:100%;
          height:100%;
        }
      }
      #content_right{
        display:block;
        width:40%;
        margin:10px 0;
        p{
          margin-bottom:5px;
        }
        #spec{
          color:#ccc;
        }
        span{
          margin-left:10px;
        }
        #price{
          font-size:30px;
          color:#ff0000;
          span{
            color:#ff0000;
          }
        }
        #old_price{
          color:#ccc;
          text-decoration: line-through;
          span{
            color:#ccc;
          }
        }
        #num{
          float:right;
          #number{
          }
        }
      }
      #changeNum{
        display:none;
        padding-top:20px;
        width:40%;
        #change{
          #text{
            width:150px;
            height:50px;
          }
          #add,#reduce{
            width:50px;
            height:50px;
          }
        }
       #sure{
         margin-top:20px;
         #btn_sure{
           border:none;
           width:100%;
           height:80px;
           color:#fff;
           font-size:35px;
           letter-spacing: 10px;
           background:#ff0000;
         }

       }
      }
    }
  }
  #shbottom{
    z-index:5;
    background:#fff;
    width:100%;
    height:100px;
    border-top:10px solid #f6f6f6;
    position:fixed;
    left:0;
    bottom:110px;
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
