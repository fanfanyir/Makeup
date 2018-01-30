<template>
  <div id="shopping">
    <shtop></shtop>
    <shcontent></shcontent>
    <shbottom></shbottom>
    <bottom></bottom>
  </div>
</template>

<script>
import shtop from './shtop/shtop.vue'
import shcontent from './shcontent/shcontent.vue'
import shbottom from './shbottom/shbottom.vue'
import bottom from './bottom/bottom.vue'

export default {
  components: { shtop, shcontent, shbottom, bottom }
}
</script>

<style>
</style>
