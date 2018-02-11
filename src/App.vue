<template>
  <div id="app">
    <!--<index></index>-->
    <!--<shopping></shopping>-->
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<person></person>-->
    <!--<manage></manage>-->
    <!--<changepw></changepw>-->
    <!--<changenum></changenum>-->
    <!--<feet></feet>-->
    <!--<usercollect></usercollect>-->
    <!--实现跳转<router-view/>-->
    <!--<chooseadress></chooseadress>-->
    <!--<addaddress></addaddress>-->
    <!--<detailstotal></detailstotal>-->
    <!--<detailsheader></detailsheader>-->
    <!--<pay></pay>-->
    <router-view/>
    <!--<div id="zyf_goodslist">-->
    <!--<goodlist></goodlist>-->
    <!--</div>-->
    <!--<div id="zyf_order">-->
    <!--<orderbanner></orderbanner>-->
    <!--</div>-->
    <!--<div id="zyf_detial">-->
    <!--<orderpaydetail></orderpaydetail>-->
    <!--<ordergetdetail></ordergetdetail>-->
    <!--<ordermsgdetail></ordermsgdetail>-->
    <!--</div>-->
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    justify-content: center;
    /*color: #2c3e50;*/
  }
</style>
