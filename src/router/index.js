import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'

Vue.use(Router)
const pay = (resolve) => {
  import('@/components/pay/pay').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      title: '支付',
      path: '/pay',
      name: 'pay',
      component: pay
    }
  ]
})
