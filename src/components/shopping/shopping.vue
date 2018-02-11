<template>
  <div id="shopping">
    <shtop></shtop>
    <shcontent></shcontent>
    <bottom></bottom>
  </div>
</template>

<script type="text/javascript">
import shtop from './shtop/shtop.vue'
import shcontent from './shcontent/shcontent.vue'
import bottom from '../bottom/bottom.vue'

export default {
  name: 'shopping',
  components: { shtop, shcontent, bottom }
}
</script>

<style>
</style>
