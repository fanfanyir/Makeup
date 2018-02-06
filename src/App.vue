<template>
  <div id="app">
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<person></person>-->
    <!--<manage></manage>-->
    <!--<changepw></changepw>-->
    <!--<changenum></changenum>-->
    <feet></feet>
    <!--<usercollect></usercollect>-->
    <!--实现跳转<router-view/>-->
    <router-view/>
  </div>
</template>
<script>
import login from './components/login'
import register from './components/register'
import person from './components/person'
import manage from './components/manage'
import changepw from './components/change-pw'
import changenum from './components/change-num'
import feet from './components/feet'
import usercollect from './components/usercollect'
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
    manage,
    changepw,
    changenum,
    feet,
    usercollect
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
