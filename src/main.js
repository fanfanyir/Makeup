// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import VueRouter from 'vue-router'
import '@/assets/common/common.css'
import 'lib-flexible/flexible.js'
import VueResource from 'vue-resource'
import login from './components/login.vue'
import register from './components/register.vue'
Vue.config.debug = true
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routers: routers,
  base: __dirname,
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: 'login'},
    {path: './', components: login},
    {path: './', components: register}
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
