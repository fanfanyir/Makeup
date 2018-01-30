<template>
  <div id="shcontent">
    <!--1-->
    <div id="wrap1">
      <div id="con_top">
        <div id="top_left">
              <input type="checkbox" name="check">
              <span><img src="" alt="商铺标志"> <span>商家名</span> <img src="" alt="向右标志"> </span>
        </div>
        <div id="top_right">
          <a href="#"><span>领券</span></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#" @click="write"><span id="write">编辑</span></a>
        </div>
      </div>
      <div id="content">
        <div id="content_left">
          <input type="checkbox" name="check">
        </div>
        <div id="content_mid">
          <a href="#"><img src="http://img5.imgtn.bdimg.com/it/u=4171676116,824482619&fm=200&gp=0.jpg" alt="商品图片"></a>
        </div>
        <div id="content_right">
          <p>商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述</p>
          <p id="spec">商品规格商品规格商品规格商品规格</p>
          <span>现价</span>
          <span>原价</span>
          <span id="num">×<span id="number">1</span></span>
        </div>
        <div id="changeNum">
          <div id="change">
            <input type="button" id="reduce" value="－" @click="reduce">
            <input type="text" id="text" value="1">
            <input type="button" id="add" value="＋" @click="add">
          </div>
          <div id="sure">
            <input type="button" id="btn_sure" value="确定" @click="submit">
          </div>
        </div>
      </div>
    </div>
    <!--2
    <div id="wrap2">
      <div id="con_top">
        <div id="top_left">
          <input type="checkbox" name="check">
          <span><img src="" alt="商铺标志"> <span>商家名</span> <img src="" alt="向右标志"> </span>
        </div>
        <div id="top_right">
          <a href="#"><span>领券</span></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#"><span>编辑</span></a>
        </div>
      </div>
      <div id="content">
        <div id="content_left">
          <input type="checkbox" name="check">
        </div>
        <div id="content_mid">
          <a href="#"><img src="http://img5.imgtn.bdimg.com/it/u=4171676116,824482619&fm=200&gp=0.jpg" alt="商品图片"></a>
        </div>
        <div id="content_right">
          <p>商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述</p>
          <p id="spec">商品规格商品规格商品规格商品规格商品规格</p>
          <span>现价</span>
          <span>原价</span>
          <span id="num">×<span>1</span></span>
        </div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    write: function () {
      document.getElementById('content_right').style.display = 'none'
      document.getElementById('changeNum').style.display = 'block'
    },
    submit: function () {
      document.getElementById('content_right').style.display = 'block'
      document.getElementById('changeNum').style.display = 'none'
      document.getElementById('number').innerHTML = document.getElementById('text').value
    },
    reduce: function () {
      if (document.getElementById('text').value <= 1) {
        document.getElementById('text').value = 1
      } else {
        document.getElementById('text').value--
      }
    },
    add: function () {
      if (document.getElementById('text').value >= 1) {
        document.getElementById('text').value++
      }
    }
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
        img{
          width:350px;
          height:200px;
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
}
</style>
