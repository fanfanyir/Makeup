<template>
  <div id="shopping">
    <shtop></shtop>
    <shcontent></shcontent>
    <bottom></bottom>
  </div>
</template>

<script>
import shtop from '../shtop/shtop.vue'
import shcontent from '../shcontent/shcontent.vue'
import bottom from '../bottom/bottom.vue'

export default {
  components: { shtop, shcontent, bottom }
}
</script>

<style>
</style>
