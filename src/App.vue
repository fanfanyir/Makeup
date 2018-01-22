<template>
  <div id="app">
    <login></login>
    <register></register>
    <!--实现跳转<router-view/>-->
  </div>
</template>
<script>
import login from './components/login/login'
import register from './components/register/register'
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello word'
    }
  },
  components: {
    register,
    login
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
