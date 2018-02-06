import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'

Vue.config.debug = true
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
