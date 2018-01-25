<template>
  <div id="app">
    <login></login>
    <!--<register></register>-->
    <!--<person></person>-->
    <!--实现跳转<router-view/>-->
  </div>
</template>
<script>
import login from './components/login'
import register from './components/register'
import person from './components/person'
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
    person
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
