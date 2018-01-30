import pay from './components/pay/pay.vue'
import Chooseadress from './components/choose_address/Choose_Address'
import Address from './components/add_address/Add_Address'
// import detailstotal from './components/details/details'
const routers = [
  {
    path: '/pay',
    name: 'pay',
    components: pay
  },
  {
    path: '/Choose_Address',
    name: 'Choose_Address',
    components: Chooseadress
  },
  {
    path: '/Add_Address',
    name: 'Add_Address',
    components: Address
  }
]
export default routers
