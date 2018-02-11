// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '@/static/common.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

Vue.config.debug = true
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
