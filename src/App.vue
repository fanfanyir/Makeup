<template>
  <div id="app">
    <!--<chooseadress></chooseadress>-->
    <!--<addaddress></addaddress>-->
    <!--<detailstotal></detailstotal>-->
    <!--<detailsheader></detailsheader>-->
    <!--<pay></pay>-->
    <router-view/>
  </div>
</template>

<script>
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address'
import addaddress from './components/add_address/Add_Address'
import detailstotal from './components/details/details'
export default {
  name: 'App',
  components: {
    detailstotal,
    pay,
    Chooseadress,
    addaddress
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
