import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import index from '@/components/index'
// import goodslist from '@/components/goodslist/goodslist'
// import nav from '@/components/goodslist/goodslist_main/nav'
// import banner from '@/components/goodslist/goodslist_banner/banner'

Vue.use(Router)

// const banner = (resolve) => {
//   import('@/components/goodslist/goodslist_banner/banner').then((module) => {
//     resolve(module)
//   })
// }
//
// const nav = (resolve) => {
//   import('@/components/goodslist/goodslist_main/nav').then((module) => {
//     resolve(module)
//   })
// }

=======
// import index from '@/components/index'

Vue.use(Router)
const pay = (resolve) => {
  import('@/components/pay/pay').then((module) => {
    resolve(module)
  })
}
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'index',
      component: index
=======
      redirect: '/index'
    },
    {
      title: '支付',
      path: '/pay',
      name: 'pay',
      component: pay
>>>>>>> abe88b5821dfc3e193d17998cd2a01dea77ff899
    }
    // {
    //   path: '/',
    //   redirect: '/goodslist',
    //   name: 'goodslist',
    //   component: goodslist
    // },
    // {
    //   title: '头部banner',
    //   path: '/banner',
    //   name: 'banner',
    //   component: banner
    // },
    // {
    //   title: '头部nav',
    //   path: '/nav',
    //   name: 'nav',
    //   component: nav
    // }
  ]
})
