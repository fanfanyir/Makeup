<template>
  <div id="classify2">
    <div id="classify1_2" v-for="item in itemsright1" v-bind:key="item.id">
      <a href="#"><img :src="item.src"/><p>{{item.small}}</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify2',
  data () {
    return {
      itemsright1: [
        {
          id: 'fy21',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '眼部护理'
        },
        {
          id: 'fy22',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '咖喱'
        },
        {
          id: 'fy23',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '精华'
        },
        {
          id: 'fy24',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '乳液'
        },
        {
          id: 'fy25',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '咖喱'
        },
        {
          id: 'fy26',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '乳液'
        },
        {
          id: 'fy27',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '咖喱'
        },
        {
          id: 'fy28',
          src: 'http://ozxb0em6i.bkt.clouddn.com/aaaaa.jpg',
          small: '精华'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  #classify2{
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
