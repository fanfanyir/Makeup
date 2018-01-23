<template>
  <div id="classify1">
    <div id="classify1_1" v-for="item in itemsright1" v-bind:key="item.id">
      <a href="#"><img :src="item.src"/><p>{{item.small}}</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify1',
  data () {
    return {
      itemsright1: [
        {
          id: 'fy11',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '眼部护理'
        },
        {
          id: 'fy12',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '咖喱'
        },
        {
          id: 'fy13',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '精华'
        },
        {
          id: 'fy14',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '乳液'
        },
        {
          id: 'fy15',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '咖喱'
        },
        {
          id: 'fy16',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '乳液'
        },
        {
          id: 'fy17',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '咖喱'
        },
        {
          id: 'fy18',
          src: 'http://ozxb0em6i.bkt.clouddn.com/a1.jpg',
          small: '精华'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#classify1{
  background: #ffffff;
  width: 77%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  #classify1_1{
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
