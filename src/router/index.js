import Vue from 'vue'
import Router from 'vue-router'
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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
