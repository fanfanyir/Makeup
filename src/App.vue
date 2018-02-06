<template>
  <div id="app">
    <!--<index></index>-->
    <!--<shopping></shopping>-->
    <!--<test></test>-->
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<person></person>-->
    <!--<manage></manage>-->
    <!--<changepw></changepw>-->
    <!--<changenum></changenum>-->
    <!--<feet></feet>-->
    <!--<usercollect></usercollect>-->
    <!--实现跳转<router-view/>-->
    <router-view/>
  </div>
</template>
<script>
import index from './components/index.vue'
import shopping from './components/shopping/shopping.vue'
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
    }
  },
  components: {
    index,
    shopping,
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
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
</style>
