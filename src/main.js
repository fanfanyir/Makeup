import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible'

Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.debug = true
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
