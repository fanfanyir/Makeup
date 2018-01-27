// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import VueResource from 'vue-resource'
import '../src/assets/common1.css'
import VueAewsomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAewsomeSwiper)
Vue.use(VueResource)
// import  commom from '../static/common.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
