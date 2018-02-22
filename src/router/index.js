import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import shopping from '@/components/shopping/shopping.vue'
import goodlist from '@/components/goodslist/goodlist.vue'
import person from '@/components/person/person.vue'
import Orderbanner from '@/components/order/order_banner/order_banner.vue'
import allget from '@/components/order/get.vue'
import allend from '@/components/order/end.vue'
import allall from '@/components/order/order_all/order_all.vue'
import allmsg from '@/components/order/msg.vue'
import allpay from '@/components/order/pay.vue'
import get from '@/components/order/order_get/order_get.vue'
import getdetail from '@/components/order/order_get/order_getdetail/ordergetdetail.vue'
import payy from '@/components/order/order_pay/order_pay.vue'
import paydetail from '@/components/order/order_pay/order_paydetail/orderpaydetail.vue'
import msg from '@/components/order/order_msg/order_msg.vue'
import msgdetail from '@/components/order/order_msg/order_msgdetail/ordermsgdetail.vue'
import pay from '@/components/pay/pay'
import Chooseadress from '@/components/choose_address/Choose_Address'
import Addaddress from '@/components/add_address/Add_Address'
import detailstotal from '@/components/details/details'
import goodsnorm from '@/components/details_goods_norms/details_goods_norms'
import paypic from '@/components/paypic/paypic'
import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import feet from '@/components/feet/feet.vue'
import manage from '@/components/manage/manage.vue'
import usercollect from '@/components/usercollect/usercollect.vue'
import changenum from '@/components/changenum/change-num.vue'
import changepw from '@/components/changepw/change-pw.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: '/B_MakeupTao/',
  routes: [
    {
      title: '首页',
      path: '/index',
      name: 'index',
      component: index
    },
    {
      title: '支付',
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      tite: '购物车',
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      title: '商品目录',
      path: '/goodlist',
      name: 'goodlist',
      component: goodlist
    },
    {
      title: '我的订单',
      path: '/order',
      name: 'order',
      component: Orderbanner
    },
    {
      title: '待付款订单详情',
      path: '/getdetail',
      name: 'getdetail',
      component: getdetail
    },
    {
      title: '待收货订单详情',
      path: '/paydetail',
      name: 'paydetail',
      component: paydetail
    },
    {
      title: '待评价订单详情',
      path: '/msgdetail',
      name: 'msgdetail',
      component: msgdetail
    },
    {
      title: '收货',
      path: '/allget',
      name: 'allget',
      component: allget,
      children: [
        {
          title: '待收货',
          path: '/order/nav/get',
          name: 'get',
          component: get
        }
      ]
    },
    {
      title: '完成',
      path: '/allend',
      name: 'allend',
      component: allend
    },
    {
      title: '付款',
      path: '/allpay',
      name: 'allpay',
      component: allpay,
      children: [
        {
          title: '待付款',
          path: '/order/nav/pay',
          name: 'payy',
          component: payy
        }
      ]
    },
    {
      title: '评价',
      path: '/allmsg',
      name: 'allmsg',
      component: allmsg,
      children: [
        {
          title: '待评价',
          path: '/order/nav/msg',
          name: 'msg',
          component: msg
        }
      ]
    },
    {
      title: '全部的',
      path: '/allall',
      name: 'allall',
      component: allall
    },
    {path: '/Choose_Address', component: Chooseadress},
    {path: '/Add_Address', component: Addaddress},
    {path: '/details', component: detailstotal},
    {path: '/details_goods_norms', component: goodsnorm},
    {path: '/paypic', component: paypic},
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {path: '/person', name: 'person', component: person},
    {path: '/feet', name: 'feet', component: feet},
    {path: '/manage', name: 'manage', component: manage},
    {path: '/usercollect', name: 'usercollect', component: usercollect},
    {path: '/changenum', name: 'changenum', component: changenum},
    {path: '/changepw', name: 'changepw', component: changepw}
  ]
})
