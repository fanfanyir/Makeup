<template>
  <div id="app">
    <!--<pay></pay>-->
    <!--<chooseadress></chooseadress>-->
    <!--<addaddress></addaddress>-->
    <!--<details></details>-->
    <detailsheader></detailsheader>
    <router-view/>
  </div>
</template>

<script>
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address'
import Addaddress from './components/add_address/Add_Address'
import Details from './components/details/details'
import detailsheader from './components/details-header/details-header'
export default {
  name: 'App',
  components: {
    detailsheader,
    Details,
    Addaddress,
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
