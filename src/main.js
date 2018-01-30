import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import router from './router'

import 'lib-flexible/flexible'
=======
import routers from './router'
import VueRouter from 'vue-router'
import 'lib-flexible/flexible'
import VueResource from 'vue-resource'
import '../src/assets/common1.css'
import VueAewsomeSwiper from 'vue-awesome-swiper'
import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address'
import Addaddress from './components/add_address/Add_Address'
import detailstotal from './components/details/details'
Vue.config.debug = true
Vue.use(VueAewsomeSwiper)
Vue.use(VueResource)
Vue.use(VueRouter)
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routers: routers,
  base: __dirname,
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: 'pay'},
    {path: '/pay', component: pay},
    {path: '/Choose_Address', component: Chooseadress},
    {path: '/Add_Address', component: Addaddress},
    {path: '/details', component: detailstotal}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
