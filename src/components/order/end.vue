<template>
  <div id="end">
    <orderbanner></orderbanner>
    <ordernav></ordernav>
    <orderend></orderend>
  </div>
</template>
<script>
import orderbanner from './order_banner/order_banner.vue'
import ordernav from './order_nav/order_nav.vue'
import orderend from './order_end/order_end.vue'
export default{
  name: 'end',
  data () {
    return {
    }
  },
  components: {
    orderbanner,
    ordernav,
    orderend
  }
}
</script>
<style lang="scss" scoped>
  #marginn{
    position: relative;
    margin-top: 150px;
  }
</style>
