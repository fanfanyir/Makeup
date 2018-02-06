<template>
  <div id="brand">
    <div id="title"><p>{{ message }}</p></div>
    <div id="brandcon">
      <div v-for="item in items" v-bind:key="item.id">
        <a href="#"><img v-bind:src="item.src"><span >{{ item.id }}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default{
  data () {
    return {
      message: '品牌分类',
      items: [
        {id: '迪奥', src: 'http://img5.imgtn.bdimg.com/it/u=2119815782,403042995&fm=27&gp=0.jpg'},
        {id: '香奈儿', src: 'http://img0.imgtn.bdimg.com/it/u=477648592,679088864&fm=27&gp=0.jpg'},
        {id: '圣罗兰', src: 'http://img2.imgtn.bdimg.com/it/u=3385881269,3044323849&fm=27&gp=0.jpg'},
        {id: '兰蔻', src: 'http://img0.imgtn.bdimg.com/it/u=2078243852,2729084786&fm=27&gp=0.jpg'},
        {id: '纪梵希', src: 'http://img0.imgtn.bdimg.com/it/u=1708780554,2432249886&fm=27&gp=0.jpg'},
        {id: '阿玛尼', src: 'http://img0.imgtn.bdimg.com/it/u=877742864,563766274&fm=11&gp=0.jpg'}
      ]
    }
  },
  methood: function () {
    $.ajax({
      methods: 'GET',
      url: '',
      dataType: 'json',
      success: function (data) {
        for (let i = 0; i <= data.length; i++) {
          $('#brandcon img').eq(i).attr('src', data[i].brand_picture)
          $('#brandcon span').eq(i).html(data[i].brand_name)
        }
      }
    })
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
      height: 350px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div {
        width: 33%;
        height: 150px;
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
