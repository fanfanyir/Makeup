<template>
  <div id="classify3">
    <div id="classify1_2" v-for="item in itemsright1" v-bind:key="item.kind_id">
      <a href="#"><img :src="item.min_photo"/><p>{{item.kind_min}}</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify3',
  data () {
    return {
      itemsright1: [
        {
          kind_id: 'fy21',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '眼部护理'
        },
        {
          kind_id: 'fy22',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '咖喱'
        },
        {
          kind_id: 'fy23',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '精华'
        },
        {
          kind_id: 'fy24',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '乳液'
        },
        {
          kind_id: 'fy25',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '咖喱'
        },
        {
          kind_id: 'fy26',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '乳液'
        },
        {
          kind_id: 'fy27',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '咖喱'
        },
        {
          kind_id: 'fy28',
          min_photo: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          kind_min: '精华'
        }
      ]
    }
  },
  price: function () {
    this.$http({
      method: 'GET',
      url: 'http://zxhbzu.free.ngrok.cc/kind.htm?kind_max=香水',
      dataType: 'json',
      async: false,
      xhrFields: {withCredentials: true}
    }).then(function (response) {
      this.itemsright1 = JSON.parse(JSON.parse(response.data))
    }, function () {
      console.log('请求失败')
    })
  },
  mounted: function () {
    this.price()
  }
}
</script>
<style lang="scss" scoped>
  #classify3{
    background: #ffffff;
    width: 77%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    #classify1_2{
      img{
        width: 78px;
        height: 78px;
        margin-bottom: 5px;
      }
      justify-content: center;
      display: flex;
      text-align: center;
      align-items: center;
      width: 25%;
      height: 50%;
    }
  }
</style>
