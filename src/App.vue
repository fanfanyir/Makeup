<template>
  <div id="app">
    <login></login>
    <!--<register></register>-->
    <!--<person></person>-->
    <!--<my></my>-->
    <!--<manage></manage>-->
    <!--<changepw></changepw>-->
    <!--<changenum></changenum>-->
    <!--实现跳转<router-view/>-->
  </div>
</template>
<script>
import login from './components/login'
import register from './components/register'
import person from './components/person'
import my from './components/my'
import manage from './components/manage'
import changepw from './components/change-pw'
import changenum from './components/change-num'
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello word'
    }
  },
  components: {
    register,
    login,
    person,
    my,
    manage,
    changepw,
    changenum
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
</style>
