<template>
  <div id="app">
    <!--<pay></pay>-->
    <chooseadress></chooseadress>
    <router-view/>
  </div>
</template>

<script>
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Adress'
export default {
  name: 'App',
  components: {
    pay,
    Chooseadress
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
  }
</style>
